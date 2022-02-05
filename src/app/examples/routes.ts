import { Routes } from '@angular/router';
import { Example1Component } from './example1/example1.component';
import { Example10Component } from './example10/example10.component';
import { Example11Component } from './example11/example11.component';
import { Example12Component } from './example12/example12.component';
import { Example13Component } from './example13/example13.component';
import { HeroResolver } from './example13/HeroResolver';
import { Example14Component } from './example14/example14.component';
import { Example15Component } from './example15/example15.component';
import { Example16Component } from './example16/example16.component';
import { Example2PipesComponent } from './example2-pipes/example2-pipes.component';
import { Example4Component } from './example4/example4.component';
import { Example7Component } from './example7/example7.component';
import { Example8Component } from './example8/example8.component';
import { Example9Component } from './example9/example9.component';

export const routes: Routes = [
    {path:'ngTemplate',component:Example1Component},
    {path:'eventEmitterEx',component:Example2PipesComponent},
    {path:'example4',component:Example4Component},
    {path:'lifecyclehooks',component:Example7Component},
    {path:'getSurveyNumbers',component:Example8Component},
    {path:'getLandRecords',component:Example9Component},
    {path:'parseLandRecords',component:Example10Component},
    {path:'queryLandRecord',component:Example11Component},
    {path:'pipeExample',component:Example12Component},
    {path:'routeParams/:id',component:Example13Component, resolve:{empIdLen:HeroResolver}},
    {path:'canActivate',component:Example14Component,  canActivate:['CanActivateEmpIdLen']},
    {path:'canDeactivate',component:Example15Component, canDeactivate:['CanDeactivateExample']  },
    {path:'canLoad',component:Example16Component},
    {path:'**',component:Example1Component}
  
  ];