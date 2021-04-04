import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'githubapipipe'
})
export class GithubapipipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
