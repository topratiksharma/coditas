import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule, MatCheckboxModule, MatInputModule,
    MatToolbarModule, MatSelectModule, MatCardModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatToolbarModule,
        MatSelectModule,
        HttpClientModule,
        MatCardModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatToolbarModule,
        MatSelectModule,
        MatCardModule
    ],
    declarations: [],
})
export class SharedModule {
}
