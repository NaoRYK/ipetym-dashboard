const uploadOptions = document.querySelectorAll(".upload-option");
const typesContainer = document.getElementById("types-container");


const handlerOption = (option) =>{
    console.log(option === "Noticia")
    option === "Noticia" ? typesContainer.innerHTML =
`<div class="noticia-container">
    <h2>Cargar una noticia</h2>
    <form action="">
        <div id="titulo-container">
            <label for="titulo-noticia">Ingrese el titulo de la noticia</label>
            <input type="text" name="titulo-noticia" id="titulo-noticia">
        </div>
        <div id="descripcion-container">
            <label for="descripcion-noticia">Ingrese una breve descripcion de la noticia</label>
            <input type="text" name="descripcion-noticia" id="descripcion-noticia">
        </div>
        <div id="imagen-container">
            <label for="imagen-noticia">Ingrese el enlace de la imagen</label>
            <input type="text" name="imagen-noticia" id="imagen-noticia">
        </div>
    </form>
</div>`
 :  typesContainer.innerHTML = "<h1>a</h1>"

}


uploadOptions.forEach((option)=>{
    option.addEventListener("click", (e) =>{

        handlerOption(e.target.innerText)
    },false)
})