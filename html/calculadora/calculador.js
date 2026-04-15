
function adicionar(valor){
    let resultado = document.getElementById("resultado");
    resultado.value += valor;
}

function calcular(valor){
      let resultado = document.getElementById("resultado");
    resultado.value = eval(resultado.value);
}
function limpar(){
      let resultado = document.getElementById("resultado");
    resultado.value = "";
}