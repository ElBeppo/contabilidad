import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Factura } from '../models/factura';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class FacturaService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    getFacturasMes(month): Observable<any> {
        //Creo un date y le pongo el día a 1 y el mes a month y lo busco
        //ISODate("1999-05-02")
        const tmp = new Date();
        const mes = (month < 10) ? '0' + month : month;
        var param = {"fechaFactura": tmp.getFullYear() + '-' + mes + '-01'};
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.get(this.url + 'projects/'+param, {headers: headers});
    }
}
