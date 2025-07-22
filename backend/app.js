const express = require('express');//web sunucusu kurmamıza yarar,API isteklerini yönetir
const cors = require('cors');//tarayıcılar arası veri paylaşımı(fornt-back güvenli hale getirilir)
require('dotenv').config();//env dosyasındaki şifreli bilgileri alır
const pool = require('./db/index');//veritabanına bağlanmak için oluşturulan havuz(index.js içindeki yapı )
const multer = require('multer');//kullanıcıdan gelen dosyaları (foroğrah vs) yüklemeye yarar
const path = require('path');//fs ile birlikte dosya yollarını ve klasörleri yönetmek için kullanılır.
const fs = require('fs');
//üst kısımda gerekli modulleri yükledik

const app = express();

// FOTOĞRAF YÜKLEME CONFIG, kullanıcıdan gelen resimleri uploads/ klasörüne kaydetmek için kullanılır.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {//dosyanın nereye kaydedileceğini belirtir(yoksa klasör oluşturur)
    const uploadPath = 'uploads/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {//dosyaya benzersiz bri ad verir
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage });

app.use(cors());//diğer uygulamalrın bu sunucuya erişebilmesini sağlar
app.use(express.json());//gelen verileirn JSON olduğunu belirtir(post isteklerinde)
app.use('/uploads', express.static('uploads'));//fotoğrafların URL üzerinden açılmasını sağlar

//  Anasayfa endpoint'i, server çalışıyor mu test ederiz
app.get('/', (req, res) => {
  res.send('API çalışıyor!');
});

//  Kullanıcı listeleme
app.get('/portal-users', async (req, res) => {//tüm kullanıcıları veritabanından getirir,
  try {//görev/departman eşleşmelerini JSON olarak getirir.kullanıcılar+görev-departman bilgileir ile birlikte gelir
    const result = await pool.query(`
      SELECT 
        u.*,
        (
          SELECT json_agg(json_build_object(
            'departmentId', pu.department_id,
            'role', pu.status,
            'departmentName', d.name
          ))
          FROM portal_departman_users pu
          INNER JOIN portal_departman_organizasyon d 
            ON pu.department_id = d.id
          WHERE pu.user_id = u.id AND pu.is_delete = false
        ) AS departmangorevlist
      FROM portal_user u
      WHERE u.is_delete = false
    `);

    const departmanUser = await pool.query(`SELECT * FROM portal_departman_users`);
    const organizasyonnUser = await pool.query(`SELECT * FROM portal_departman_organizasyon`);

    res.json({ data: result.rows, departman: departmanUser.rows, organizasyon: organizasyonnUser.rows });
  } catch (error) {
    console.error('Kullanıcıları alma hatası:', error);
    res.status(500).json({ error });
  }
});

