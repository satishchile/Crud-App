import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {



  baseUrl="http://localhost:3000/"
  constructor(private _http:HttpClient) { }


fetchAllpost(endpoint:string):Observable<IPost[]>
{ const url=this.baseUrl+endpoint;
  return this._http.get<IPost[]>(url);
}

createPost(endpoint:string,obj:IPost):Observable<IPost>
{ 
  const url=this.baseUrl+endpoint;
  return this._http.post<IPost>(url,obj);

}


getonepost(id:number,endpoint:string):Observable<IPost>
{
  const url=this.baseUrl+endpoint+`/${id}`;
  return this._http.get<IPost>(url);
}


updatepost(id:number,endpoint:string,obj:IPost):Observable<IPost>{
  const url=this.baseUrl+endpoint+`/${id}`;
  return this._http.patch<IPost>(url,obj);

}
}
