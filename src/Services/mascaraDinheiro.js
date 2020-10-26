export default function mascaraDinheiro(valor) {
  valor = valor.replace(/\D/g, "")
  valor = valor.replace(/(\d{1})(\d{2})$/, "$1,$2")
  valor = valor.replace(/(\d{1})(\d{3}),(\d{2})/, "$1.$2,$3")
  valor = valor.replace(/(\d{1})(\d{3}).(\d{3}),(\d{2})/, "$1.$2.$3,$4")

  return valor;
};