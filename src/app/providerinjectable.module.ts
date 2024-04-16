import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderinjectableComponent } from './components/providerinjectable/providerinjectable.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProviderinjectableComponent,
  },
];

@NgModule({
  declarations: [ProviderinjectableComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProviderinjectableModule {}
