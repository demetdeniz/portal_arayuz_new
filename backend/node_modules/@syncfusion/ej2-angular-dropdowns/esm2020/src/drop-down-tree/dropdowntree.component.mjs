var DropDownTreeComponent_1;
import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, ComponentMixins, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { DropDownTree } from '@syncfusion/ej2-dropdowns';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
export const inputs = ['actionFailureTemplate', 'allowFiltering', 'allowMultiSelection', 'changeOnBlur', 'cssClass', 'customTemplate', 'delimiterChar', 'destroyPopupOnHide', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'mode', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'readonly', 'selectAllText', 'showCheckBox', 'showClearButton', 'showDropDownIcon', 'showSelectAll', 'sortOrder', 'text', 'treeSettings', 'unSelectAllText', 'value', 'valueTemplate', 'width', 'wrapText', 'zIndex'];
export const outputs = ['actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'dataBound', 'destroyed', 'filtering', 'focus', 'keyPress', 'open', 'select', 'valueChange'];
export const twoWays = ['value'];
/**
*The DropDownTree component contains a list of predefined values from which you can choose a single or multiple values.
*```html
*<ejs-dropdowntree></ejs-dropdowntree>
*```
*/
let DropDownTreeComponent = DropDownTreeComponent_1 = class DropDownTreeComponent extends DropDownTree {
    constructor(ngEle, srenderer, viewContainerRef, injector, cdr) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.cdr = cdr;
        this.skipFromEvent = true;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.formContext = new FormBase();
        this.formCompContext = new ComponentBase();
    }
    registerOnChange(registerFunction) {
    }
    registerOnTouched(registerFunction) {
    }
    writeValue(value) {
    }
    setDisabledState(disabled) {
    }
    ngOnInit() {
        this.formCompContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.formContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.formCompContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.formCompContext.ngAfterContentChecked(this);
    }
};
DropDownTreeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownTreeComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
DropDownTreeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DropDownTreeComponent, selector: "ejs-dropdowntree", inputs: { actionFailureTemplate: "actionFailureTemplate", allowFiltering: "allowFiltering", allowMultiSelection: "allowMultiSelection", changeOnBlur: "changeOnBlur", cssClass: "cssClass", customTemplate: "customTemplate", delimiterChar: "delimiterChar", destroyPopupOnHide: "destroyPopupOnHide", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enabled: "enabled", fields: "fields", filterBarPlaceholder: "filterBarPlaceholder", filterType: "filterType", floatLabelType: "floatLabelType", footerTemplate: "footerTemplate", headerTemplate: "headerTemplate", htmlAttributes: "htmlAttributes", ignoreAccent: "ignoreAccent", ignoreCase: "ignoreCase", itemTemplate: "itemTemplate", locale: "locale", mode: "mode", noRecordsTemplate: "noRecordsTemplate", placeholder: "placeholder", popupHeight: "popupHeight", popupWidth: "popupWidth", readonly: "readonly", selectAllText: "selectAllText", showCheckBox: "showCheckBox", showClearButton: "showClearButton", showDropDownIcon: "showDropDownIcon", showSelectAll: "showSelectAll", sortOrder: "sortOrder", text: "text", treeSettings: "treeSettings", unSelectAllText: "unSelectAllText", value: "value", valueTemplate: "valueTemplate", width: "width", wrapText: "wrapText", zIndex: "zIndex" }, outputs: { actionFailure: "actionFailure", beforeOpen: "beforeOpen", blur: "blur", change: "change", close: "close", created: "created", dataBound: "dataBound", destroyed: "destroyed", filtering: "filtering", focus: "focus", keyPress: "keyPress", open: "open", select: "select", valueChange: "valueChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropDownTreeComponent_1),
            multi: true
        }
    ], queries: [{ propertyName: "footerTemplate", first: true, predicate: ["footerTemplate"], descendants: true }, { propertyName: "headerTemplate", first: true, predicate: ["headerTemplate"], descendants: true }, { propertyName: "valueTemplate", first: true, predicate: ["valueTemplate"], descendants: true }, { propertyName: "itemTemplate", first: true, predicate: ["itemTemplate"], descendants: true }, { propertyName: "noRecordsTemplate", first: true, predicate: ["noRecordsTemplate"], descendants: true }, { propertyName: "actionFailureTemplate", first: true, predicate: ["actionFailureTemplate"], descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], DropDownTreeComponent.prototype, "footerTemplate", void 0);
