async function obtenerDatos(){
const response = await fetch('http://127.0.0.1:5500/proyectointegrador/cv.json');

    const json = await response.json();
     
    console.log(json)
    console.log(json.email)

}

obtenerDatos()

