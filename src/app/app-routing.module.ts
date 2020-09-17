import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LecturesPageComponent} from "./components/lectures-page/lectures-page.component";

const routes: Routes = [
  {
    path: '',
    component: LecturesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
