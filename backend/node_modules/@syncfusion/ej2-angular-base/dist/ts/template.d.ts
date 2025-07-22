import { ElementRef } from '@angular/core';
/**
 * Angular Template Compiler
 *
 * @param {AngularElementType} templateEle - The element representing the template.
 * @param {Object} [helper] - Optional helper object.
 * @returns {Function} A function that compiles the template.
 */
export declare function compile(templateEle: AngularElementType, helper?: Object): (data: Object | JSON, component?: any, propName?: any) => Object;
/**
 * Property decorator for angular.
 *
 * @param {Object} [defaultValue] - Default value for the property.
 * @returns {PropertyDecorator} The decorator function.
 */
export declare function Template(defaultValue?: Object): PropertyDecorator;
export interface AngularElementType {
    elementRef: ElementRef;
}
