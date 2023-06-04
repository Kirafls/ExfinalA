import { Component } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { SnasaService } from '../service/snasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent {
  constructor(public alertifyservice:AlertifyService){
    this.alertifyservice.success("Componente nasa cargado!")
  }

}
