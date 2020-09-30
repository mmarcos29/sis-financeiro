export default function mascaraTelefone(valor) {
    let telefone = null;
    telefone = valor.replace(/\D/g, "");
    telefone = telefone.replace(/(\d{2})(\d)/, "($1) $2");
    telefone = telefone.replace(/(\d{5})(\d{1,2})/, "$1-$2");
    telefone = telefone.replace(/(-\d{4})(\d)/, "$1");
    return telefone;
  };