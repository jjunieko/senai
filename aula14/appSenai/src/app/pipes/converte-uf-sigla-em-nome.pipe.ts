import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converteUfSiglaEmNome'
})
export class ConverteUfSiglaEmNomePipe implements PipeTransform {

  transform(ufSigla: string): string {
    
    switch (ufSigla) {
      case 'AC':
        return 'ACRE';
        break;
        case 'AL':
        return 'ALAGOAS';
        break;
        case 'AP':
        return 'AMAPA';
        break;
        case 'AM':
        return 'AMAZONAS';
        break;
        case 'BA':
        return 'BAHIA';
        break;
        case 'CE':
        return 'BRASÍLIA';
        break;
        case 'ES':
        return 'ESPIRITO SANTO';
        break;
        case 'GO':
        return 'GOIANIA';
        break;
        case 'MA':
        return 'MARANHÃO';
        break;
        case 'MT':
        return 'MATO GROSSO';
        break;
        case 'MS':
        return 'MATO GROSSO DO SUL';
        break;
        case 'MG':
        return 'MINAS GERAIS';
        break;
        case 'PA':
        return 'PARA';
        break;
        case 'PB':
        return 'PARAIBA';
        break;
        case 'PR':
        return 'PARANA';
        break;
        case 'PE':
        return 'PERNAMBUCO';
        break;
        case 'PI':
        return 'PIAUI';
        break;
        case 'RJ':
        return 'RIO DE JANEIRO';
        break;
        case 'RN':
        return 'RIO GRANDE DO NORTE';
        break;
        case 'RS':
        return 'RIO GRANDE DO SUL';
        break;
        case 'RO':
        return 'RORAIMA';
        break;
        case 'SC':
        return 'SANTA CATARINA';
        break;
        case 'SP':
        return 'SÃO PAULO';
        break;
        case 'SE':
        return 'SERJIPE';
        break;
        case 'TO':
        return 'TOCANTINS';
        break;

      default:
        console.log(`Sorry, we are out of${ufSigla}`);
    }

   }
   

}
