var liPadrao = '<li>' + 
'<div class="botoesItem" > ' + 
'<img src="assets/success.png" alt="Check" width="20px" >' + 
'<img src="assets/less.png" alt="Remove" width="20px" >' + 
'</div>' + 
'</li>';

var listaItens;
var itemInput;

window.onload = function() {
    listaItens = document.getElementById("listaItens");
    itemInput = document.getElementById("novoItemInput");

    itemInput.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
          document.getElementById("addButton").click();
        }
      });
}

function removeItem(element) {
    element.parentElement.parentElement.remove();
}

function checkItem(element) {
    element.parentElement.parentElement.classList.add("checkedItem");
}

function adicionaItem() {
    let item = itemInput.value;

    if (item && item.trim() != "") {
        adicionaItemALista(item);
    
        itemInput.value = "";
    }

}

function adicionaItemALista(item) {

    let listItem = criarLi(item);

    listaItens.appendChild(listItem);
}

function criarLi(text) {
    let listItem = document.createElement("li");
    listItem.innerText = text;

    let divBotoes = document.createElement("div");
    divBotoes.innerHTML = '<img src="assets/success.png" alt="Check" width="20px" onclick=checkItem(this)> ' + 
    '<img src="assets/less.png" alt="Remove" width="20px" onclick=removeItem(this)>';
    divBotoes.classList.add("botoesItem");

    listItem.appendChild(divBotoes);

    return listItem;
}