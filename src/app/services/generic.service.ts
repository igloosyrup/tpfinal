import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
/**
 * @Author Zi Yu Chen
 * matricule: 16822559
 * Github user: IglooSyrup
 */
export class GenericService<T, ID> {

  constructor(protected http: HttpClient, protected url: string) { }

    post(t: T): Observable<T> {
        return this.http.post<T>(this.url, t);
    }

    getAll(): Observable<T[]> {
        return this.http.get<T[]>(this.url);
    }

    getById(id: ID): Observable<T> {
        return this.http.get<T>(this.url + '/' + id);
    }

    put(id: ID, t: T): Observable<T> {
        return this.http.put<T>(this.url + '/' + id, t, {});
    }

    deleteById(id: ID): Observable<T> {
        return this.http.delete<T>(this.url + '/' + id);
    }
}
