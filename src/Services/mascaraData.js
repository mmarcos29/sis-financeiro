export default function mascaradata(valor) {
    let data = null;
    data = valor.replace(/\D/g, "");
    data = data.replace(/(\d{2})(\d)/, "$1/$2");
    data = data.replace(/(\d{2})(\d{1,2})/, "$1/$2");
    data = data.replace(/(\d{4})(\d)/, "$1");
    return data;
  };