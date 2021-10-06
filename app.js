let request = new XMLHttpRequest();

request.open(`get`,`http://api.weatherstack.com/current?access_key=7ae13894ecc654b637cc3eb12c86d663query=Colima`)

request.onload = function(){
    console.log(this.response);
    let data = JSON.parse(this.response);
    console.log(data);

    let clima = document.getElementById(`clima`)
    clima.innerHTML = `
       
       <h2> el clima es : ${data.location.name} </2>
       <p> En grado es : ${data.description} </p>
    `
}

request.send();