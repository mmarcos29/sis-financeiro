export default function mascaraCnpj(valor) {
    let cpf = null;
    cpf = valor.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{2})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1/$2");
    cpf = cpf.replace(/(\d{4})(\d{1,2})/, "$1-$2");
    cpf = cpf.replace(/(-\d{2})(\d)/, "$1");
    return cpf;
  };