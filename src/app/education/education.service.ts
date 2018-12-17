import { Injectable } from "@angular/core";
import { Education } from "./education";
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EducationService {

    lang: string;
    constructor(private http: HttpClient) {

    }

    getExperiences(lang: string): Observable<Education[]> {
        this.lang = lang;
        if(this.lang === ''){
            this.lang = 'en';
        }
        return this.http.get<Education[]>(`assets/datas/educations_${this.lang}.json`);
    }
}