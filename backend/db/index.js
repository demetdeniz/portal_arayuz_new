const { Pool } = require('pg');//pg kutuphaneisnin Pool özelliğini alıyoruz.bu kutuphane 
require('dotenv').config();//env dosyasını okur

let pool;

try {//hata olabilecek kodları güvenli bir şekilde denememizi sağlar, eğer hata olursa catch bloğu çalışır
  pool = new Pool({//veritabanına bağlanmak için gerekli bilgileri .env dosyasından alırız. new pool ifadesiyle PostgerSQL'e bağlantı oluşturuyoruz
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
  });

  pool.query('SELECT NOW()', (err, res) => {//veritabanına küçük bir test sorgusu gönderiyoruz bu sadece bağıntının düzgün çalışığ çalışmadığını test etmek için kullanılır
    if (err) {
      console.error(' Veritabanına bağlanılamadı:', err.message);//hata
    } else {
      console.log(' Veritabanına başarıyla bağlanıldı:', res.rows[0]);//sonuçları tutar 
    }
  });

} catch (err) {//try bloğunda beklenmeyen bir hata olursa catch kısmı çalışır
  console.error(' PostgreSQL bağlantısı oluşturulamadı:', err.message);
}

module.exports = pool;//pool nesnesini dğer dosyalara açar

/*
.env içindeki bilgileri okur.

PostgreSQL'e bağlanmaya çalışır.

Başarıyla bağlanırsa bunu ekrana yazar.

Bağlantıyı pool ile dışarıya açar ki başka yerlerde kullanabilelim.




*/