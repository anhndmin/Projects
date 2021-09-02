import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IAlbum } from "./shared/album.model";
import { IArtist } from "./shared/artiste.model";
import { AlbumService } from "./shared/album.service";

@Component({
    templateUrl: './recherche.component.html',
    styles: [`
        div.content{
            padding-top: 0px;
        }
    `]
})

export class RechercheComponent implements OnInit{
    motCle: string;
    artistes: IArtist[];
    albums: IAlbum[] = [];
    totalTracks: number;
    duration: number;
    constructor(private route: ActivatedRoute, private albumService: AlbumService){}

    ngOnInit() {
        this.motCle = this.route.snapshot.params['term'];
        this.albumService.getToken().subscribe(
          token =>  {
          this.albumService.getMusique(this.motCle, 'artist', token.access_token).subscribe(
              res => {
                console.log(res.artists.items);
                this.artistes = res.artists.items;
          });
          this.albumService.getMusique(this.motCle, 'album', token.access_token).subscribe(
              res => {
                  console.log(res.albums.items);
                  // this.albums = res.albums.items;
                  for(let item of res.albums.items){
                    let totalDuration: number = 0;
                    let album: IAlbum = new IAlbum();
                    this.albumService.getAlbum(item.id, token.access_token).subscribe(
                      res => {
                        if(res.tracks.items && res.tracks.items.length>0){
                          for(var i=0; i< item.total_tracks; i++){
                            if(res.tracks.items[i] && res.tracks.items[i].duration_ms){
                              totalDuration += res.tracks.items[i].duration_ms;
                            }
                          }
                        }
                        album.duree = totalDuration;
                        album.dureeEnHeure = this.albumService.msToTime(totalDuration);
                        album.id = item.id;
                        album.dateSortie = item.release_date;
                        album.isFavoris = false;
                        album.titre = item.name;
                        if(item.images.length > 0) {
                          album.vignette = item.images[0].url;
                        }
                        this.albums.push(album);
                    }) 
                  }
              }
          )
            
          });
    }

    ajoutBibliotheque(album: IAlbum){
      this.albumService.addAlbum(album).subscribe();
    }
}