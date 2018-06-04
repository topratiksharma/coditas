import {TestBed, inject} from '@angular/core/testing';
import {HttpClientService} from './http-client.service';
import {HttpBackend, HttpClient} from '@angular/common/http';

describe('HttpClientService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HttpClientService,
                {provide: HttpClient, useClass: HttpBackend}]
        });
    });

    it('should be created', inject([HttpClientService], (service: HttpClientService) => {
        expect(service).toBeTruthy();
    }));
});
