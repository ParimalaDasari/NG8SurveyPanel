import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'account',loadChildren: ()=>import('./account/account.module').then(m=>m.AccountModule)},
  {path:'example',loadChildren: ()=>import('./examples/examples.module').then(m=>m.ExamplesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
