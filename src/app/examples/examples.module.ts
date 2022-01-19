import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './example1/example1.component';
import { ExampleRoutingModule } from './example-routing.module';
import { Example2PipesComponent } from './example2-pipes/example2-pipes.component';
import { Example3Component } from './example3/example3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Example4Component } from './example4/example4.component';
import { Example5Component } from './example5/example5.component';
import { Example6Component } from './example6/example6.component';
import { Example7Component } from './example7/example7.component';



@NgModule({
  declarations: [Example1Component, Example2PipesComponent, Example3Component, Example4Component, Example5Component, Example6Component, Example7Component],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ExamplesModule { }
