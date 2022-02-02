import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example1Component } from './example1/example1.component';
import { Example10Component } from './example10/example10.component';
import { Example11Component } from './example11/example11.component';
import { Example12Component } from './example12/example12.component';
import { Example2PipesComponent } from './example2-pipes/example2-pipes.component';
import { Example4Component } from './example4/example4.component';
import { Example7Component } from './example7/example7.component';
import { Example8Component } from './example8/example8.component';
import { Example9Component } from './example9/example9.component';


const routes: Routes = [
  {path:'ngTemplate',component:Example1Component},
  {path:'eventEmitterEx',component:Example2PipesComponent},
  {path:'example4',component:Example4Component},
  {path:'lifecyclehooks',component:Example7Component},
  {path:'getSurveyNumbers',component:Example8Component},
  {path:'getLandRecords',component:Example9Component},
  {path:'parseLandRecords',component:Example10Component},
  {path:'queryLandRecord',component:Example11Component},
  {path:'pipeExample',component:Example12Component},
  {path:'**',component:Example1Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule {

 }
