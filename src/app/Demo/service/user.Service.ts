import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { userResponse } from "../type/UserResponse.interface";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'  
})
export class UserService {
    constructor(private _httpClient : HttpClient){}
 
      Getuserdatabaseonuserid(userId: number): Observable<userResponse> {
        
        debugger
        const url = 'https://localhost:44379/api/User/Getuserdatabaseonuserid/' + userId
    
        return this._httpClient.get<userResponse>(url).pipe(map((response) => response))
      }
    
}