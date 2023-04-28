import { Component, OnInit, Input } from '@angular/core';
import { Programs} from  '../models/program.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  @Input() program : Programs = {
    id: '',
    name: '',
    description:'',
    image: ''
  };
  constructor(){}
  ngOnInit():void {

  }
}
