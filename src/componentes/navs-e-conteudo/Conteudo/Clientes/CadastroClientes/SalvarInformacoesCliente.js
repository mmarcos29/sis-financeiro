export default function SalvarInformacoesCliente(props) {
    const dadosForm = props;
    let retorno = false

    const validacaoDadosPessoais = () => {
        if (!dadosForm.dadosPessoais.cpf) {
            alert("CAMPO CPF É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.nome) {
            alert("CAMPO NOME É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.telefone) {
            alert("CAMPO TELEFONE É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosComerciais.benefício) {
            alert("CAMPO BENEFICIO É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosComerciais.margem) {
            alert("CAMPO MARGEM É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosComerciais.BANCO) {
            alert("CAMPO BANCO É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosComerciais.agencia) {
            alert("CAMPO AGÊNCIA É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosComerciais.conta) {
            alert("CAMPO CONTA É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.sexo) {
            alert("CAMPO SEXO É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.dtNascimento) {
            alert("CAMPO DATA DE NASCIMENTO É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.naturalidade) {
            alert("CAMPO NATURALIDADE É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.nacionalidade) {
            alert("CAMPO NACIONALIDADE É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.rg) {
            alert("CAMPO NÚMERO RG É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.dtEmissao) {
            alert("CAMPO DATA DE EMISSAO RG É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.orgaoEmissor) {
            alert("CAMPO ORGÃO EMISSOR É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.ufEmissor) {
            alert("CAMPO UF É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.email) {
            alert("CAMPO E-MAIL É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.nomePai) {
            alert("CAMPO NOME DO PAI É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.nomeMae) {
            alert("CAMPO NOME DA MÃE É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.grauInstrucao) {
            alert("CAMPO GRAU DE INSTRUÇÃO É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.estadoCivil) {
            alert("CAMPO ESTADO CIVIL É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.tipoEndereco) {
            alert("CAMPO END. P/CORRESPONDÊNCIA É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else if (!dadosForm.dadosPessoais.dependentes) {
            alert("CAMPO Nº DEPENDENTES É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
        } else
            if (dadosForm.dadosPessoais.estadoCivil === "CASADO(A)") {
                if (!dadosForm.dadosConjugue.cpfConjugue) {
                    alert("CAMPO CPF DO CÔNJUGE É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
                } else if (!dadosForm.dadosConjugue.nomeConjugue) {
                    alert("CAMPO NOME DO CÔNJUGE É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
                } else if (!dadosForm.dadosConjugue.dtNascimentoConjugue) {
                    alert("CAMPO DATA DE NASCIMENTO DO CÔNJUGE É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
                } else if (!dadosForm.dadosConjugue.rgConjugue) {
                    alert("CAMPO RG DO CÔNJUGE É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
                } else if (!dadosForm.dadosConjugue.naturalidadeConjugue) {
                    alert("CAMPO NATURARILADE DO CÔNJUGE É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
                } else if (!dadosForm.dadosConjugue.nacionalidadeConjugue) {
                    alert("CAMPO NACIONALIDADE DO CÔNJUGE É OBRIGATÓRIO ( DADOS PESSOAIS ) ");
                } else {
                    //quando casado
                    validacaoEndereco();
                }
            } else {
                //fluxo quando for solteiro
                validacaoEndereco();
                // alert("todos os dados pessoais foram preenchidos!");
            }
    }

    const validacaoEndereco = function () {
        if (!dadosForm.enderecoCliente.rua) {
            alert("CAMPO RUA É OBRIGATÓRIO ( ENDEREÇO CLIENTE ) ");
        } else if (!dadosForm.enderecoCliente.bairro) {
            alert("CAMPO BAIRRO É OBRIGATÓRIO ( ENDEREÇO CLIENTE ) ");
        } else if (!dadosForm.enderecoCliente.numero) {
            alert("CAMPO NÚMERO É OBRIGATÓRIO ( ENDEREÇO CLIENTE ) ");
        } else if (!dadosForm.enderecoCliente.cidade) {
            alert("CAMPO CIDADE É OBRIGATÓRIO ( ENDEREÇO CLIENTE ) ");
        } else if (!dadosForm.enderecoCliente.estado) {
            alert("CAMPO ESTADO É OBRIGATÓRIO ( ENDEREÇO CLIENTE ) ");
        } else if (!dadosForm.enderecoCliente.cep) {
            alert("CAMPO CEP É OBRIGATÓRIO ( ENDEREÇO CLIENTE ) ");
        } else {
            validacaoDadosProfissionais();
        }
    };

    const validacaoDadosProfissionais = () => {
        if (!dadosForm.dadosProfissionais.empresa) {
            alert("CAMPO EMPRESA QUE TRABALHA É OBRIGATÓRIO ( DADOS PROFISSIONAIS ) ");
        } else if (!dadosForm.dadosProfissionais.cnpj) {
            alert("CAMPO CNPJ É OBRIGATÓRIO ( DADOS PROFISSIONAIS ) ");
        } else if (!dadosForm.dadosProfissionais.rendaMensal) {
            alert("CAMPO RENDA MENSAL É OBRIGATÓRIO ( DADOS PROFISSIONAIS ) ");
        } else if (!dadosForm.dadosProfissionais.profissao) {
            alert("CAMPO PROFISSÃO É OBRIGATÓRIO ( DADOS PROFISSIONAIS ) ");
        } else if (!dadosForm.dadosProfissionais.cargo) {
            alert("CAMPO CARGO É OBRIGATÓRIO ( DADOS PROFISSIONAIS ) ");
        } else if (!dadosForm.dadosProfissionais.ramal) {
            alert("CAMPO RAMAL É OBRIGATÓRIO ( DADOS PROFISSIONAIS ) ");
        } else if (!dadosForm.dadosProfissionais.catprofissional) {
            alert("CAMPO CATEGORIA PROFISSIONAL É OBRIGATÓRIO ( DADOS PROFISSIONAIS ) ");
        } else if (!dadosForm.dadosProfissionais.dtAdmissao) {
            alert("CAMPO DT. ADMISSÃO/APOSENTADORIA É OBRIGATÓRIO ( DADOS PROFISSIONAIS ) ");
        } else if (!dadosForm.dadosProfissionais.especieAposentadoria) {
            alert("CAMPO ESPÉCIE DE APOSENTADORIA É OBRIGATÓRIO ( DADOS PROFISSIONAIS ) ");
        } else if (!dadosForm.dadosProfissionais.cidadeProf) {
            alert("CAMPO CIDADE É OBRIGATÓRIO ( DADOS PROFISSIONAIS ) ");
        } else if (!dadosForm.dadosProfissionais.estadoProf) {
            alert("CAMPO ESTADO É OBRIGATÓRIO ( DADOS PROFISSIONAIS ) ");
        } else if (!dadosForm.dadosProfissionais.cepProf) {
            alert("CAMPO CEP É OBRIGATÓRIO ( DADOS PROFISSIONAIS ) ");
        } else if (!dadosForm.dadosProfissionais.ruaProf) {
            alert("CAMPOS DE ENDEREÇO DA EMPRESA SÃO OBRIGATÓRIOS (RUA)");
        } else if (!dadosForm.dadosProfissionais.bairroProf) {
            alert("CAMPOS DE ENDEREÇO DA EMPRESA SÃO OBRIGATÓRIOS (BAIRRO)");
        } else if (!dadosForm.dadosProfissionais.numeroProf) {
            alert("CAMPOS DE ENDEREÇO DA EMPRESA SÃO OBRIGATÓRIOS (NÚMERO)");
        } else {
            validacaoReferenciasPessoais()
        }
    };

    const validacaoReferenciasPessoais = () => {
        if (!dadosForm.referenciasPessoais.nomeRef) {
            alert("CAMPO NOME COMPLETO É OBRIGATÓRIO ( REFERÊNCIAS PESSOAIS ) ");
        }        
        else if (!dadosForm.referenciasPessoais.telefoneRef) {
            alert("CAMPO TELEFONE É OBRIGATÓRIO ( REFERÊNCIAS PESSOAIS ) ");
        }
        else if (!dadosForm.referenciasPessoais.cidadeRef) {
            alert("CAMPO CIDADE É OBRIGATÓRIO ( REFERÊNCIAS PESSOAIS ) ");
        }
        else if (!dadosForm.referenciasPessoais.estadoRef) {
            alert("CAMPO ESTADO É OBRIGATÓRIO ( REFERÊNCIAS PESSOAIS ) ");
        }
        else if (!dadosForm.referenciasPessoais.cepRef) {
            alert("CAMPO CEP É OBRIGATÓRIO ( REFERÊNCIAS PESSOAIS ) ");
        }
        else if (!dadosForm.referenciasPessoais.ruaRef) {
            alert("CAMPO RUA É OBRIGATÓRIO ( REFERÊNCIAS PESSOAIS ) ");
        }
        else if (!dadosForm.referenciasPessoais.bairroRef) {
            alert("CAMPO BAIRRO É OBRIGATÓRIO ( REFERÊNCIAS PESSOAIS ) ");
        }
        else if (!dadosForm.referenciasPessoais.numeroRef) {
            alert("CAMPO NÚMERO É OBRIGATÓRIO ( REFERÊNCIAS PESSOAIS ) ");
        } else {
            // alert("TUDO PRONTO MEU FI")
            retorno = dadosForm
        }
    }

    validacaoDadosPessoais()
    return retorno
};