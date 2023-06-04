import { Component } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { SsimpsonService } from '../service/ssimpson.service';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent {
    constructor(public alertifyservice:AlertifyService){
      this.alertifyservice.success("Componente simpson cargado!")
    }
}
