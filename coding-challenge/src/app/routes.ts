import { Routes } from "@angular/router";
import { RechercheComponent } from "./components/recherche.component";
import { 
    AccueilComponent,
    BibliothequeComponent
} from "./components/index";
import { ArtisteComponent } from "./components/artiste.component";
import { TagDialogComponent } from "./tag/tagdialog.component";
 
export const appRoutes: Routes = [
    {path: 'bibliotheque', component: BibliothequeComponent},
    {path: 'accueil', component: AccueilComponent},
    {path: 'recherche/:term', component: RechercheComponent},
    {path: 'artiste/:id/:name', component: ArtisteComponent},
    {path: 'tag', component: TagDialogComponent},
    {path: '', redirectTo: '/accueil', pathMatch: 'full'}
]