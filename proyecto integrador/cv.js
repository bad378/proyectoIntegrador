async function obtenerDatos(){
    const response = await fetch("https://random-data-api.com/api/v2/users?size=2&is_xml=true");
    const json = await response.json();
     
    console.log(json)
    console.log(json.email)

}

obtenerDatos()

