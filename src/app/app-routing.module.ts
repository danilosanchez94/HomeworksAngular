import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplerutaComponent } from './components/simpleruta/simpleruta.component';
import { DynamicrouteComponent } from './components/dynamicroute/dynamicroute.component';

const routes: Routes = [
  { path: 'simple', component: SimplerutaComponent },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./ruta-lazy/ruta-lazy.module').then((m) => m.RutaLazyModule),
  },
  { path: 'dynamic/:slug', component: DynamicrouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
