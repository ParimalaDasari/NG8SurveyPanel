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
import { Example8Component } from './example8/example8.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Example9Component } from './example9/example9.component';
import { Example10Component } from './example10/example10.component';
import { Example11Component } from './example11/example11.component';
import { Example12Component } from './example12/example12.component';
import { TextTransformPipe } from './example12/text-transform.pipe';



@NgModule({
  declarations: [Example1Component, Example2PipesComponent, Example3Component, Example4Component, Example5Component, Example6Component, Example7Component, Example8Component, Example9Component, Example10Component, Example11Component, Example12Component, TextTransformPipe],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class ExamplesModule { }
