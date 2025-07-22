/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
/**
 * Angular Component Base Module
 */
import { getValue, isUndefined, setValue, isNullOrUndefined, attributes, createElement } from '@syncfusion/ej2-base';
import { EventEmitter } from '@angular/core';
import { clearTemplate, registerEvents } from './util';
var ComponentBase = /** @class */ (function () {
    function ComponentBase() {
        this.isProtectedOnChange = true;
        this.isFormInit = true;
    }
    ComponentBase.prototype.saveChanges = function (key, newValue, oldValue) {
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties["".concat(key)] = oldValue;
        this.changedProperties["".concat(key)] = newValue;
        this.finalUpdate();
        var changeTime = setTimeout(this.dataBind.bind(this));
        var clearUpdate = function () {
            clearTimeout(changeTime);
        };
        this.finalUpdate = clearUpdate;
    };
    ComponentBase.prototype.ngOnInit = function (isTempRef) {
        var tempOnThis = isTempRef || this;
        tempOnThis.registeredTemplate = {};
        tempOnThis.ngBoundedEvents = {};
        tempOnThis.isAngular = true;
        tempOnThis.isFormInit = true;
        /* istanbul ignore next */
        if (isTempRef) {
            this.tags = isTempRef.tags;
        }
        tempOnThis.tags = this.tags || [];
        tempOnThis.complexTemplate = this.complexTemplate || [];
        tempOnThis.tagObjects = [];
        tempOnThis.ngAttr = this.getAngularAttr(tempOnThis.element);
        /* istanbul ignore next */
        tempOnThis.createElement = function (tagName, prop) {
            var ele = tempOnThis.srenderer ? tempOnThis.srenderer.createElement(tagName) : createElement(tagName);
            if (typeof (prop) === 'undefined') {
                return ele;
            }
            ele.innerHTML = (prop.innerHTML ? prop.innerHTML : '');
            if (prop.className !== undefined) {
                ele.className = prop.className;
            }
            if (prop.id !== undefined) {
                ele.id = prop.id;
            }
            if (prop.styles !== undefined) {
                ele.setAttribute('style', prop.styles);
            }
            if (tempOnThis.ngAttr !== undefined) {
                ele.setAttribute(tempOnThis.ngAttr, '');
            }
            if (prop.attrs !== undefined) {
                attributes(ele, prop.attrs);
            }
            return ele;
        };
        for (var _i = 0, _a = tempOnThis.tags; _i < _a.length; _i++) {
            var tag = _a[_i];
            var tagObject = {
                instance: getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), tempOnThis),
                name: tag
            };
            tempOnThis.tagObjects.push(tagObject);
        }
        var complexTemplates = Object.keys(tempOnThis);
        for (var i = 0; i < complexTemplates.length; i++) {
            var compProp = getValue(complexTemplates[parseInt(i.toString(), 10)], tempOnThis);
            if (typeof compProp === 'object' && compProp && compProp.elementRef) {
                if (typeof compProp === 'object' && compProp && compProp.elementRef && complexTemplates[parseInt(i.toString(), 10)].indexOf('_') !== -1 && complexTemplates[parseInt(i.toString(), 10)].indexOf('Ref') === -1) {
                    setValue(complexTemplates[parseInt(i.toString(), 10)] + 'Ref', compProp, tempOnThis);
                }
                if (tempOnThis.viewContainerRef && !getValue('_viewContainerRef', compProp.elementRef.nativeElement) && !getValue('propName', compProp.elementRef.nativeElement)) {
                    setValue('_viewContainerRef', tempOnThis.viewContainerRef, compProp.elementRef.nativeElement);
                    setValue('propName', complexTemplates[parseInt(i.toString(), 10)].replace('Ref', ''), compProp.elementRef.nativeElement);
                }
            }
        }
        complexTemplates = Object.keys(tempOnThis);
        complexTemplates = complexTemplates.filter(function (val) {
            return /Ref$/i.test(val) && /_/i.test(val);
        });
        for (var _b = 0, complexTemplates_1 = complexTemplates; _b < complexTemplates_1.length; _b++) {
            var tempName = complexTemplates_1[_b];
            var propName = tempName.replace('Ref', '');
            var val = {};
            setValue(propName.replace('_', '.'), getValue(propName, tempOnThis), val);
            tempOnThis.setProperties(val, true);
        }
    };
    ComponentBase.prototype.getAngularAttr = function (ele) {
        var attributes = ele.attributes;
        var length = attributes.length;
        var ngAr;
        for (var i = 0; i < length; i++) {
            /* istanbul ignore next */
            if (/_ngcontent/g.test(attributes[parseInt(i.toString(), 10)].name)) {
                ngAr = attributes[parseInt(i.toString(), 10)].name;
            }
        }
        return ngAr;
    };
    ComponentBase.prototype.ngAfterViewInit = function (isTempRef) {
        var tempAfterViewThis = isTempRef || this;
        var regExp = /ejs-tab|ejs-accordion/g;
        /* istanbul ignore next */
        if (regExp.test(tempAfterViewThis.ngEle.nativeElement.outerHTML)) {
            tempAfterViewThis.ngEle.nativeElement.style.visibility = 'hidden';
        }
        /**
         * Root level template properties are not getting rendered,
         * Due to ngonchanges not get triggered.
         * so that we have set template value for root level template properties,
         * for example: refer below syntax
         * ```html
         * <ejs-grid>
         * <e-column></e-column>
         * <ng-template #editSettingsTemplate></ng-template>
         * </ejs-grid>
         * ```
         */
        var templateProperties = Object.keys(tempAfterViewThis);
        templateProperties = templateProperties.filter(function (val) {
            return /Ref$/i.test(val);
        });
        var ngtempRef = tempAfterViewThis.getModuleName() === 'DocumentEditor';
        for (var _i = 0, templateProperties_1 = templateProperties; _i < templateProperties_1.length; _i++) {
            var tempName = templateProperties_1[_i];
            var propName = tempName.replace('Ref', '');
            setValue(propName.replace('_', '.'), getValue(propName + 'Ref', tempAfterViewThis), tempAfterViewThis);
        }
        // Used setTimeout for template binding
        // Refer Link: https://github.com/angular/angular/issues/6005
        var appendToComponent = function (tempAfterViewThis) {
            /* istanbul ignore else  */
            if (typeof window !== 'undefined' && tempAfterViewThis.element) {
                tempAfterViewThis.appendTo(tempAfterViewThis.element);
                tempAfterViewThis.ngEle.nativeElement.style.visibility = '';
            }
        };
        if (!ngtempRef && !tempAfterViewThis.getModuleName().includes('btn')) {
            setTimeout(function () {
                appendToComponent(tempAfterViewThis);
            });
        }
        else {
            appendToComponent(tempAfterViewThis);
        }
    };
    ComponentBase.prototype.ngOnDestroy = function (isTempRef) {
        var tempOnDestroyThis = isTempRef || this;
        /* istanbul ignore else  */
        setTimeout(function () {
            if (typeof window !== 'undefined' && (tempOnDestroyThis.element.classList.contains('e-control'))) {
                if (tempOnDestroyThis.ngOnFocus !== undefined && tempOnDestroyThis.ngOnBlur !== undefined) {
                    var ele = tempOnDestroyThis.inputElement || tempOnDestroyThis.element;
                    ele.removeEventListener('focus', tempOnDestroyThis.ngOnFocusBound);
                    ele.removeEventListener('blur', tempOnDestroyThis.ngOnBlurBound);
                    tempOnDestroyThis.ngOnFocusBound = null;
                    tempOnDestroyThis.ngOnBlurBound = null;
                }
                tempOnDestroyThis.destroy();
                tempOnDestroyThis.clearTemplate(null);
                // removing bounded events and tagobjects from component after destroy
                setTimeout(function () {
                    for (var _i = 0, _a = Object.keys(tempOnDestroyThis); _i < _a.length; _i++) {
                        var key = _a[_i];
                        var value = tempOnDestroyThis["".concat(key)];
                        if (value && /object/.test(typeof value) && Object.keys(value).length !== 0) {
                            if (/properties|changedProperties|childChangedProperties|oldProperties|moduleLoader/.test(key)) {
                                for (var _b = 0, _c = Object.keys(tempOnDestroyThis["".concat(key)]); _b < _c.length; _b++) {
                                    var propKey = _c[_b];
                                    var propValue = value["".concat(propKey)];
                                    if (propValue && /object/.test(typeof propValue) && Object.keys(propValue).length !== 0 && (propValue.parent || propValue.parentObj)) {
                                        tempOnDestroyThis["".concat(key)]["".concat(propKey)] = null;
                                    }
                                }
                            }
                            else {
                                if (value.parent || value.parentObj) {
                                    tempOnDestroyThis["".concat(key)] = null;
                                }
                            }
                        }
                    }
                });
            }
        });
    };
    ComponentBase.prototype.clearTemplate = function (templateNames, index) {
        clearTemplate(this, templateNames, index);
    };
    ComponentBase.prototype.ngAfterContentChecked = function (isTempRef) {
        var tempAfterContentThis = isTempRef || this;
        for (var _i = 0, _a = tempAfterContentThis.tagObjects; _i < _a.length; _i++) {
            var tagObject = _a[_i];
            if (!isUndefined(tagObject.instance) &&
                (tagObject.instance.isInitChanges || tagObject.instance.hasChanges || tagObject.instance.hasNewChildren)) {
                var propObj = {};
                if (tagObject.instance.isInitChanges) {
                    // For angular 9 compatibility
                    // Not able to get complex directive properties reference ni Onint hook
                    // So we have constructed property here and used
                    var complexDirProps = void 0;
                    var list = getValue('instance.list', tagObject);
                    if (list && list.length) {
                        complexDirProps = list[0].directivePropList;
                    }
                    var skip = true;
                    if (tempAfterContentThis.getModuleName && tempAfterContentThis.getModuleName() === 'gantt') {
                        skip = false;
                    }
                    if (complexDirProps && skip && complexDirProps.indexOf(tagObject.instance.propertyName) === -1) {
                        var compDirPropList = Object.keys(tagObject.instance.list[0].propCollection);
                        for (var h = 0; h < tagObject.instance.list.length; h++) {
                            tagObject.instance.list["".concat(h)].propCollection[tagObject.instance.propertyName] = [];
                            var obj = {};
                            for (var k = 0; k < compDirPropList.length; k++) {
                                var complexPropName = compDirPropList[parseInt(k.toString(), 10)];
                                obj["".concat(complexPropName)] = tagObject.instance.list["".concat(h)].propCollection["".concat(complexPropName)];
                            }
                            var _loop_1 = function (i) {
                                var tag = tagObject.instance.list["".concat(h)].tags[parseInt(i.toString(), 10)];
                                var childObj = getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), tagObject.instance.list["".concat(h)]);
                                if (childObj) {
                                    var innerchildObj = tagObject.instance.list["".concat(h)]['child' + tag.substring(0, 1).toUpperCase() + tag.substring(1)];
                                    // Update the inner child tag objects
                                    var updateChildTag_1 = function (innerchild) {
                                        var innerLevelTag = [];
                                        if (innerchild) {
                                            for (var j = 0; j < innerchild.list.length; j++) {
                                                var innerTag = innerchild.list[0].tags[0];
                                                if (innerTag) {
                                                    var innerchildTag = getValue('child' + innerTag.substring(0, 1).toUpperCase() + innerTag.substring(1), innerchild.list[parseInt(j.toString(), 10)]);
                                                    if (innerchildTag) {
                                                        innerchild.list[parseInt(j.toString(), 10)].tagObjects
                                                            .push({ instance: innerchildTag, name: innerTag });
                                                        innerLevelTag.push(innerchildTag);
                                                    }
                                                }
                                            }
                                        }
                                        // check for inner level tag
                                        if (innerLevelTag.length !== 0) {
                                            for (var l = 0; l < innerLevelTag.length; l++) {
                                                updateChildTag_1(innerLevelTag[parseInt(l.toString(), 10)]);
                                            }
                                        }
                                    };
                                    updateChildTag_1(innerchildObj);
                                    tagObject.instance.list["".concat(h)].tagObjects.push({ instance: childObj, name: tag });
                                }
                            };
                            for (var i = 0; i < tagObject.instance.list["".concat(h)].tags.length; i++) {
                                _loop_1(i);
                            }
                            tagObject.instance.list["".concat(h)].propCollection[tagObject.instance.propertyName].push(obj);
                        }
                    }
                    // End angular 9 compatibility
                    propObj[tagObject.name] = tagObject.instance.getProperties();
                    tempAfterContentThis.setProperties(propObj, tagObject.instance.isInitChanges);
                }
                else {
                    /* istanbul ignore next */
                    var hasDiffLength = false;
                    if ((tempAfterContentThis[tagObject.name].length !== tagObject.instance.list.length) || (/diagram|DashboardLayout/.test(tempAfterContentThis.getModuleName()))) {
                        tempAfterContentThis[tagObject.name] = tagObject.instance.list;
                        hasDiffLength = true;
                    }
                    for (var _b = 0, _c = tagObject.instance.list; _b < _c.length; _b++) {
                        var list = _c[_b];
                        if (list.tags) {
                            for (var _d = 0, _e = list.tags; _d < _e.length; _d++) {
                                var tag = _e[_d];
                                var innerChild = getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), list);
                                if (innerChild) {
                                    list.tagObjects.push({ instance: innerChild, name: tag });
                                }
                            }
                        }
                        var curIndex = tagObject.instance.list.indexOf(list);
                        var curChild = getValue(tagObject.name, tempAfterContentThis)["".concat(curIndex)];
                        var complexTemplates = Object.keys(curChild);
                        complexTemplates = complexTemplates.filter(function (val) {
                            return /Ref$/i.test(val);
                        });
                        if (curChild.properties && Object.keys(curChild.properties).length !== 0) {
                            for (var _f = 0, complexTemplates_2 = complexTemplates; _f < complexTemplates_2.length; _f++) {
                                var complexPropName = complexTemplates_2[_f];
                                complexPropName = complexPropName.replace(/Ref/, '');
                                curChild.properties["".concat(complexPropName)] = !curChild.properties["".concat(complexPropName)] ?
                                    curChild.propCollection["".concat(complexPropName)] : curChild.properties["".concat(complexPropName)];
                            }
                        }
                        if (!isUndefined(curChild) && !isUndefined(curChild.setProperties)) {
                            if (/diagram|DashboardLayout/.test(tempAfterContentThis.getModuleName())) {
                                curChild.setProperties(list.getProperties(), true);
                            }
                            else {
                                curChild.setProperties(list.getProperties());
                            }
                        }
                        list.isUpdated = true;
                    }
                    if ((/grid/.test(tempAfterContentThis.getModuleName()) && hasDiffLength) || /chart/.test(tempAfterContentThis.getModuleName())) {
                        propObj[tagObject.name] = tagObject.instance.getProperties();
                        tempAfterContentThis.setProperties(propObj, tagObject.instance.isInitChanges);
                    }
                }
            }
        }
    };
    ComponentBase.prototype.registerEvents = function (eventList) {
        registerEvents(eventList, this);
    };
    ComponentBase.prototype.twoWaySetter = function (newVal, prop) {
        var oldVal = getValue(prop, this.properties);
        if (oldVal === newVal) {
            return;
        }
        this.saveChanges(prop, newVal, oldVal);
        setValue(prop, (isNullOrUndefined(newVal) ? null : newVal), this.properties);
        getValue(prop + 'Change', this).emit(newVal);
    };
    ComponentBase.prototype.addTwoWay = function (propList) {
        var _this = this;
        var _loop_2 = function (prop) {
            getValue(prop, this_1);
            Object.defineProperty(this_1, prop, {
                get: function () {
                    return getValue(prop, _this.properties);
                },
                set: function (newVal) { return _this.twoWaySetter(newVal, prop); }
            });
            setValue(prop + 'Change', new EventEmitter(), this_1);
        };
        var this_1 = this;
        for (var _i = 0, propList_1 = propList; _i < propList_1.length; _i++) {
            var prop = propList_1[_i];
            _loop_2(prop);
        }
    };
    ComponentBase.prototype.addEventListener = function (eventName, handler) {
        var eventObj = getValue(eventName, this);
        if (!isUndefined(eventObj)) {
            if (!this.ngBoundedEvents["".concat(eventName)]) {
                this.ngBoundedEvents["".concat(eventName)] = new Map();
            }
            this.ngBoundedEvents["".concat(eventName)].set(handler, eventObj.subscribe(handler));
        }
    };
    ComponentBase.prototype.removeEventListener = function (eventName, handler) {
        var eventObj = getValue(eventName, this);
        if (!isUndefined(eventObj)) {
            this.ngBoundedEvents["".concat(eventName)].get(handler).unsubscribe();
        }
    };
    ComponentBase.prototype.trigger = function (eventName, eventArgs, success) {
        var eventObj = getValue(eventName, this);
        var prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = false;
        if (eventArgs) {
            eventArgs.name = eventName;
        }
        if (!isUndefined(eventObj)) {
            eventObj.next(eventArgs);
        }
        var localEventObj = getValue('local' + eventName.charAt(0).toUpperCase() + eventName.slice(1), this);
        if (!isUndefined(localEventObj)) {
            localEventObj.call(this, eventArgs);
        }
        this.isProtectedOnChange = prevDetection;
        /* istanbul ignore else  */
        if (success) {
            this.preventChange = this.isPreventChange;
            success.call(this, eventArgs);
        }
        this.isPreventChange = false;
    };
    return ComponentBase;
}());
export { ComponentBase };
