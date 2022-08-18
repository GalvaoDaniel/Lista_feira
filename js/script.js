var listaItens;
var itemInput;

window.onload = function() {
    listaItens = document.getElementById("listaItens");
    itemInput = document.getElementById("novoItemInput");

    // Listener para ativar o evento de click ao apertar no 'Enter'.
    // Feito para aumentar a praticidade da funcionalidade.
    itemInput.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
          document.getElementById("addButton").click();
        }
    });
}


function removeItem(element) {
    element.parentElement.parentElement.classList.add("removed");
}


function checkItem(element) {
    element.parentElement.parentElement.classList.add("checkedItem");
}

// #### Métodos para adicionar li a ul

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
    listItem.addEventListener("transitionend", () => {
        listItem.remove();
    })

    let divBotoes = document.createElement("div");
    divBotoes.innerHTML = '<img src="assets/success.png" alt="Check" width="20px" onclick=checkItem(this)> ' + 
    '<img src="assets/less.png" alt="Remove" width="20px" onclick=removeItem(this)>';
    divBotoes.classList.add("botoesItem");

    listItem.appendChild(divBotoes);

    return listItem;
}