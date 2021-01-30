export default (status) =>{
    switch (status) {
    case "aguard":
        alert("aguardando")
        break;
    case "CANCELADAS":
        return "#FF9292"
        break;
    case "FINALIZADAS":
        return "#72cbf5"
        break;
    case "COM PENDÊNCIAS":
        return "#FFCC4B"
        break;
    case "EM ANÁLISE":
        return "#8DFF7B"
        break;
    case "AGUAR. DIGITAÇÃO":
        return "#C09AC0"
        break;

    default:
        return ""
        break;
}}