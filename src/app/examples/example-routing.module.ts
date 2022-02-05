import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot } from '@angular/router';
import {CanActivateEmpIdLen} from './example13/CanActivateEmpIdLen';
import { CanDeactivateExample } from './example15/CanDeactivateExample';
import { CanLoadExample } from './example16/CanLoadExample';
import { routes } from './routes';



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    {
      provide:'CanActivateEmpIdLen',
      useClass:CanActivateEmpIdLen
    },
    {
      provide:'CanDeactivateExample',
      useClass:CanDeactivateExample
    },
    {
      provide:'CanLoadExample',
      useClass:CanLoadExample
    }
  ]
})
export class ExampleRoutingModule {

 }
