import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {GitUsersComponent} from './git-users/git-users.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing} from './app.routes';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {GitUsersService} from './git-users/git-users.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    declarations: [
        AppComponent,
        GitUsersComponent],
    imports: [
        BrowserModule,
        SharedModule,
        BrowserAnimationsModule,
        routing,
        FormsModule,
        NgxPaginationModule,
        ReactiveFormsModule],
    exports: [BrowserAnimationsModule],
    providers: [GitUsersService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
