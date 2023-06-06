import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { CoctelService } from '../service/coctel.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-coctel',
  templateUrl: './coctel.component.html',
  styleUrls: ['./coctel.component.css']
})
export class CoctelComponent  implements OnInit{
  data:any[]=[];
  aux:any="";
  index:number=0;
  bandera:number=0;
  
  constructor(public alertifyservice:AlertifyService,public scoctel:CoctelService){ }
  coctel:String="";
  ngOnInit(): void {
    this.alertifyservice.success("Componente coctel cargado!");
    this.findData();
  }
  findData(){
    this.scoctel.getdata().subscribe(data=>{
      this.data=data.drinks;
      console.log(this.data);
    })
    
  }
  buscarBebida(){
    this.index= this.data.indexOf(this.data.find(x => x.strDrink == this.coctel));
    console.log(this.data[this.index]);
    this.aux=this.data[this.index]
    if(this.index!=-1){
      this.alertifyservice.success("Se encontro la bebida");
      this.bandera=1;
    }else{
      this.alertifyservice.error("No se encontro la bebida");
      this.bandera=0;
    }
       
  }

}
