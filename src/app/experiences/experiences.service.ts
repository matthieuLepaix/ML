import { Injectable } from "@angular/core";
import { Experience } from "./experience";
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ExperiencesService {

    dataUrl = "assets/datas/experiences.json";

    constructor(private http: HttpClient) {

    }

    getExperiences(): Observable<Experience[]> {
        return this.http.get<Experience[]>(this.dataUrl);
    }
}