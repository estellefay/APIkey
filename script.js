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
});


// /usr/bin/google-chrome-stable %U --disable-web-security --user-data-dir
