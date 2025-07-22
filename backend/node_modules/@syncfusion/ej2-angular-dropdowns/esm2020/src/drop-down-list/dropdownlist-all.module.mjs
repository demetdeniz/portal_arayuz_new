import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownListModule } from './dropdownlist.module';
import { VirtualScroll } from '@syncfusion/ej2-dropdowns';
import * as i0 from "@angular/core";
export const VirtualScrollService = { provide: 'DropDownsVirtualScroll', useValue: VirtualScroll };
/**
 * NgModule definition for the DropDownList component with providers.
 */
export class DropDownListAllModule {
}
DropDownListAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownListAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DropDownListAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownListAllModule, imports: [CommonModule, DropDownListModule], exports: [DropDownListModule] });
DropDownListAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownListAllModule, providers: [
        VirtualScrollService
    ], imports: [[CommonModule, DropDownListModule], DropDownListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownListAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DropDownListModule],
                    exports: [
                        DropDownListModule
                    ],
                    providers: [
                        VirtualScrollService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd25saXN0LWFsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZHJvcC1kb3duLWxpc3QvZHJvcGRvd25saXN0LWFsbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQTs7QUFHdkQsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUMsQ0FBQztBQUVqSDs7R0FFRztBQVVILE1BQU0sT0FBTyxxQkFBcUI7O2tIQUFyQixxQkFBcUI7bUhBQXJCLHFCQUFxQixZQVJwQixZQUFZLEVBQUUsa0JBQWtCLGFBRXRDLGtCQUFrQjttSEFNYixxQkFBcUIsYUFKcEI7UUFDTixvQkFBb0I7S0FDdkIsWUFOUSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQyxFQUV2QyxrQkFBa0I7MkZBTWIscUJBQXFCO2tCQVRqQyxRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQztvQkFDM0MsT0FBTyxFQUFFO3dCQUNMLGtCQUFrQjtxQkFDckI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNOLG9CQUFvQjtxQkFDdkI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERyb3BEb3duTGlzdENvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd25saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wRG93bkxpc3RNb2R1bGUgfSBmcm9tICcuL2Ryb3Bkb3dubGlzdC5tb2R1bGUnO1xuaW1wb3J0IHtWaXJ0dWFsU2Nyb2xsfSBmcm9tICdAc3luY2Z1c2lvbi9lajItZHJvcGRvd25zJ1xuXG5cbmV4cG9ydCBjb25zdCBWaXJ0dWFsU2Nyb2xsU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0Ryb3BEb3duc1ZpcnR1YWxTY3JvbGwnLCB1c2VWYWx1ZTogVmlydHVhbFNjcm9sbH07XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIERyb3BEb3duTGlzdCBjb21wb25lbnQgd2l0aCBwcm92aWRlcnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRHJvcERvd25MaXN0TW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIERyb3BEb3duTGlzdE1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgVmlydHVhbFNjcm9sbFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duTGlzdEFsbE1vZHVsZSB7IH0iXX0=