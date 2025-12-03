import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../model/user-model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    apiEndpoint = environment.apiUrl
    private accessTokenSubject = new BehaviorSubject<string | null>(localStorage.getItem("accessToken"));
    accessToken$ = this.accessTokenSubject.asObservable();   // public observable

    private isLoggedInSubject = new BehaviorSubject<boolean>(!!localStorage.getItem("accessToken"));
    isLoggedIn$ = this.isLoggedInSubject.asObservable();

    constructor(private http: HttpClient) { }

    login(objUser: User): Observable<any> {
        return this.http.post<any>(`${this.apiEndpoint}/api/Login/login`, objUser);
    }

    setTokens(accessToken: string, refreshToken: string) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        this.accessTokenSubject.next(accessToken);   // emit latest value
        this.isLoggedInSubject.next(true);
    }
    logout() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        this.accessTokenSubject.next(null);
        this.isLoggedInSubject.next(false);
    }
    isLoggedIn(): boolean {
        return !!localStorage.getItem("accessToken");
    }

    getAccessToken(): string | null {
        return this.accessTokenSubject.value;
    }

    getRefreshToken(): string | null {
        return localStorage.getItem("refreshToken");
    }

}