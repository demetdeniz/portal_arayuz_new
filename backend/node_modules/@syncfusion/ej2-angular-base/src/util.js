/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
import { EventEmitter } from '@angular/core';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
/**
 * Angular Utility Module
 *
 * @param {Function} derivedClass The derived class to which mixins are applied.
 * @param {Function[]} baseClass An array of base classes whose methods are applied as mixins.
 * @returns {void}
 */
export function applyMixins(derivedClass, baseClass) {
    baseClass.forEach(function (baseClass) {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(function (name) {
            if (!Object.prototype.hasOwnProperty.call(derivedClass.prototype, name) || (baseClass.isFormBase && name !== 'constructor')) {
                derivedClass.prototype["".concat(name)] = baseClass.prototype["".concat(name)];
            }
        });
    });
}
/**
 * Decorator function to apply mixins to a derived class.
 *
 * @param {Function[]} baseClass - An array of mixin classes to be applied to the derived class.
 * @returns {ClassDecorator} The decorator function.
 */
export function ComponentMixins(baseClass) {
    return function (derivedClass) {
        applyMixins(derivedClass, baseClass);
    };
}
/**
 * Registers events.
 *
 * @private
 * @param {string[]} eventList - The list of events to register.
 * @param {any} obj - The object on which to register the events.
 * @param {boolean} [direct] - Whether to register events directly on the object or not.
 * @returns {void}
 */
export function registerEvents(eventList, obj, direct) {
    var ngEventsEmitter = {};
    if (eventList && eventList.length) {
        for (var _i = 0, eventList_1 = eventList; _i < eventList_1.length; _i++) {
            var event_1 = eventList_1[_i];
            if (direct === true) {
                obj.propCollection["".concat(event_1)] = new EventEmitter(false);
                obj["".concat(event_1)] = obj.propCollection["".concat(event_1)];
            }
            else {
                ngEventsEmitter["".concat(event_1)] = new EventEmitter(false);
            }
        }
        if (direct !== true) {
            obj.setProperties(ngEventsEmitter, true);
        }
    }
}
/**
 * Clears registered templates.
 *
 * @private
 * @param {any} _this - The context object.
 * @param {string[]} [templateNames] - Optional. An array of template names to clear.
 * @param {any[]} [index] - Optional. An array of indices specifying templates to clear.
 * @returns {void}
 */
export function clearTemplate(_this, templateNames, index) {
    var _a;
    var regTemplates = Object.keys(_this.registeredTemplate);
    if (regTemplates.length) {
        /* istanbul ignore next */
        var regProperties = templateNames && templateNames.filter(function (val) {
            return (/\./g.test(val) ? false : true);
        });
        var tabaccordionTemp = /tab|accordion|toolbar/.test((_a = _this.getModuleName) === null || _a === void 0 ? void 0 : _a.call(_this));
        for (var _i = 0, _b = (regProperties && regProperties || regTemplates); _i < _b.length; _i++) {
            var registeredTemplate = _b[_i];
            /* istanbul ignore next */
            if (index && index.length) {
                for (var e = 0; e < index.length; e++) {
                    if (tabaccordionTemp) {
                        for (var m = 0; m < _this.registeredTemplate["".concat(registeredTemplate)].length; m++) {
                            var value = _this.registeredTemplate["".concat(registeredTemplate)][parseInt(m.toString(), 10)];
                            if (value && value === index["".concat(e)]) {
                                value.destroy();
                                _this.registeredTemplate["".concat(registeredTemplate)].splice(m, 1);
                            }
                        }
                    }
                    else {
                        for (var m = 0; m < _this.registeredTemplate.template.length; m++) {
                            var value = _this.registeredTemplate.template[parseInt(m.toString(), 10)].rootNodes[0];
                            if (value === index["".concat(e)]) {
                                var rt = _this.registeredTemplate["".concat(registeredTemplate)];
                                rt[parseInt(m.toString(), 10)].destroy();
                            }
                        }
                    }
                }
            }
            else {
                if (_this.registeredTemplate["".concat(registeredTemplate)]) {
                    for (var _c = 0, _d = _this.registeredTemplate["".concat(registeredTemplate)]; _c < _d.length; _c++) {
                        var rt = _d[_c];
                        if (!rt.destroyed) {
                            if (rt._view) {
                                var pNode = rt._view.renderer.parentNode(rt.rootNodes[0]);
                                if (!isNullOrUndefined(pNode)) {
                                    for (var m = 0; m < rt.rootNodes.length; m++) {
                                        pNode.appendChild(rt.rootNodes[parseInt(m.toString(), 10)]);
                                    }
                                }
                            }
                            rt.destroy();
                        }
                    }
                }
            }
            if (!tabaccordionTemp || !index) {
                delete _this.registeredTemplate["".concat(registeredTemplate)];
            }
        }
    }
    var _loop_1 = function (tagObject) {
        if (tagObject.instance) {
            /* istanbul ignore next */
            tagObject.instance.clearTemplate((templateNames && templateNames.filter(function (val) {
                var regExp = RegExp;
                return (new regExp(tagObject.name).test(val) ? true : false);
            })));
        }
    };
    for (var _e = 0, _f = _this.tagObjects; _e < _f.length; _e++) {
        var tagObject = _f[_e];
        _loop_1(tagObject);
    }
}
/**
 * To set value for the nameSpace in desired object.
 *
 * @param {string} nameSpace - String value to get the inner object.
 * @param {any} value - Value that you need to set.
 * @param {any} object - Object to get the inner object value.
 * @returns {void}
 * @private
 */
export function setValue(nameSpace, value, object) {
    var keys = nameSpace.replace(/\[/g, '.').replace(/\]/g, '').split('.');
    /* istanbul ignore next */
    var fromObj = object || {};
    for (var i = 0; i < keys.length; i++) {
        var key = keys[parseInt(i.toString(), 10)];
        if (i + 1 === keys.length) {
            fromObj["".concat(key)] = value === undefined ? {} : value;
        }
        else if (fromObj["".concat(key)] === undefined) {
            fromObj["".concat(key)] = {};
        }
        fromObj = fromObj["".concat(key)];
    }
    return fromObj;
}
