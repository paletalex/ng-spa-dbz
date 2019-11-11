import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable()
export class GuerrerosService {
    
    private guerreros:Guerrero[] = [
        {
          nombre: "Goku",
          descripcion: "Como Saiyan, poseía ciertas características que le hacían ser muy diferente de los demás seres humanos: tenía una cola de mono que le permitía transformarse en Ōzaru un mono con un poder destructor inmenso, la cual le fue arrancada numerosas veces por varios personajes, entre ellos Kamisama para evitar que se transformase; los Saiyans poseen una particularidad en el cabello y es que siempre es de un color oscuro y después de unos años deja de crecer y se mantiene así para toda la vida; también tienen la característica de que cada vez que estàn a punto de morir y sobreviven, vuelven con más fuerza.",
          img: "assets/img/dbz/goku.png",
          poder: "5 millones de poder",
          raza:"Sayajin"
        },
        {
            nombre: "Vegeta",
            descripcion: "Vegeta, destaca por su astucia y valentía a la hora de luchar, así como porque desde muy pequeño fue entrenado con dureza. Como consecuencia de esto, su potencial se manifestó a muy temprana edad, y ya a los cinco años destacaba entre los demás guerreros de primera clase. Fue por ello que se convirtió en uno de los soldados preferidos de Freezer, quien le encargaba misiones cada vez más complicadas.",
            img: "assets/img/dbz/vegeta.png",
            poder: "4.8 millones de poder",
            raza:"Sayajin"
        },
        {
            nombre: "Freezer",
            descripcion: "Cierto día estableció contacto con la raza Saiyajin. Dada la afición de estos seres a la lucha, Freezer decidió comprarles los planetas que conquistaran, y los mantuvo a su servicio un tiempo. Sin embargo, su mayor temor era que fuera cierta la Leyenda del Super Saiyajin, así que por seguridad decidió destruir el Planeta Vegeta para extinguirles, aunque se salvaron los Saiyajin Raditz, Paragus, Turles, Broly, Nappa, el Príncipe Vegeta, el Príncipe Table y Kakarotto.",
            img: "assets/img/dbz/freezer.png",
            poder: "4.6 millones de poder",
            raza:"Alien"
        },
        {
            nombre: "Zarbon",
            descripcion: "Zarbon es, junto a Dodoria, la mano derecha del tirano del Freezer.zarbon encuentra a vegeta para curarlo. Es un extraterrestre con una fuerza de combate muy elevada..",
            img: "assets/img/dbz/zarbon.png",
            poder: "2 millones de poder",
            raza:"Extraterrestre"
        },
        {
            nombre: "Ginyu",
            descripcion: "El capitan Ginyu es el líder del grupo, que después de apoderarse de las bolas de dragón, las lleva ante Freezer, dejando a sus compañeros para que se encarguen de Vegeta, Gohan y Krillin (más tarde se une Goku a la lucha). Su poder es de 120.000 unidades..",
            img: "assets/img/dbz/gynyu.png",
            poder: "4 millones de poder",
            raza:"Extraterrestre"
        },
        {
            nombre: "Que monito",
            descripcion: "El guerrero mas poderoso de todo el univeros, nadie le gana.",
            img: "assets/img/dbz/kemono.jpg",
            poder: "infinito",
            raza:"kemono"
        },
        {
            nombre: "Baby",
            descripcion: "también conocido como Baby Vegeta, es una forma que adopta la máquina mutante Tsufur, Baby, cuando posee a Vegeta usando el parasitismo Tsufur.",
            img: "assets/img/dbz/baby.png",
            poder: "4.2 millones de poder",
            raza:"Sufuru"
        }
      ];
    constructor() {
        console.log('funcionando');
     }  

     getGuerreros(){
         return this.guerreros;
     }
     getGuerrero(index:string){
         return this.guerreros[index];
     }

     buscarGuerrero(texto:string){
         let guerrerosArr:Guerrero[] = [];
         texto = texto.toLowerCase();

         for(let guerrero of this.guerreros){
             let nombre = guerrero.nombre.toLowerCase();

             if( nombre.indexOf(texto)>=0){
                 guerrerosArr.push(guerrero);
                }
         }
         return guerrerosArr;
    }
}
export interface Guerrero{
         
    nombre:string;
    descripcion:string;
    img:string;
    poder:string;
    raza:string;
}