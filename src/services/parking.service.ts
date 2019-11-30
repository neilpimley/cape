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

    public getSpacesNear(eventLocationLat: number, eventLocationLng: number, distance: number): Observable<any> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        let bottom_lat = eventLocationLat - (distance / 111111 / Math.sqrt(2));
        let left_lon = eventLocationLng - (distance / 111111 / Math.sqrt(2));
        let top_lat = eventLocationLat + (distance / 111111 / Math.sqrt(2));
        let right_lon = eventLocationLng + (distance / 111111 / Math.sqrt(2));

        bottom_lat = 51.5535663;
        left_lon = -0.1887717;
        top_lat = 51.5559623;
        right_lon = -0.1878357;
        return this.http.get(`${this._url}?viewport=${bottom_lat},${left_lon},${top_lat},${right_lon}`, {
            headers: headers
        });
    }



}