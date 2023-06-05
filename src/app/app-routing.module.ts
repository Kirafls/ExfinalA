import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NasaComponent } from './nasa/nasa.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { CoctelComponent } from './coctel/coctel.component';


const routes: Routes = [
  {path:"nasa",component:NasaComponent},
  {path:"simpson",component:SimpsonComponent},
  {path:"coctel",component:CoctelComponent},
  {path:"**",component:NasaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
