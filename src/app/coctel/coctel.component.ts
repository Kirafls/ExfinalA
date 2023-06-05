import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/aletify.service';
import { CoctelService } from '../service/coctel.service';

@Component({
  selector: 'app-coctel',
  templateUrl: './coctel.component.html',
  styleUrls: ['./coctel.component.css']
})
export class CoctelComponent  implements OnInit{
  data:any[]=[];
  constructor(public alertifyservice:AlertifyService,public scoctel:CoctelService){ }
  ngOnInit(): void {
    this.alertifyservice.success("Componente coctel cargado!");
    this.findData();
  }
  findData(){
    this.scoctel.getdata().subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }

}
