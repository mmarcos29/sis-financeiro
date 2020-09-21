export default function RemoveMascaraCpf(valor) {
    let cpf = valor;
    cpf = cpf.replace(/\D/g, "");
    return cpf;
  };