import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserList} from '../interface/user';
import {EventService} from '../event/event.service';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    constructor(private http: HttpClient,
                private eventService: EventService) {
    }

    // These can be placed inside environments
    url = 'https://api.github.com/search/users?q=';
    url1 = 'https://api.github.com/users/{username​}/repos';

    get(searchText): Observable<any> {
        return this.http.get(this.url + searchText);
    }

    getById(id): Observable<any> {
        return this.http.get(this.url1.replace('{username​}', id));
    }
}
