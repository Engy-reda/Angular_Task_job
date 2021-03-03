import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Home } from "src/app/ViewModule/homeModel/home";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  header = new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json');
  httpOptions = {
    headers:this.header
  }
 
  constructor(private http: HttpClient) {
     
 }
 URL= "http://localhost:3005";
 getListCompanys(): Observable <Home[]>
 {
   console.log( this.http.get<Home[]>(`${URL}/Companys`))
   return this.http.get<Home[]>(`${URL}/Companys`)
 }
 addUserRegister(prd: Home):Observable<any>
{
  console.log(prd);
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
    //,'Accept':' */*'
    //,'Authorization': 'my-auth-token'
      })};
    
  return this.http.post<any>(`${URL}/Companys`,prd, httpOptions);
}
deleteCompanys(id:number):Observable<Home>{
  const urll = `${URL}/Companys/${id}`;
  return this.http.delete<Home>(urll, this.httpOptions)
}


 
 
}
