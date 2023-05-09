import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=69c2c2cb2bf27c428f918a900b5e339f')
  }
}
