import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserList} from '../interface/user';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    constructor(private http: HttpClient) {
    }

    url = 'https://api.github.com/search/users?q=';
    url1 = 'https://api.github.com/users/{username​}/repos';

    get(searchText) : Observable<any> {
        return this.http.get(this.url + searchText);
    }

    getById(id) {
        return this.http.get(this.url1.replace('{username​}',id));
    }
}
