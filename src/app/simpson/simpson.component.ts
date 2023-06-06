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

    
}
