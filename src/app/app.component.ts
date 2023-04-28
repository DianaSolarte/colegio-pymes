import { Component } from '@angular/core';
import {Programs} from './models/program.model';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Program {
  id: string;
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imParent= '';
  programs: Program[] = [
    {
      id: '1',
      name: 'Auxiliar Bancario',
      image: 'assets/programs-img/aux-bank.png',
      description: 'Aprende los conceptos básicos del sistema bancario y las funciones de un auxiliar bancario.'
    },
    {
      id: '2',
      name: 'Auxiliar de Personal',
      image: 'assets/programs-img/aux-pers.png',
      description: 'Conoce las responsabilidades y tareas de un auxiliar de personal, desde la selección de personal hasta la gestión de nóminas.'
    },
    {
      id: '3',
      name: 'Auxiliar de Mercadeo',
      image: 'assets/programs-img/aux-merc.png',
      description: 'Aprende las técnicas y estrategias del marketing para asistir a los profesionales de mercadeo en sus labores diarias.'
    },
    {
      id: '4',
      name: 'Auxiliar Administrativo',
      image: 'assets/programs-img/analysis.png',
      description: 'Aprende los conceptos y técnicas de la gestión administrativa, desde la organización de archivos hasta la gestión de proyectos.'
    },
    {
      id: '5',
      name: 'Organizador de Archivos',
      image: 'assets/programs-img/administrator-business.png',
      description: 'Conviértete en un experto en organización y gestión de archivos, desde la clasificación y ordenamiento hasta la digitalización de documentos.'
    },
    {
      id: '6',
      name: 'Organizador de Eventos',
      image: 'assets/programs-img/analysis.png',
      description: 'Aprende a planificar y coordinar eventos, desde pequeñas reuniones hasta grandes eventos corporativos o sociales.'
    },
    {
      id: '7',
      name: 'Asistente de Comercio Exterior',
      image: 'assets/programs-img/administrator-business.png',
      description: 'Conoce los procedimientos y trámites necesarios para llevar a cabo operaciones de comercio exterior y asistir a los profesionales en el área.'
    },
    {
      id: '8',
      name: 'Asistente Contable y Financiero',
      image: 'assets/programs-img/analysis.png',
      description: 'Aprende los conceptos y técnicas de contabilidad y finanzas, desde la preparación de estados financieros hasta la gestión de impuestos.'
    },
    {
      id: '9',
      name: 'Asistente de Saneamiento Ambiental',
      image: 'assets/programs-img/administrator-business.png',
      description: 'Aprende los conceptos y técnicas necesarias para el manejo y gestión de residuos, la evaluación y monitoreo ambiental, y la gestión de proyectos ambientales.'
    }

  ]
  OnLoaded(img: string) {
    console.log('log padre', img);
  }
}
