export default (status) =>{
    switch (status) {
    case "aguard":
        alert("aguardando")
        break;
    case "CANCELADA":
        return "#FF9292"
        break;
    case "COM PENDÊNCIA":
        return "#FFCC4B"
        break;
    case "EM ANDAMENTO":
        return "#8DFF7B"
        break;
    case "CADASTRADO":
        return "#C09AC0"
        break;

    default:
        return ""
        break;
}}