import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { SsimpsonService } from '../service/ssimpson.service';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent implements OnInit,AfterViewInit{
    
    data:any[]=[];
    ListSimp:any[]=[];
    simpson:string="";
    index:number=0;
    bandera:number=0;
    aux:any;
    constructor(public alertifyservice:AlertifyService,public ssimpson:SsimpsonService){
      this.alertifyservice.success("Componente simpson cargado!")
    }
  ngAfterViewInit(): void {
   
  }
    ngOnInit(): void {
      this.findSimpson();
    }
    findSimpson(){
      this.ssimpson.getdata().subscribe(data=>{
        this.data=data.docs;
        console.log(this.data);
      })      
    }
    buscarSimpson(){
      console.log(this.simpson);
      this.index= this.data.indexOf(this.data.find(x => x.Nombre == this.simpson));
      console.log(this.data[this.index]);
    this.aux=this.data[this.index]
    if(this.index!=-1){
      this.alertifyservice.success("Se encontro el personaje");
      this.bandera=1;
    }else{
      this.alertifyservice.error("No se encontro el personaje");
      this.bandera=0;
    }
  }
}
