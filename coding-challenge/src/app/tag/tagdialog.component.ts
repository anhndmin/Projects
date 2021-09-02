import { Component, Inject } from "@angular/core";
import {MatDialogRef} from '@angular/material/dialog';
import { EventEmitter } from "events";

@Component({
    templateUrl: 'tagdialog.component.html'
})

export class TagDialogComponent {

    public title: string;
    public message: string;
    onOk = new EventEmitter();
    constructor( public dialog: MatDialogRef<TagDialogComponent>) { }

    closeTag(){
        console.log('Tag closed');
    }
  
  }