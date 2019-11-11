import { Component, OnInit } from '@angular/core';
import { GuerrerosService, Guerrero } from '../../services/guerreros.service';
@Component({
  selector: 'app-guerreros',
  templateUrl: './guerreros.component.html',
  styleUrls: ['./guerreros.component.css']
})
export class GuerrerosComponent implements OnInit {

 xxx:Guerrero[];

  constructor( private _guerrerosService:GuerrerosService ) { }

  ngOnInit() {
    this.xxx = this._guerrerosService.getGuerreros();
    console.log(this.xxx);
  }

}
