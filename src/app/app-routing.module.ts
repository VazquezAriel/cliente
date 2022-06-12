import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomovilesComponent } from './pages/automoviles/automoviles.component';

const routes: Routes = [
  {path: "automoviles", component:AutomovilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
