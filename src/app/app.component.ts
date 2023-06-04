import { Component, OnInit } from '@angular/core';
import { AlertifyService } from './service/aletify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HotelA';
  constructor(public alertifyservice:AlertifyService){
    
  }
  ngOnInit(): void {
  }
  alerta(){
    this.alertifyservice.confirm("Confirmar",this.confirmar);
  }
  confirmar(){
    this.alertifyservice.success("Hecho");
    
  }

  
}
