import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IAlbum } from "./shared/album.model";
import { IArtist } from "./shared/artiste.model";
import { AlbumService } from "./shared/album.service";

@Component({
    templateUrl: './artiste.component.html'
})

export class ArtisteComponent implements OnInit{
    constructor(private albumService: AlbumService, private route: ActivatedRoute){}
    id: string
    nom_artiste: string
    artist: IArtist
    albums: IAlbum[] = []

    ngOnInit(){
        this.id = this.route.snapshot.params['id'];
        this.nom_artiste = this.route.snapshot.params['name'];
        this.albumService.getToken()
              .subscribe(res => 
                this.albumService.getAlbums(this.id, res.access_token)
                  .subscribe(albums => {
                    for(let item of albums.items){
                        let totalDuration: number = 0;
                        let album: IAlbum = new IAlbum();
                        this.albumService.getAlbum(item.id, res.access_token).subscribe(
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
                  })
              );
      }

      ajoutBibliotheque(album: IAlbum){
        this.albumService.addAlbum(album).subscribe();
      }
}