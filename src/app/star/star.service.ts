import { Injectable } from '@angular/core';
import { Star } from './star';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class StarService {

  constructor(
    private http: HttpClient
  ){}

  getStarList(): Observable<Star[]> {
    return this.http.get<Star[]>('api/stars').pipe(
      tap((listOfStars) => this.log(listOfStars)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getStarByID(starID: number): Observable<Star|undefined> {
    return this.http.get<Star>(`api/stars/${starID}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updateStar(star: Star): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put('api/stars', star, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  addStar(star: Star): Observable<Star> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Star>('api/stars', star, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteStarById(starID: number): Observable<null> {
    return  this.http.delete(`api/stars/${starID}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  searchStarList(searchTerm: string): Observable<Star[]>{
    if(searchTerm.length <= 1) {
      return of([]);
    }
    
    return this.http.get<Star[]>(`api/stars/?name=${searchTerm}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }

  getStarTypeList(): string[] {
    return ['R&B', 'Electro', 'Pop', 'Hip-Hop', 'Rock', 'Rap', 'Comedy'];
  }
}