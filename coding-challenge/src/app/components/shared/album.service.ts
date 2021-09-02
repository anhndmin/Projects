import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAlbum } from './album.model';
import swal from 'sweetalert';


@Injectable()
export class AlbumService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  private clientId: string = environment.clientId;
  private clientSecret: string = environment.clientSecret;
  private albumServiceUrl: string;


  constructor(private http: Http, private httpClient: HttpClient) { 
    this.albumServiceUrl= environment.urlAlbumService;
  }


  getToken(){

    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(this.clientId + ":" + this.clientSecret));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'client_credentials');
    let body = params.toString();

    return this.http.post('https://accounts.spotify.com/api/token', body, { headers: headers })
      .pipe(map(res => res.json()));

  }

  getMusique(query: string, type = 'artist', authToken: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + authToken);

    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + query + '&offset=0&limit=20&type=' + type;

    return this.http.get(this.searchUrl, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getAlbums(id: string, authToken: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + authToken);

    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + id + '/albums?offset=0&limit=20&album_type=single';

    return this.http.get(this.albumsUrl, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getAlbum(id: string, authToken: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + authToken);

    this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;

    return this.http.get(this.albumUrl, { headers: headers })
      .pipe(map(res => res.json()));
  }

  msToTime(s): string {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
  
    return hrs + 'h ' + mins + 'm ' + secs + 's';
  }

  addAlbum(album: IAlbum): any{
    return this.httpClient.post<IAlbum>(this.albumServiceUrl, album, {observe: 'response'}).subscribe(
      success => {swal("Réussite!", "Album ajouté dans la bibliothèque!", "success");},
      err => {swal("Erreur!", "Album existe déjà dans la bibliothèque!", "error");}
      
    )
  }

  deleteAlbum(id: string): any{
    return this.httpClient.delete<string>(this.albumServiceUrl+'/'+id);
  }

  getAllAlbums(): Observable<IAlbum[]>{
    return this.httpClient.get<IAlbum[]>(this.albumServiceUrl);
  }

  addFavorite(id: string, isFavoris: boolean): any{
    return this.httpClient.put(this.albumServiceUrl+'/favoris/'+id+'/'+isFavoris,null);
  }

  addTag(id: string, tag: string): any{
    return this.httpClient.put<string>(this.albumServiceUrl+'/tag/'+id, tag);
  }
}
