import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example1Component } from './example1/example1.component';
import { Example2PipesComponent } from './example2-pipes/example2-pipes.component';
import { Example4Component } from './example4/example4.component';
import { Example6Component } from './example6/example6.component';


const routes: Routes = [
  {path:'ngTemplate',component:Example1Component},
  {path:'eventEmitterEx',component:Example2PipesComponent},
  {path:'example4',component:Example4Component},
  {path:'lifecyclehooks',component:Example6Component},
    {path:'**',component:Example1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule {

 }
