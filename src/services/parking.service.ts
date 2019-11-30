import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ParkingService {

    private _url: string = 'https://fordkerbhack.azure-api.net/features';

    constructor(private http: Http) { }

    private createAuthorizationHeader(headers: Headers) {
        headers.append('Ocp-Apim-Subscription-Key', '863c9bb371d84056b93f879731ef993b');
    }

    public getSpacesNear(lat: number, lng: number): Observable<any> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this._url, {
            headers: headers
        });
    }

}