import { Injectable } from "@angular/core";
import { Education } from "./education";
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EducationService {

    dataUrl = "assets/datas/educations.json";

    constructor(private http: HttpClient) {

    }

    getExperiences(): Observable<Education[]> {
        return this.http.get<Education[]>(this.dataUrl);
    }
}