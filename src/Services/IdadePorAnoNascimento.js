export default function (ano){
    let idade = ano ? `${new Date().getFullYear() - ano.replace("/", "").replace("/", "").substr(4, 4)} ANOS` :
    "-----"
    return idade
}