let contenido = document.querySelector("#contenido")

function waifusTest(){
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
        .then(data=>data.json())
        .then(data => {
            console.log(data)
            contenido.innerHTML = `
            <p><b>Compra:</b> $ ${data['0'].casa.compra}</p>
            `;
        })
}