//  Kullanıcı silme (soft delete)
app.delete('/portal-users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    await pool.query(`
      UPDATE portal_user
      SET is_delete = true
      WHERE id = $1
    `, [userId]);

    await pool.query(`
      UPDATE portal_departman_users
      SET is_delete = true
      WHERE user_id = $1
    `, [userId]);

    res.json({ message: 'Kullanıcı silindi.' });
  } catch (error) {
    console.error('Kullanıcı silme hatası:', error);
    res.status(500).json({ error: 'Kullanıcı silinemedi.' });
  }
});

//  Kullanıcı ekleme
app.post('/users/upload', upload.single('photo'), async (req, res) => {//Angulardan gelen kullanıcı bilgileirni alır,kullancı bilgileirni portal_user tablosuna yazar
  try {
    const userData = JSON.parse(req.body.userData || '{}');//Angulardan gelen userData(JSON string)verisini objeye çeviriyoruz, eğer hiç veri yoksa {}yani boş bir nesne oluşturuyoruz
    const {//userData içindeki verileri tek tek değişken olarak ayırır (destructuring).
      user_name, email, password, sicil, phone, user_type,
      user_typename, is_active, dogum_tarih, is_baslangic,
      puan, gecmis_tecrube, departmangorevlist
    } = userData;

    const photo = req.file ? req.file.filename : null;//fotoğraf yüklendiyse req.file.filename ismi ile al değilse null kalsın

   //Bu sql komutu yeni kullancııyı veri tabanına ekler, 
    const result = await pool.query(`
      INSERT INTO portal_user (
        user_name, email, password, sicil, phone, user_type,
        user_typename, is_active, photo, dogum_tarih, is_baslangic,
        puan, gecmis_tecrube, is_delete
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,false)
      RETURNING id
    `, [
      user_name, email, password, sicil, phone, user_type,
      user_typename, is_active === 'true' || is_active === true,
      photo, dogum_tarih, is_baslangic, puan, gecmis_tecrube
    ]);

    const userId = result.rows[0].id;//bir üst satırda alınan id, burada userId değişkenine aktarılır

    for (const item of departmangorevlist || []) {//departmangorevlist içinde kaç tane görev/departman varsa, her biri veritabanına eklenir
      await pool.query(`
        INSERT INTO portal_departman_users (
          user_id, department_id, status, sicil, is_delete, is_active
        ) VALUES ($1, $2, $3, $4, false, true)
      `, [userId, item.departmanId, item.rol, sicil]);//yeni eklenen kullanıcıya ait id'dir
    }

    res.status(201).json({ message: 'Kullanıcı başarıyla eklendi.' });//Hata olursa kullanıcıya mesaj gönderilir ve detaylar konsola yazılır.

  } catch (error) {
    console.error('Fotoğraflı kullanıcı ekleme hatası:', error);
    res.status(500).json({ error: 'Fotoğraflı kullanıcı eklenemedi.' });
  }//departmangorevlist içinde gelen her görev/departman eşleşmesini ekler
});

//  Kullanıcı güncelleme (fotoğraflı + departman/görev güncelleme)
app.patch('/users/:id/upload', upload.single('photo'), async (req, res) => {//fotoğraf varsa değiştirir, yoksa eskisini korur.
  const userId = req.params.id;//URL'den alınan id
  const userData = JSON.parse(req.body.userData);//Form verisi
  const photo = req.file ? req.file.filename : null;//yeni fotoğraf varsa o,yoksa boş kalır

  //kullanıcının görev eşleşmeleri önce silinir,sonra yeni gelenlerle yeniden eklenir.

  try {
    const values = [
      userData.user_name,
      userData.email,
      userData.password,
      userData.sicil,
      userData.phone,
      userData.user_type,
      userData.user_typename,
      userData.is_active,
      photo || userData.photo,
      userData.dogum_tarih,
      userData.is_baslangic,
      userData.puan,
      userData.gecmis_tecrube,
      userId
    ];//bu dizi, SQL komutu $1, $2 ... $14 alanlarıyla eşleşir.

    const updateQuery = `
      UPDATE portal_user SET
        user_name = $1,
        email = $2,
        password = $3,
        sicil = $4,
        phone = $5,
        user_type = $6,
        user_typename = $7,
        is_active = $8,
        photo = $9,
        dogum_tarih = $10,
        is_baslangic = $11,
        puan = $12,
        gecmis_tecrube = $13
      WHERE id = $14
    `;//veritabanındaki kullanıcı bilgileirni günceller, WHERE id=$14->sadec bu kullanıcyı güncelle

    await pool.query(updateQuery, values);

    // departman-görev bilgilerini sıfırla ve güncelle
    await pool.query(`DELETE FROM portal_departman_users WHERE user_id = $1`, [userId]);
    //Önce bu kullanıcıya ait tüm görevleri siliyoruz
    //böylece eskileri kalmıyor, temiz başlıyor

    const departmangorevlist = userData.departmangorevlist || [];

    for (const item of departmangorevlist) {
      await pool.query(`
        INSERT INTO portal_departman_users (
          user_id, department_id, status, sicil, is_delete, is_active
        ) VALUES ($1, $2, $3, $4, false, true)
      `, [userId, item.departmanId, item.rol, userData.sicil]);
    }
    //yeni gelen görev-departman listesi tekrar eklenir
    //tıpkı kullanıcı eklemedeki gibi

    res.status(200).json({ message: 'Kullanıcı ve görevler güncellendi' });
  } catch (error) {//Hata olursa kullanıcıya bilgi verilir ve konsola log düşer.
    console.error('Güncelleme hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

//  Tüm departmanları getiren endpoint
app.get('/departmanlar', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, name FROM portal_departman_organizasyon
      WHERE is_delete = false AND is_active = true
      ORDER BY id
    `);
    res.json(result.rows);
  } catch (error) {
    console.error('Departmanları alma hatası:', error);
    res.status(500).json({ error: 'Departmanlar alınamadı.' });
  }
});

//  SUNUCUYU BAŞLAT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Sunucu ${PORT} portunda çalışıyor`);
});
