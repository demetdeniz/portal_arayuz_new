import { ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectorRef } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { DropDownTree } from '@syncfusion/ej2-dropdowns';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
*The DropDownTree component contains a list of predefined values from which you can choose a single or multiple values.
*```html
*<ejs-dropdowntree></ejs-dropdowntree>
*```
*/
export declare class DropDownTreeComponent extends DropDownTree implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    private cdr;
    formCompContext: any;
    formContext: any;
    tagObjects: any;
    actionFailure: any;
    beforeOpen: any;
    blur: any;
    change: any;
    close: any;
    created: any;
    dataBound: any;
    destroyed: any;
    filtering: any;
    focus: any;
    keyPress: any;
    open: any;
    select: any;
    valueChange: any;
    /**
     * Specifies the template that renders a customized footer container at the bottom of the pop-up list.
     * By default, the footerTemplate will be null and there will be no footer container for the pop-up list.
     * @default null
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    footerTemplate: any;
    /**
     * Specifies the template that renders a customized header container at the top of the pop-up list.
     * By default, the headerTemplate will be null and there will be no header container for the pop-up list.
     * @default null
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    headerTemplate: any;
    /**
     * Specifies the way to customize the selected values in the Dropdown Tree component based on application needs. If the **valueTemplate** property is set, the template content overrides the displayed item text.
     * The property accepts [template string] (https://ej2.syncfusion.com/documentation/common/template-engine/) or HTML element ID holding the content. The context for the valueTemplate comes from the data object passed to it.
     * @default null
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    valueTemplate: any;
    /**
     * Specifies a template to render customized content for all the items.
     * If the **itemTemplate** property is set, the template content overrides the displayed item text.
     * The property accepts [template string](https://ej2.syncfusion.com/documentation/common/template-engine/)
     * or HTML element ID holding the content.
     * @default null
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    itemTemplate: any;
    noRecordsTemplate: any;
    actionFailureTemplate: any;
    private skipFromEvent;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector, cdr: ChangeDetectorRef);
    registerOnChange(registerFunction: (_: any) => void): void;
    registerOnTouched(registerFunction: () => void): void;
    writeValue(value: any): void;
    setDisabledState(disabled: boolean): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropDownTreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropDownTreeComponent, "ejs-dropdowntree", never, { "actionFailureTemplate": "actionFailureTemplate"; "allowFiltering": "allowFiltering"; "allowMultiSelection": "allowMultiSelection"; "changeOnBlur": "changeOnBlur"; "cssClass": "cssClass"; "customTemplate": "customTemplate"; "delimiterChar": "delimiterChar"; "destroyPopupOnHide": "destroyPopupOnHide"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "enabled": "enabled"; "fields": "fields"; "filterBarPlaceholder": "filterBarPlaceholder"; "filterType": "filterType"; "floatLabelType": "floatLabelType"; "footerTemplate": "footerTemplate"; "headerTemplate": "headerTemplate"; "htmlAttributes": "htmlAttributes"; "ignoreAccent": "ignoreAccent"; "ignoreCase": "ignoreCase"; "itemTemplate": "itemTemplate"; "locale": "locale"; "mode": "mode"; "noRecordsTemplate": "noRecordsTemplate"; "placeholder": "placeholder"; "popupHeight": "popupHeight"; "popupWidth": "popupWidth"; "readonly": "readonly"; "selectAllText": "selectAllText"; "showCheckBox": "showCheckBox"; "showClearButton": "showClearButton"; "showDropDownIcon": "showDropDownIcon"; "showSelectAll": "showSelectAll"; "sortOrder": "sortOrder"; "text": "text"; "treeSettings": "treeSettings"; "unSelectAllText": "unSelectAllText"; "value": "value"; "valueTemplate": "valueTemplate"; "width": "width"; "wrapText": "wrapText"; "zIndex": "zIndex"; }, { "actionFailure": "actionFailure"; "beforeOpen": "beforeOpen"; "blur": "blur"; "change": "change"; "close": "close"; "created": "created"; "dataBound": "dataBound"; "destroyed": "destroyed"; "filtering": "filtering"; "focus": "focus"; "keyPress": "keyPress"; "open": "open"; "select": "select"; "valueChange": "valueChange"; }, ["footerTemplate", "headerTemplate", "valueTemplate", "itemTemplate", "noRecordsTemplate", "actionFailureTemplate"], never>;
}
