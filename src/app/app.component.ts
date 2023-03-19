import { Component } from '@angular/core';
import {Programs} from './models/program.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pymes';
  programs: Programs[] = [
    {
      id: '1',
      name: 'Auxiliar Bancario',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/programs-img/aux-bank.png'
    },

    {
      id: '2',
      name: 'Auxiliar de Personal',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/programs-img/aux-pers.png'
    },
    {
      id: '3',
      name: 'Auxiliar de Mercadeo',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/programs-img/aux-merc.png'
    },
    {
      id: '4',
      name: 'Auxiliar Administrativo',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/programs-img/analysis.png'
    },
    {
      id: '5',
      name: 'Organizador de Archivos',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/programs-img/administrator-business.png'
    },
    {
      id: '6',
      name: 'Organizador de Eventos',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/programs-img/analysis.png'
    },
    {
      id: '7',
      name: 'Asistente de Comercio Exterior',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/programs-img/administrator-business.png'
    },
    {
      id: '8',
      name: 'Asistente Contable y Financiero',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/programs-img/analysis.png'
    },
    {
      id: '9',
      name: 'Asistente de Saneamiento Ambiental',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      image: 'assets/programs-img/administrator-business.png'
    },
  ]

}
