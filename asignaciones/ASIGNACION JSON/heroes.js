
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    //1 Url del json que se recuperara en una variable 
    const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    //2 creacion del objeto de solicitud
    const request = new XMLHttpRequest();
    //3 se abrira nueva solicitud atraves del metodo open
    request.open('GET', requestURL);
    //4 establecemos el responseType a JSON de esta forma ese XHR sabe que el servidor estará retornando JSON 
    //y que esto debería ser convertido en segundo plano en un objeto JavaScript. Entonces se envía la 
    //solicitud con el método send():
    request.responseType = 'json';
    request.send();
    //5.- Espera por la respuesta a retornar desde el servidor y luego, manejarla
     request.onload = function() {
     const superHeroes = request.response;
     populateHeader(superHeroes);
     showHeroes(superHeroes);
     }

     //6 poblando el encabezado
     function populateHeader(jsonObj) {
     const myH1 = document.createElement('h1');
     myH1.textContent = jsonObj['squadName'];
     header.appendChild(myH1);

     const myPara = document.createElement('p');
     myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
     header.appendChild(myPara);
    }

    //7 Creacion de las tarjetas de informacion del heroe
     function showHeroes(jsonObj) {
     const heroes = jsonObj['members'];
      
     for (var i = 0; i < heroes.length; i++) {
     const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';
        
    const superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
    }
    }


    

  