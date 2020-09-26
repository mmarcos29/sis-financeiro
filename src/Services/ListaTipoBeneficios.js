export default function ListaTipoBeneficios (id) {
    const consignaveis = [
        { id: "01", descricao: "Pensão Por Morte De Trabalho Rural" },
        { id: "02", descricao: "Pensão Por Morte Acidentaria – Trabalhador Rural" },
        { id: "04", descricao: "Aposentadoria Por Invalidez – Trabalhador Rural" },
        { id: "05", descricao: "Aposentadoria Invalidez Acidentaria - Trabalhador Rural" },
        { id: "06", descricao: "Aposentadoria Invalidez - Empregador Rural" },
        { id: "07", descricao: "Aposentadoria Por Velhice – Trabalhador Rural" },
        { id: "08", descricao: "Aposentadoria Por Idade - Empregador Rural" },
        { id: "19", descricao: "Pensão De Estudante(Lei 7.004 / 82)" },
        { id: "20", descricao: "Pensão Por Morte De Ex - Diplomata" },
        { id: "21", descricao: "Pensão Por Morte Previdenciária" },
        { id: "22", descricao: "Pensão Por Morte Estatutária" },
        { id: "23", descricao: "Pensão Por Morte De Ex - Combatente" },
        { id: "24", descricao: "Pensão Especial(Ato Instucional)" },
        { id: "26", descricao: "Pensão Por Morte Especial" },
        { id: "27", descricao: "Pensão Morte Servidor Público Federal" },
        { id: "28", descricao: "Pensão Por Morte Regime Geral" },
        { id: "29", descricao: "Pensão Por Morte Ex - Combatente Marímo" },
        { id: "32", descricao: "Aposentadoria Invalidez Previdenciária" },
        { id: "33", descricao: "Aposentadoria Invalidez Aeronauta" },
        { id: "34", descricao: "Aposentadoria Invalidez Ex - Combatente Marímo" },
        { id: "37", descricao: "Aposentadoria Extra - numerário(CAPIN)" },
        { id: "38", descricao: "Aposentadoria Extra - numerário - Funcionário Público" },
        { id: "41", descricao: "Aposentadoria Por Idade" },
        { id: "42", descricao: "Aposentadoria Por Tempo De Contribuição" },
        { id: "43", descricao: "Aposentadoria Por Tempo Serviço Ex -Combatente" },
        { id: "44", descricao: "Aposentadoria Especial De Aeronauta" },
        { id: "45", descricao: "Aposentadoria Tempo Serviço Jornalista" },
        { id: "46", descricao: "Aposentadoria Especial" },
        { id: "49", descricao: "Aposentadoria Ordinária" },
        { id: "51", descricao: "Aposentadoria Invalidez Exnto Plano Básico" },
        { id: "52", descricao: "Aposentadoria Idade Exnto Plano Básico" },
        { id: "55", descricao: "Pensão Por Morte (Exnto Plano Básico)" },
        { id: "57", descricao: "Aposentadoria Tempo De Serviço De Professor" },
        { id: "58", descricao: "Aposentadoria De Anisados" },
        { id: "59", descricao: "Pensão Por Morte De Anisados" },
        { id: "72", descricao: "Aposentadoria Tempo Serviço - Lei De Guerra" },
        { id: "78", descricao: "Aposentadoria Idade - Lei De Guerra" },
        { id: "81", descricao: "Aposentadoria Compulsória (Ex-Sasse) MG CREDITO – CORRESPONDENTE BANCÁRIO" },
        { id: "82", descricao: "Aposentadoria Tempo De Serviço (Ex -Sasse)" },
        { id: "83", descricao: "Aposentadoria Por Invalidez (Ex-Sasse)" },
        { id: "84", descricao: "Pensão Por Morte (Ex-Sasse)" },
        { id: "92", descricao: "Aposentadoria Invalidez Acidente Trabalho" },
        { id: "93", descricao: "Pensão Por Morte Acidente De Trabalho " }
    ]
    const naoConsignaveis = [
        { id: "09", descricao: "Complemento Por Acidente de Trabalho Para Trabalhador Rural" },
        { id: "09", descricao: "Complemento Por Acidente de Trabalho Para Trabalhador Rural" },
        { id: "10", descricao: "Auxílio-doença Por Acidente de Trabalho do Trabalhador Rural" },
        { id: "11", descricao: "Renda Mensal Vitalícia Por Invalidez do Trab. Rural (Lei 6179/74)" },
        { id: "12", descricao: "Renda Mensal Vitalícia Por Idade do Trab. Rural (Lei 6179/74)" },
        { id: "13", descricao: "Auxílio-doença do Trabalhador Rural" },
        { id: "15", descricao: "Auxílio-reclusão do Trabalhador Rural" },
        { id: "25", descricao: "Auxílio-reclusão (LOPS)" },
        { id: "30", descricao: "Renda Mensal Vitalícia Por Invalidez (Lei 6179/74)" },
        { id: "31", descricao: "Auxílio-doença Previdenciário (LOPS)" },
        { id: "35", descricao: "Auxílio-doença do Ex-combatente" },
        { id: "36", descricao: "Auxílio Acidente" },
        { id: "39", descricao: "Auxilio Invalidez Estudante" },
        { id: "40", descricao: "Renda Mensal Vitalícia Por Idade (Lei 6179/74)" },
        { id: "47", descricao: "Abono de Permanência em Serviço 25%" },
        { id: "48", descricao: "Abono de Permanência em Serviço 20%" },
        { id: "50", descricao: "Auxílio-doença (Exnto Plano Básico)" },
        { id: "53", descricao: "Auxílio Reclusão (Exnto Plano Básico)" },
        { id: "61", descricao: "Auxílio Natalidade" },
        { id: "62", descricao: "Auxílio Funeral" },
        { id: "63", descricao: "Auxílio Funeral Para O Trabalhador Rural" },
        { id: "64", descricao: "Auxílio Funeral Para O Empregador Rural" },
        { id: "65", descricao: "Pecúlio Especial Servidor Autárquico" },
        { id: "66", descricao: "Pecúlio Especial Servidor Autárquico " },
    ]
    let retorno = ""
    // if(naoConsignaveis.find(t => t.id === id) ){
    //     retorno = "não consignavel"
    // }
    // if(consignaveis.find(t => t.id === id) ){
    //     retorno = 
    // }
    retorno = naoConsignaveis.find(t => t.id === id)
    retorno = consignaveis.find(t => t.id === id)

    return retorno
}