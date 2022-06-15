let contenido = document.querySelector("#contenido");

function fetchTest(){
    fetch("text.txt")
        .then(data => data.text())
        .then(data=>{
            contenido.innerHTML =`
            ${data}
            `;
        })
}