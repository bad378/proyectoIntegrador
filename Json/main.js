async function obtenerDatos(){
    const response = await fetch("http://127.0.0.1:5500/Json/yyydatos.json");
    const json = await response.json();

    console.log(json);
    
}
obtenerDatos();
