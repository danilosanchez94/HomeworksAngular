import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  {
    path: 'A',
    loadChildren: () => import('./A/a.module').then((m) => m.AModule),
  },
  {
    path: 'B',
    loadChildren: () => import('./B/b.module').then((m) => m.BModule),
  },
  {
    loadChildren: (): Promise<typeof ProductModule> =>
      import('./product/product.module').then(
        (m: any): typeof ProductModule => m.ProductModule
      ),
    path: 'products',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
