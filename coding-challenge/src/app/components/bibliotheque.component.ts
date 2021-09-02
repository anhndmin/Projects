import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IAlbum } from "./shared/album.model";
import { AlbumService } from "./shared/album.service";
import {MatDialog} from '@angular/material/dialog';
import swal from 'sweetalert';

@Component({
    templateUrl: './bibliotheque.component.html',
    styles: [`
      em { float: right; color: #E05C65; padding-left: 10px;}
      .error input {background-color:#E3C3C5;}
      .error ::-webkit-input-placeholder {color: #999;}
      .error ::-moz-placeholder {color: #999;}
      .error :-moz-placeholder {color: #999;}
      .error :ms-input-placeholder {color: #999;}
    `]
})

export class BibliothequeComponent implements OnInit{
    albums: IAlbum[]
    isDirty: boolean = true
    selected: boolean
    tagMessage: string
    constructor(private router: Router, private albumService: AlbumService,public dialog: MatDialog){}

    ngOnInit(){
        this.albumService.getAllAlbums().subscribe(data => {this.albums = data});
    }

    supprimeBibliotheque(id: string){
        this.albumService.deleteAlbum(id).subscribe();
        location.reload();
    }

    ajoutFavoris(id: string, isFavoris: boolean){
        this.albumService.addFavorite(id,isFavoris).subscribe();
        location.reload();
    }

    ajouterTag(id: string){
        swal("Type something:", {
            content: "input",
          } as any)
          .then((value) => {
            this.albumService.addTag(id, value).subscribe();
            location.reload();
          })
    }
}