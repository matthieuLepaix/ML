import { Injectable } from "@angular/core";
import { Experience } from "./experience";
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ExperiencesService {
    lang: string;

    constructor(private http: HttpClient) {

    }

    getExperiences(lang: string): Observable<Experience[]> {
        this.lang = lang;
        // if(this.lang == ''){
        //     this.lang = 'empty';
        // }
        // if(this.lang == 'en'){
        //     this.lang = 'english';
        // }
        // if(this.lang == 'fr'){
        //     this.lang = 'french';
        // }
        
        return this.http.get<Experience[]>(`assets/datas/experiences_${this.lang}.json`);
    }
}