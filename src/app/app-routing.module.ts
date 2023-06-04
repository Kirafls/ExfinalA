import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NasaComponent } from './nasa/nasa.component';
import { SimpsonComponent } from './simpson/simpson.component';


const routes: Routes = [
  {path:"nasa",component:NasaComponent},
  {path:"simpson",component:SimpsonComponent},
  {path:"**",component:NasaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
