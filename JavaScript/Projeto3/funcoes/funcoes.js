/*Função para verificar se a data atual está entre a data início e a data fim da chuva;
  Retorna True ou False;
*/
const verificaChuvaVisivelPorData = (chuva, dataAtual) => {
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual);

    if (dataInicio.getMonth() + 1 > dataFim.getMonth() + 1 ) {
        const anoFinal = dataFim.getFullYear();
        dataFim.setFullYear(anoFinal +1);
    }

  return ( dataAtual >= dataInicio && dataAtual <= dataFim );
}

/*Função para verificar se a data daqui a dois meses estará entre a data início e a data fim da chuva;
  Retorna True ou False;
*/
const verificaChuvaVisivelProximos2Meses = (chuva, data) => {
  const dataAtual = data;
  const anoAtual = dataAtual.getFullYear();
  const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
  const dataFim = new Date(dataAtual);

  if ( dataAtual.getMonth() + 1 > dataInicio.getMonth() + 1 ) {
      const anoFinal = dataInicio.getFullYear();
      dataInicio.setFullYear(anoFinal +1);
    }

  dataFim.setMonth( dataFim.getMonth() + 2 );

  return ( dataAtual < dataInicio && dataInicio < dataFim );
}

//Retorna o hemisferio com if ternário;
const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul';

//Retorna Intensidade: utiliza o indexOf para verificar se a palavra está no array, caso não estiver retorna -1 tornando o if falso
const retornaIntensidade = (intensidade) => {
    let novaIntensidade = '1 (Fraca)';

    if ( intensidade.indexOf('Forte') >= 0 ) {
        novaIntensidade = '3 (Forte)';
    } else if ( intensidade.indexOf('Média') >= 0 ) {
        novaIntensidade = '2 (Média)';
    } else if (  intensidade.indexOf('Irregular') >= 0 ) {
        novaIntensidade = '(Irregular)';
    }

    return novaIntensidade;
}

//.split separa a data em dois arrays pela barra, ai basta usar o indice para inverter!
const inverteMesAno = (data) => {
    const dataInvertida = data.split('/');

    return dataInvertida[1] + '/' + dataInvertida[0]
}
export {verificaChuvaVisivelPorData, verificaChuvaVisivelProximos2Meses,retornaHemisferio,retornaIntensidade,inverteMesAno};