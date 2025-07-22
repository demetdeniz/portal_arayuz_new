import { setTemplateEngine, getTemplateEngine } from '@syncfusion/ej2-base';
import { setValue, getValue } from '@syncfusion/ej2-base';
var stringCompiler = getTemplateEngine();
/**
 * Angular Template Compiler
 *
 * @param {AngularElementType} templateEle - The element representing the template.
 * @param {Object} [helper] - Optional helper object.
 * @returns {Function} A function that compiles the template.
 */
export function compile(templateEle, helper) {
    if (typeof templateEle === 'string' || (typeof templateEle === 'function' && templateEle.prototype && templateEle.prototype.CSPTemplate)) {
        return stringCompiler(templateEle, helper);
    }
    else {
        var contRef_1 = templateEle.elementRef.nativeElement._viewContainerRef;
        var pName_1 = templateEle.elementRef.nativeElement.propName;
        return function (data, component, propName) {
            var context = { $implicit: data };
            /* istanbul ignore next */
            var conRef = contRef_1 ? contRef_1 : component.viewContainerRef;
            var viewRef = conRef.createEmbeddedView(templateEle, context);
            if (/EJS-MENTION|EJS-DROPDOWNLIST/.test(getValue('currentInstance.element.nodeName', conRef)) ||
                (/E-TABITEM/.test(getValue('element.nativeElement.nodeName', conRef)) &&
                    getValue('currentInstance.headerTemplateRef', conRef))) {
                viewRef.detectChanges();
            }
            else {
                viewRef.markForCheck();
            }
            /* istanbul ignore next */
            var viewCollection = (component && component.registeredTemplate) ?
                component.registeredTemplate : getValue('currentInstance.registeredTemplate', conRef);
            propName = (propName && component.registeredTemplate) ? propName : pName_1;
            if (typeof viewCollection["".concat(propName)] === 'undefined') {
                viewCollection["".concat(propName)] = [];
            }
            viewCollection["".concat(propName)].push(viewRef);
            return viewRef.rootNodes;
        };
    }
}
/**
 * Property decorator for angular.
 *
 * @param {Object} [defaultValue] - Default value for the property.
 * @returns {PropertyDecorator} The decorator function.
 */
export function Template(defaultValue) {
    return function (target, key) {
        var propertyDescriptor = {
            set: setter(key),
            get: getter(key, defaultValue),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
    };
}
/**
 * Creates a setter function for a given property key.
 *
 * @param {string} key - The property key.
 * @returns {Function} The setter function.
 */
function setter(key) {
    return function (val) {
        if (val === undefined) {
            return;
        }
        setValue(key + 'Ref', val, this);
        if (typeof val !== 'string') {
            val.elementRef.nativeElement._viewContainerRef = this.viewContainerRef;
            val.elementRef.nativeElement.propName = key;
        }
        else {
            if (this.saveChanges) {
                this.saveChanges(key, val, undefined);
                this.dataBind();
            }
        }
    };
}
/**
 * Returns a getter function for the specified key and default value.
 *
 * @param {string} key - The key for the property.
 * @param {Object} defaultValue - The default value for the property.
 * @returns {Function} The getter function.
 */
function getter(key, defaultValue) {
    return function () {
        /* istanbul ignore next */
        return getValue(key + 'Ref', this) || defaultValue;
    };
}
setTemplateEngine({ compile: compile });
