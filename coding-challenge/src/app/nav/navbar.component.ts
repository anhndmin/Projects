import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IAlbum } from "../components/shared/album.model";
import { IArtist } from "../components/shared/artiste.model";

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:non}}
        li > a.active {color: #F97924;}
    `]
})

export class NavBarComponent{
    searchTerm: string = "";
    artistes: IArtist[]
    albums: IAlbum[]

    constructor(private router: Router){}

    searchSessions(searchTerm){
        console.log('Hello papa');
        // this.router.navigate([`/recherche/${searchTerm}`])
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([`/recherche/${searchTerm}`]);
        }); 
    }
}