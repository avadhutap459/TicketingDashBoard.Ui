import { HttpClient, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../login/service/auth-service";
import { catchError, Observable, switchMap, throwError } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private refreshing = false;
    apiEndpoint = environment.apiUrl
    constructor(private authService: AuthService, private http: HttpClient) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
  const accessToken = this.authService.getAccessToken();

  let authReq = req;
  if (accessToken) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` }
    });
  }

  return next.handle(authReq).pipe(
    catchError(err => {

      if (err.status === 401 && !this.refreshing) {
        this.refreshing = true;

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${accessToken}`
        });

        return this.http.post(`${this.apiEndpoint}/api/Login/refresh-token`, null, {
          headers,
          observe: 'response'
        }).pipe(
          switchMap((res: any) => {
            this.refreshing = false;

            const newAccessToken = res.body?.accessToken;
            const newRefreshToken = res.headers.get('x-refresh-token'); // refresh from header

            this.authService.setTokens(newAccessToken, newRefreshToken);

            return next.handle(
              req.clone({
                setHeaders: { Authorization: `Bearer ${newAccessToken}` }
              })
            );
          }),
          catchError(error => {
            this.refreshing = false;
            return throwError(() => error);
          })
        );
      }

      return throwError(() => err);
    })
  );
}
}