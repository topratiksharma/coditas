import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GitUsersComponent} from './git-users.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {GitUsersService} from './git-users.service';
import {HttpClientServiceMock} from '../shared/httpClient/http-client.mock';
import {HttpClientService} from '../shared/httpClient/http-client.service';

describe('GitUsersComponent', () => {
    let component: GitUsersComponent;
    let fixture: ComponentFixture<GitUsersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, NgxPaginationModule],
            declarations: [GitUsersComponent],
            providers: [
                GitUsersService,
                {provide: HttpClientService, useClass: HttpClientServiceMock}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GitUsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
