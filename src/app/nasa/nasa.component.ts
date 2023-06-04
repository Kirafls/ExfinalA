import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { SnasaService } from '../service/snasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit{
  data:any[]=[];

  constructor(public alertifyservice:AlertifyService,public snasa:SnasaService){
    this.alertifyservice.success("Componente nasa cargado!")
  }
  ngOnInit(): void {
    this.findData();  
  }
  findData(){
    this.snasa.getdata().subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }


}
