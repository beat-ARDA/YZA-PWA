import { Pipe, PipeTransform } from '@angular/core';
import { IArticulo } from '../models/articulo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IArticulo[], arg: string): any {
    return arg.trim() !== "" ?
      value.filter(item => item.codigoArticulo.trim().includes(arg.trim().toLocaleLowerCase()) || item.nombreArticulo.trim().toLocaleLowerCase().includes(arg.trim().toLocaleLowerCase()))
      : value
  }

}
