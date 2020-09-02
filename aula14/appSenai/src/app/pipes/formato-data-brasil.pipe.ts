import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'formatoDataBrasil'
})
export class FormatoDataBrasilPipe implements PipeTransform {

  transform(data: string): string {

    var dataFormatada = moment(data, "YYY-MM-DDD").format("DD/MM/YY");
    return dataFormatada;
  }

}
