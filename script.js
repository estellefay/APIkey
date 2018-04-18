$(document).ready(function() {
  // Le code doit être ecrit içi
  const apiKey = '31c22de58047ef2e6c381f7f424f1365';

  $('#a').on('click', function() {
    $.ajax({
      url: "https://api-2445582011268.apicast.io/games/11",
      type: "GET",
      headers: {
        'user-key': apiKey,
        'Accept': 'application/json',
      },
      success: function(response) {
        $('main').empty();         
        // DEfine our Dom Element
       let containerDiv = document.createElement('div')
       containerDiv.classList.add('gameInfo')
       let elementName = document.createElement('h1');
       let elementSummary = document.createElement('p');
       elementSummary.classList.add('description-Summary')
       let cover = document.createElement('img');

       // Put the value of our game inside our vars
       elementName.innerHTML = response[0].name;
       elementSummary.innerHTML = response[0].summary;
       cover.src = response[0].cover.url; // ajouter une image à la variable

       // Append our childs to the container
       containerDiv.appendChild(elementName);
       containerDiv.appendChild(elementSummary);
       containerDiv.appendChild(cover);

       $('main').append(containerDiv);
      }
    });
  });

  $('#b').on('click', function() {
    let id = Math.floor(Math.random() * Math.floor(93000));
    $.ajax({
      url: "https://api-2445582011268.apicast.io/games/" + id,
      type: "GET",
      headers: {
        'user-key': apiKey,
        'Accept': 'application/json',
      },
      success: function(response) {
        $('main').empty();       
        
        // DEfine our Dom Element
       let containerDiv = document.createElement('div')
       containerDiv.classList.add('gameInfo');
       let elementName = document.createElement('h1');
       let elementSummary = document.createElement('p');
       elementSummary.classList.add('description-Summary')
       let cover = document.createElement('img');

       // Put the value of our game inside our vars
       elementName.innerHTML = response[0].name;
       elementSummary.innerHTML = response[0].summary;
       cover.src = response[0].cover.url; // ajouter une image à la variable

       // Append our childs to the container
       containerDiv.appendChild(elementName);
       containerDiv.appendChild(elementSummary);
       containerDiv.appendChild(cover);

       $('main').append(containerDiv);
      }
    });
  });

  $('#c').on('click', function() {
    let id = Math.floor(Math.random() * Math.floor(10000));
    $.ajax({
      url: "https://api-2445582011268.apicast.io/characters/" + id,
      type: "GET",
      headers: {
        'user-key': apiKey,
        'Accept': 'application/json',
      },
      success: function(response) {
        $('main').empty();       
        
        // DEfine our Dom Element
       let containerDiv = document.createElement('div')
       containerDiv.classList.add('gameInfo');
       let elementName = document.createElement('h1');
       let elementpeople = document.createElement('p');
       elementpeople.classList.add('description-Summary');
       let games = document.createElement('p');

       let textNameCharacter = document.createTextNode("The name of personange is :");
       let test = document.createElement('p');
       test.classList.add('underline');
       test.appendChild(textNameCharacter);

       // Put the value of our game inside our vars
       elementName.innerHTML = response[0].name;
       textNameCharacter.innerHTML = textNameCharacter;
       // elementpeople.innerHTML = response[0].people;
      // games.innerHTML = response[0].games; // ajouter une image à la variable

       // Append our childs to the container
     //  containerDiv.appendChild(textNameCharacter);
      containerDiv.appendChild(test);
      containerDiv.appendChild(elementName);
       
      // containerDiv.appendChild(elementpeople);
      // containerDiv.appendChild(games);
// EXECUTER LA FONCTION
      infoPeople(response[0].people);
// Declare la fonction qui demande de faire une requete pour remplcer le poepleID par la donnée de l'API 
       function infoPeople(peopleId) {
         $.ajax({
           url: "https://api-2445582011268.apicast.io/people/" + peopleId,
           type: "GET",
           headers: {
             'user-key': apiKey,
             'Accept': 'application/json',
           },
           success: function(response) {
                               
             let elementNamePeople = document.createElement('p');

             let textNamePeople = document.createTextNode("The dooble of personage is:");
             let test2 = document.createElement('p');
             test2.classList.add('underline');
             test2.appendChild(textNamePeople);
             
            
             // Put the value of our game inside our vars
             elementNamePeople.innerHTML = response[0].name;
             textNamePeople.innerHTML = textNamePeople;
    
             // Append our childs to the container
             containerDiv.appendChild(test2);
             containerDiv.appendChild(elementNamePeople);
           }
        });
      };
      // EXECUTER LA FONCTION
      infoGame(response[0].games);
      // Declare la fonction qui demande de faire une requete pour remplcer le poepleID par la donnée de l'API 
        function infoGame(gameId) {
          $.ajax({
            url: "https://api-2445582011268.apicast.io/games/" + gameId,
            type: "GET",
            headers: {
              'user-key': apiKey,
              'Accept': 'application/json',
            },
            success: function(response) {
                                
              let elementNameGame = document.createElement('p');

              let textNameGame = document.createTextNode("The name of game is:");
              let test3 = document.createElement('p');
              test3.classList.add('underline');
              test3.appendChild(textNameGame);
              
            
              // Put the value of our game inside our vars
              elementNameGame.innerHTML = response[0].name;
              textNameGame.innerHTML = textNameGame;
    
              // Append our childs to the container
              containerDiv.appendChild(test3);
              containerDiv.appendChild(elementNameGame);
            }
        });
      };
    $('main').append(containerDiv);
     }
  });        
});
  $('#d').on('click', function() {
    $.ajax({
      url: "https://api-2445582011268.apicast.io/games/count", // REcuperer le nombre de
      type: "GET",
      headers: {
        'user-key': apiKey,
        'Accept': 'application/json',
      },
      success: function(games) {
        let gamesCount = games.count;
        let gamesNumber = Math.floor((Math.random() * gamesCount) + 1); 

      $.ajax({
            url: "https://api-2445582011268.apicast.io/games/" + gamesNumber,
            type: "GET",
            headers: {
              'user-key': apiKey,
              'Accept': 'application/json',
            },
            success: function(response) {
              $('main').empty();         
              // DEfine our Dom Element
            let containerDiv = document.createElement('div')
            containerDiv.classList.add('gameInfo')
            let elementName = document.createElement('h1');
            let elementSummary = document.createElement('p');
            elementSummary.classList.add('description-Summary')
            let cover = document.createElement('img');

            // Si il n'y as pas de donner alors afficher no summary
            if (response[0].name == undefined) {
              elementName.innerHTML = "No tittle for his games";
            } else { 
              elementName.innerHTML = response[0].name;
            }
            
            
            if (response[0].summary == undefined) {
              elementSummary.innerHTML = "No summary for his games";
            } else { 
              elementSummary.innerHTML = response[0].summary;
            }

            if (response[0].cover == undefined) {
              console.log('pas image');
            } else { 
              cover.src = response[0].cover.url; // ajouter une image à la variable

            }
            // Append our childs to the container
            containerDiv.appendChild(elementName);
            containerDiv.appendChild(elementSummary);
            containerDiv.appendChild(cover);

            $('main').append(containerDiv);
          }
        });
      }
    });
  });
}); 

// /usr/bin/google-chrome-stable %U --disable-web-security --user-data-dir ( CONECTION POUR hacker google chrome