import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Routes, RouterModule } from '@angular/router';
import { HorsesComponent } from './horses.component';

const routes: Routes = [{
	path: '',
	data: {title: 'Horses'},
	component: HorsesComponent
}];

@NgModule({
  declarations: [HorsesComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    RouterModule.forChild(routes)
  ]
})
export class HorsesModule { }
