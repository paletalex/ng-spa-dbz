import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuerrerosService } from '../../services/guerreros.service';

@Component({
  selector: 'app-guerrero',
  templateUrl: './guerrero.component.html',
  styleUrls: ['./guerrero.component.css']
})
export class GuerreroComponent implements OnInit {

  guerrero:any ={};

  constructor( private activatedRoute:ActivatedRoute,
                private guerrerosService:GuerrerosService) { 
    this.activatedRoute.params.subscribe( parametro => {
      
      this.guerrero = guerrerosService.getGuerrero(parametro['id']);
    });
    console.log(this.guerrero);
  }

  ngOnInit() {
  }

}
