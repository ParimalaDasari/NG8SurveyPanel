import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateChildExample } from './examples/example13/CanActivateChildExample';
import { CanLoadExample } from './examples/example16/CanLoadExample';


const routes: Routes = [
  {path:'account',loadChildren: ()=>import('./account/account.module').then(m=>m.AccountModule)},
  {path:'example',canActivateChild:[CanActivateChildExample],canLoad:['CanLoadExample'],loadChildren: ()=>import('./examples/examples.module').then(m=>m.ExamplesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    {
      provide:'CanActivateChildExample',
      useClass:CanActivateChildExample
    },{
      provide: 'CanLoadExample',
      useClass: CanLoadExample
    }
  ]
})
export class AppRoutingModule { }
