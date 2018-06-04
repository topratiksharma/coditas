import {TestBed, inject} from '@angular/core/testing';
import {GitUsersService} from './git-users.service';
import {HttpClientService} from '../shared/httpClient/http-client.service';
import {HttpClientServiceMock} from '../shared/httpClient/http-client.mock';

describe('GitUsersService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                GitUsersService,
                {provide: HttpClientService, useClass: HttpClientServiceMock}
            ]
        });
    });

    it('should be created', inject([GitUsersService], (service: GitUsersService) => {
        expect(service).toBeTruthy();
    }));
});
