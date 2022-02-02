import { Pipe, PipeTransform } from '@angular/core';
import { alphabetContainerModel } from './alphabetContanerModel';

@Pipe({
  name: 'textTransform',
  pure: true //true is default
})
export class TextTransformPipe implements PipeTransform {

  transform(value: alphabetContainerModel, ...args: any[]): any {
    return 'transformed Value :'+value.alphabet;
  }

}

//pure pipes(default): run only when input values change (input value primitive or not is different question altogether)
//impure pipes: which run for every change detection cycle(useful incase of non primitive and other cases)