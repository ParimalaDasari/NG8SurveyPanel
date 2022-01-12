import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './example1/example1.component';
import { ExampleRoutingModule } from './example-routing.module';



@NgModule({
  declarations: [Example1Component],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExamplesModule { }
