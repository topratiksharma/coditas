import {Observable} from 'rxjs';


export class HttpClientServiceMock {

    get(searchText): Observable<any> {
        return Observable.of(true);
    }

    getById(id): Observable<any> {
        return Observable.of(true);
    }
}
