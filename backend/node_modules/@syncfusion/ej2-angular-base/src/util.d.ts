/**
 * Angular Utility Module
 *
 * @param {Function} derivedClass The derived class to which mixins are applied.
 * @param {Function[]} baseClass An array of base classes whose methods are applied as mixins.
 * @returns {void}
 */
export declare function applyMixins(derivedClass: any, baseClass: any[]): void;
/**
 * Decorator function to apply mixins to a derived class.
 *
 * @param {Function[]} baseClass - An array of mixin classes to be applied to the derived class.
 * @returns {ClassDecorator} The decorator function.
 */
export declare function ComponentMixins(baseClass: Function[]): ClassDecorator;
/**
 * Registers events.
 *
 * @private
 * @param {string[]} eventList - The list of events to register.
 * @param {any} obj - The object on which to register the events.
 * @param {boolean} [direct] - Whether to register events directly on the object or not.
 * @returns {void}
 */
export declare function registerEvents(eventList: string[], obj: any, direct?: boolean): void;
/**
 * Clears registered templates.
 *
 * @private
 * @param {any} _this - The context object.
 * @param {string[]} [templateNames] - Optional. An array of template names to clear.
 * @param {any[]} [index] - Optional. An array of indices specifying templates to clear.
 * @returns {void}
 */
export declare function clearTemplate(_this: any, templateNames?: string[], index?: any): void;
/**
 * To set value for the nameSpace in desired object.
 *
 * @param {string} nameSpace - String value to get the inner object.
 * @param {any} value - Value that you need to set.
 * @param {any} object - Object to get the inner object value.
 * @returns {void}
 * @private
 */
export declare function setValue(nameSpace: string, value: any, object: any): any;
export interface PropertyCollectionInfo {
    props: PropertyDetails[];
    complexProps: PropertyDetails[];
    colProps: PropertyDetails[];
    events: PropertyDetails[];
    propNames: string[];
    complexPropNames: string[];
    colPropNames: string[];
    eventNames: string[];
}
export interface PropertyDetails {
    propertyName: string;
    type: FunctionConstructor | Object;
    defaultValue: Object;
}
