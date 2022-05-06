 let lon 
 let lat

 //referenciacion de loselementos del DOM relacionados al HTML
 let temperaturaValor = document.getElementById('temperatura-valor');
 let temperaturaDescription = document.getElementById('temperatura-descripcion');

 let ubicacion = document.getElementById('Ubicacion');
 let iconoAnimado = document.getElementById('icono-animado');

 let vientoVelocidad = document.getElementById('viento-velocidad');


 //window.addEventListener('load', ()=> {
 if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition( posicion =>{
        //console.log (posicion , coordenadas, latitudes)
        lon = posicion.coords.latitude
        lat = posicion.coords.longitude 


        //api por longitud y latitudes
        //const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9de497b0a16ad50a10913eb4e25c5602`

        //api por ciudades o pais
        const url = `http://api.openweathermap.org/data/2.5/weather?q=Valledupar&lang=es&units=metric&appid=9de497b0a16ad50a10913eb4e25c5602`
       



            //peticiones hacia la api utilizando fetch

        fetch(url)
        .then(response => {return response.json()  })
        .then(data => {

           
            let temp = Math.round(data.main.temp)
            temperaturaValor.textContent = `${temp} °C`

            let desc = data.weather[0].description
            temperaturaDescription.textContent = desc.toUpperCase()

            ubicacion.textContent = data.name

            vientoVelocidad.textContent = `${data.wind.speed} m/s`


            /// api para iconos estaticos

            /*
            console.log(data.weather[0].icon);

            let iconCode = data.weather[0].icon
            const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`
            console.log(urlIcon);
           */
            
            /// api para iconos animados

            //imprme los iconos segun la busqueda en la api 
            switch(data.weather[0].main) {
                case 'Clear':
                iconoAnimado.src ='animated/day.svg'
                console.log('DESPEJADO');
                break;
                case 'Thunderstorm':
                    iconoAnimado.src ='animated/tunder.svg'
                    console.log('TORMENTA');
                    break;
                case 'Drizzle':
                    iconoAnimado.src ='animated/rainy-2.svg'
                    console.log('LLOVIZNA');
                break;
                case 'Rain':
                    iconoAnimado.src ='animated/rayn-7.svg'
                    console.log('LLUVIA');
                    break;
                case 'Snow':
                    iconoAnimado.src ='animated/snowy-6.svg'
                    console.log('NIEVE');
                    break;
                case'Atmosphere':
                    iconoAnimado.src ='animated/weather.svg'
                    console.log('ATMOSFERA');
                break;
                case'Clouds':
                    iconoAnimado.src ='animated/cloudy-day-1.svg'
                    console.log('NUBES');
                break;
                default:
                
            }



        })
        //mostrar error si aparece en el codigo

        .catch( error => {
    console.log(error)
        })



    })
      
 }

//})

