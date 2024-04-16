import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RutalazycompComponent } from './components/rutalazycomp/rutalazycomp.component';

const routes: Routes = [
  {
    path: '',
    component: RutalazycompComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RutalazyRoutingModule {}
