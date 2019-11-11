import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {GuerrerosService } from '../../services/guerreros.service'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  arreglo:any[] = [] ;
  constructor( private activatedRoute:ActivatedRoute,
                private guerrerosService:GuerrerosService ) {
    this.activatedRoute.params.subscribe( parametro => {
      this.arreglo  = this.guerrerosService.buscarGuerrero(parametro['texto'])
    });
   }

  ngOnInit() {
  }

}
