import {Injectable} from '@angular/core';
import {HttpClientService} from '../shared/httpClient/http-client.service';
import {Observable} from 'rxjs';
import {User, UserList} from '../shared/interface/user';

@Injectable()
export class GitUsersService {

    constructor(private httpService: HttpClientService) {
    }

    getGitUsers(searchText): Observable<UserList> {
        return this.httpService.get(searchText);
    }
    //
    // getGitUserDetails(id) {
    //     this.httpService.getById('users');
    // }
}
