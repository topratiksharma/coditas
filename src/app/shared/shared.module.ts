import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {LoaderComponent} from './loader/loader.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        CommonModule
    ],
    declarations: [LoaderComponent],
})
export class SharedModule {
}
