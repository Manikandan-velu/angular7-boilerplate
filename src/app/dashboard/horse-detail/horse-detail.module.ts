import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HorseDetailComponent } from './horse-detail.component';

const routes: Routes = [{
	path: '',
	data: {title: 'Horse Detail'},
	component: HorseDetailComponent
}];

@NgModule({
  declarations: [HorseDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HorseDetailModule { }
