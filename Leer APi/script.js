let contenido = document.querySelector("#contenido")

function fetchTest(){
    fetch("https://waifu.pics/api")
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            contenido.innerHTML = `
            <img src="${data.results['0'].picture.large}" width="120px" class="img-fluid rounded-circle">
            <p><b>Nombre:</b> ${data.results['0'].name.first} ${data.results['0'].name.last}</p>
            <p><b>Edad:</b> ${data.results['0'].dob.age}</p>
            <p><b>Email:</b> ${data.results['0'].email} </p>
            <p><b>Nacimiento:</b> ${data.results['0'].gender}</p>

            `;
        })
}