__decorate([
    Template()
], DropDownTreeComponent.prototype, "headerTemplate", void 0);
__decorate([
    Template()
], DropDownTreeComponent.prototype, "valueTemplate", void 0);
__decorate([
    Template()
], DropDownTreeComponent.prototype, "itemTemplate", void 0);
__decorate([
    Template('No Records Found')
], DropDownTreeComponent.prototype, "noRecordsTemplate", void 0);
__decorate([
    Template('The Request Failed')
], DropDownTreeComponent.prototype, "actionFailureTemplate", void 0);
DropDownTreeComponent = DropDownTreeComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], DropDownTreeComponent);
export { DropDownTreeComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownTreeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-dropdowntree',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DropDownTreeComponent),
                            multi: true
                        }
                    ],
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { footerTemplate: [{
                type: ContentChild,
                args: ['footerTemplate']
            }], headerTemplate: [{
                type: ContentChild,
                args: ['headerTemplate']
            }], valueTemplate: [{
                type: ContentChild,
                args: ['valueTemplate']
            }], itemTemplate: [{
                type: ContentChild,
                args: ['itemTemplate']
            }], noRecordsTemplate: [{
                type: ContentChild,
                args: ['noRecordsTemplate']
            }], actionFailureTemplate: [{
                type: ContentChild,
                args: ['actionFailureTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd250cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kcm9wLWRvd24tdHJlZS9kcm9wZG93bnRyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0UsdUJBQXVCLEVBQXFCLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEwsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBK0IsZUFBZSxFQUEwQixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkosT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFHeEQsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFhLENBQUMsdUJBQXVCLEVBQUMsZ0JBQWdCLEVBQUMscUJBQXFCLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxlQUFlLEVBQUMsb0JBQW9CLEVBQUMscUJBQXFCLEVBQUMsbUJBQW1CLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsc0JBQXNCLEVBQUMsWUFBWSxFQUFDLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLGNBQWMsRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsbUJBQW1CLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsaUJBQWlCLEVBQUMsa0JBQWtCLEVBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxlQUFlLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxRQUFRLENBQUMsQ0FBQztBQUNqcUIsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFhLENBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZMLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTNDOzs7OztFQUtFO0lBbUJXLHFCQUFxQixtQ0FBckIscUJBQXNCLFNBQVEsWUFBWTtJQThFbkQsWUFBb0IsS0FBaUIsRUFBVSxTQUFvQixFQUFVLGdCQUFpQyxFQUFVLFFBQWtCLEVBQVUsR0FBc0I7UUFDdEssS0FBSyxFQUFFLENBQUM7UUFEUSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFEbEssa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFHakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBRWxELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBSSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUksSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsZ0JBQWtDO0lBQzFELENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxnQkFBNEI7SUFDckQsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFVO0lBQzVCLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxRQUFpQjtJQUN6QyxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLHFCQUFxQjtRQUV4QixJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FJSixDQUFBO2tIQXpIWSxxQkFBcUI7c0dBQXJCLHFCQUFxQiwwbURBWm5CO1FBQ1A7WUFDSSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXFCLENBQUM7WUFDcEQsS0FBSyxFQUFFLElBQUk7U0FDZDtLQUNKLDRwQkFSUyxFQUFFO0FBNkNaO0lBREMsUUFBUSxFQUFFOzZEQUNnQjtBQVkzQjtJQURDLFFBQVEsRUFBRTs2REFDZ0I7QUFZM0I7SUFEQyxRQUFRLEVBQUU7NERBQ2U7QUFjMUI7SUFEQyxRQUFRLEVBQUU7MkRBQ2M7QUFHekI7SUFEQyxRQUFRLENBQUMsa0JBQWtCLENBQUM7Z0VBQ0M7QUFHOUI7SUFEQyxRQUFRLENBQUMsb0JBQW9CLENBQUM7b0VBQ0c7QUEzRXpCLHFCQUFxQjtJQURqQyxlQUFlLENBQUMsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7R0FDOUIscUJBQXFCLENBeUhqQztTQXpIWSxxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFsQmpDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1A7NEJBQ0ksT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUM7NEJBQ3BELEtBQUssRUFBRSxJQUFJO3lCQUNkO3FCQUNKO29CQUNELE9BQU8sRUFBRSxFQUVSO2lCQUNKOytNQWlDVSxjQUFjO3NCQUZwQixZQUFZO3VCQUFDLGdCQUFnQjtnQkFjdkIsY0FBYztzQkFGcEIsWUFBWTt1QkFBQyxnQkFBZ0I7Z0JBY3ZCLGFBQWE7c0JBRm5CLFlBQVk7dUJBQUMsZUFBZTtnQkFnQnRCLFlBQVk7c0JBRmxCLFlBQVk7dUJBQUMsY0FBYztnQkFLckIsaUJBQWlCO3NCQUZ2QixZQUFZO3VCQUFDLG1CQUFtQjtnQkFLMUIscUJBQXFCO3NCQUYzQixZQUFZO3VCQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgVmFsdWVQcm92aWRlciwgUmVuZGVyZXIyLCBJbmplY3RvciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBmb3J3YXJkUmVmLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgSUNvbXBvbmVudEJhc2UsIGFwcGx5TWl4aW5zLCBDb21wb25lbnRNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIEZvcm1CYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgRHJvcERvd25UcmVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWRyb3Bkb3ducyc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cbmV4cG9ydCBjb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gWydhY3Rpb25GYWlsdXJlVGVtcGxhdGUnLCdhbGxvd0ZpbHRlcmluZycsJ2FsbG93TXVsdGlTZWxlY3Rpb24nLCdjaGFuZ2VPbkJsdXInLCdjc3NDbGFzcycsJ2N1c3RvbVRlbXBsYXRlJywnZGVsaW1pdGVyQ2hhcicsJ2Rlc3Ryb3lQb3B1cE9uSGlkZScsJ2VuYWJsZUh0bWxTYW5pdGl6ZXInLCdlbmFibGVQZXJzaXN0ZW5jZScsJ2VuYWJsZVJ0bCcsJ2VuYWJsZWQnLCdmaWVsZHMnLCdmaWx0ZXJCYXJQbGFjZWhvbGRlcicsJ2ZpbHRlclR5cGUnLCdmbG9hdExhYmVsVHlwZScsJ2Zvb3RlclRlbXBsYXRlJywnaGVhZGVyVGVtcGxhdGUnLCdodG1sQXR0cmlidXRlcycsJ2lnbm9yZUFjY2VudCcsJ2lnbm9yZUNhc2UnLCdpdGVtVGVtcGxhdGUnLCdsb2NhbGUnLCdtb2RlJywnbm9SZWNvcmRzVGVtcGxhdGUnLCdwbGFjZWhvbGRlcicsJ3BvcHVwSGVpZ2h0JywncG9wdXBXaWR0aCcsJ3JlYWRvbmx5Jywnc2VsZWN0QWxsVGV4dCcsJ3Nob3dDaGVja0JveCcsJ3Nob3dDbGVhckJ1dHRvbicsJ3Nob3dEcm9wRG93bkljb24nLCdzaG93U2VsZWN0QWxsJywnc29ydE9yZGVyJywndGV4dCcsJ3RyZWVTZXR0aW5ncycsJ3VuU2VsZWN0QWxsVGV4dCcsJ3ZhbHVlJywndmFsdWVUZW1wbGF0ZScsJ3dpZHRoJywnd3JhcFRleHQnLCd6SW5kZXgnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnYWN0aW9uRmFpbHVyZScsJ2JlZm9yZU9wZW4nLCdibHVyJywnY2hhbmdlJywnY2xvc2UnLCdjcmVhdGVkJywnZGF0YUJvdW5kJywnZGVzdHJveWVkJywnZmlsdGVyaW5nJywnZm9jdXMnLCdrZXlQcmVzcycsJ29wZW4nLCdzZWxlY3QnLCd2YWx1ZUNoYW5nZSddO1xuZXhwb3J0IGNvbnN0IHR3b1dheXM6IHN0cmluZ1tdID0gWyd2YWx1ZSddO1xuXG4vKipcbipUaGUgRHJvcERvd25UcmVlIGNvbXBvbmVudCBjb250YWlucyBhIGxpc3Qgb2YgcHJlZGVmaW5lZCB2YWx1ZXMgZnJvbSB3aGljaCB5b3UgY2FuIGNob29zZSBhIHNpbmdsZSBvciBtdWx0aXBsZSB2YWx1ZXMuXG4qYGBgaHRtbFxuKjxlanMtZHJvcGRvd250cmVlPjwvZWpzLWRyb3Bkb3dudHJlZT5cbipgYGBcbiovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1kcm9wZG93bnRyZWUnLFxuICAgIGlucHV0czogaW5wdXRzLFxuICAgIG91dHB1dHM6IG91dHB1dHMsXG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERyb3BEb3duVHJlZUNvbXBvbmVudCksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXSxcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuQENvbXBvbmVudE1peGlucyhbQ29tcG9uZW50QmFzZSwgRm9ybUJhc2VdKVxuZXhwb3J0IGNsYXNzIERyb3BEb3duVHJlZUNvbXBvbmVudCBleHRlbmRzIERyb3BEb3duVHJlZSBpbXBsZW1lbnRzIElDb21wb25lbnRCYXNlIHtcbiAgICBwdWJsaWMgZm9ybUNvbXBDb250ZXh0IDogYW55O1xuICAgIHB1YmxpYyBmb3JtQ29udGV4dCA6IGFueTtcbiAgICBwdWJsaWMgdGFnT2JqZWN0czogYW55O1xuXHRhY3Rpb25GYWlsdXJlOiBhbnk7XG5cdGJlZm9yZU9wZW46IGFueTtcblx0Ymx1cjogYW55O1xuXHRjaGFuZ2U6IGFueTtcblx0Y2xvc2U6IGFueTtcblx0Y3JlYXRlZDogYW55O1xuXHRkYXRhQm91bmQ6IGFueTtcblx0ZGVzdHJveWVkOiBhbnk7XG5cdGZpbHRlcmluZzogYW55O1xuXHRmb2N1czogYW55O1xuXHRrZXlQcmVzczogYW55O1xuXHRvcGVuOiBhbnk7XG5cdHNlbGVjdDogYW55O1xuXHRwdWJsaWMgdmFsdWVDaGFuZ2U6IGFueTtcblxuXG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgdGVtcGxhdGUgdGhhdCByZW5kZXJzIGEgY3VzdG9taXplZCBmb290ZXIgY29udGFpbmVyIGF0IHRoZSBib3R0b20gb2YgdGhlIHBvcC11cCBsaXN0LiBcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGUgZm9vdGVyVGVtcGxhdGUgd2lsbCBiZSBudWxsIGFuZCB0aGVyZSB3aWxsIGJlIG5vIGZvb3RlciBjb250YWluZXIgZm9yIHRoZSBwb3AtdXAgbGlzdC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGFuZ3VsYXJ0eXBlIHN0cmluZyB8IG9iamVjdFxuICAgICAqIEByZWFjdHR5cGUgc3RyaW5nIHwgZnVuY3Rpb24gfCBKU1guRWxlbWVudFxuICAgICAqIEB2dWV0eXBlIHN0cmluZyB8IGZ1bmN0aW9uXG4gICAgICogQGFzcHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnZm9vdGVyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGZvb3RlclRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgdGVtcGxhdGUgdGhhdCByZW5kZXJzIGEgY3VzdG9taXplZCBoZWFkZXIgY29udGFpbmVyIGF0IHRoZSB0b3Agb2YgdGhlIHBvcC11cCBsaXN0LiBcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGUgaGVhZGVyVGVtcGxhdGUgd2lsbCBiZSBudWxsIGFuZCB0aGVyZSB3aWxsIGJlIG5vIGhlYWRlciBjb250YWluZXIgZm9yIHRoZSBwb3AtdXAgbGlzdC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGFuZ3VsYXJ0eXBlIHN0cmluZyB8IG9iamVjdFxuICAgICAqIEByZWFjdHR5cGUgc3RyaW5nIHwgZnVuY3Rpb24gfCBKU1guRWxlbWVudFxuICAgICAqIEB2dWV0eXBlIHN0cmluZyB8IGZ1bmN0aW9uXG4gICAgICogQGFzcHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnaGVhZGVyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGhlYWRlclRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgd2F5IHRvIGN1c3RvbWl6ZSB0aGUgc2VsZWN0ZWQgdmFsdWVzIGluIHRoZSBEcm9wZG93biBUcmVlIGNvbXBvbmVudCBiYXNlZCBvbiBhcHBsaWNhdGlvbiBuZWVkcy4gSWYgdGhlICoqdmFsdWVUZW1wbGF0ZSoqIHByb3BlcnR5IGlzIHNldCwgdGhlIHRlbXBsYXRlIGNvbnRlbnQgb3ZlcnJpZGVzIHRoZSBkaXNwbGF5ZWQgaXRlbSB0ZXh0LiBcbiAgICAgKiBUaGUgcHJvcGVydHkgYWNjZXB0cyBbdGVtcGxhdGUgc3RyaW5nXSAoaHR0cHM6Ly9lajIuc3luY2Z1c2lvbi5jb20vZG9jdW1lbnRhdGlvbi9jb21tb24vdGVtcGxhdGUtZW5naW5lLykgb3IgSFRNTCBlbGVtZW50IElEIGhvbGRpbmcgdGhlIGNvbnRlbnQuIFRoZSBjb250ZXh0IGZvciB0aGUgdmFsdWVUZW1wbGF0ZSBjb21lcyBmcm9tIHRoZSBkYXRhIG9iamVjdCBwYXNzZWQgdG8gaXQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhbmd1bGFydHlwZSBzdHJpbmcgfCBvYmplY3RcbiAgICAgKiBAcmVhY3R0eXBlIHN0cmluZyB8IGZ1bmN0aW9uIHwgSlNYLkVsZW1lbnRcbiAgICAgKiBAdnVldHlwZSBzdHJpbmcgfCBmdW5jdGlvblxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3ZhbHVlVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHZhbHVlVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIGEgdGVtcGxhdGUgdG8gcmVuZGVyIGN1c3RvbWl6ZWQgY29udGVudCBmb3IgYWxsIHRoZSBpdGVtcy4gXG4gICAgICogSWYgdGhlICoqaXRlbVRlbXBsYXRlKiogcHJvcGVydHkgaXMgc2V0LCB0aGUgdGVtcGxhdGUgY29udGVudCBvdmVycmlkZXMgdGhlIGRpc3BsYXllZCBpdGVtIHRleHQuIFxuICAgICAqIFRoZSBwcm9wZXJ0eSBhY2NlcHRzIFt0ZW1wbGF0ZSBzdHJpbmddKGh0dHBzOi8vZWoyLnN5bmNmdXNpb24uY29tL2RvY3VtZW50YXRpb24vY29tbW9uL3RlbXBsYXRlLWVuZ2luZS8pIFxuICAgICAqIG9yIEhUTUwgZWxlbWVudCBJRCBob2xkaW5nIHRoZSBjb250ZW50LlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAYW5ndWxhcnR5cGUgc3RyaW5nIHwgb2JqZWN0XG4gICAgICogQHJlYWN0dHlwZSBzdHJpbmcgfCBmdW5jdGlvbiB8IEpTWC5FbGVtZW50XG4gICAgICogQHZ1ZXR5cGUgc3RyaW5nIHwgZnVuY3Rpb25cbiAgICAgKiBAYXNwdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdpdGVtVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGl0ZW1UZW1wbGF0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ25vUmVjb3Jkc1RlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoJ05vIFJlY29yZHMgRm91bmQnKVxuICAgIHB1YmxpYyBub1JlY29yZHNUZW1wbGF0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ2FjdGlvbkZhaWx1cmVUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKCdUaGUgUmVxdWVzdCBGYWlsZWQnKVxuICAgIHB1YmxpYyBhY3Rpb25GYWlsdXJlVGVtcGxhdGU6IGFueTtcblxuICAgIHByaXZhdGUgc2tpcEZyb21FdmVudDpib29sZWFuID0gdHJ1ZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nRWxlOiBFbGVtZW50UmVmLCBwcml2YXRlIHNyZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLm5nRWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzID0gdGhpcy5pbmplY3RlZE1vZHVsZXMgfHwgW107XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5hZGRUd29XYXkuY2FsbCh0aGlzLCB0d29XYXlzKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRleHQgID0gbmV3IEZvcm1CYXNlKCk7XG4gICAgICAgIHRoaXMuZm9ybUNvbXBDb250ZXh0ICA9IG5ldyBDb21wb25lbnRCYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UocmVnaXN0ZXJGdW5jdGlvbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChyZWdpc3RlckZ1bmN0aW9uOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5mb3JtQ29tcENvbnRleHQubmdPbkluaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtQ29udGV4dC5uZ0FmdGVyVmlld0luaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm1Db21wQ29udGV4dC5uZ09uRGVzdHJveSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5mb3JtQ29tcENvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19