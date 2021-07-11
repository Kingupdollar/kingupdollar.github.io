const section = document.querySelector('section');

// create the json request
let requestURL = 'https://kingupdollar.github.io/json/json/cats.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text'; 
request.send();

request.onload = function() {
  const catText = request.response; 
  // convert string to a JavaScript object
  const catObject = JSON.parse(catText); 
  displayText(catObject);
}

function displayText(json) {
  // Part I: printing mother cat's names
  // create a paragrapg for mother's names
  let catInfo = document.createElement('p');
  let catNamesText = 'Name of mother cats: ';
  // looping through the list of mother cat and capture their name
  for(let i=0; i<json.length; i++){
    // setting the format
    if(i != json.length-1){
      catNamesText += json[i].name + ', ';
    }
    else{
      catNamesText += 'and ' + json[i].name + '.';
    }
  }
  catInfo.textContent = catNamesText
  // adding the paragraph to the section
  section.appendChild(catInfo);
  
  // Part II: printing kitten numbers
  // create a paragrapg for kitten numbers
  let kittenInfo = document.createElement('p');
  // create counters
  let kittenNumbers = 0;
  let kittenNumbersM = 0;
  // looping through the kittens to count their numbers
  for(let i=0; i<json.length; i++){
    kittenNumbers += json[i].kittens.length;
    for(let j=0; j<json[i].kittens.length; j++){
      if(json[i].kittens[j].gender === 'm'){
        kittenNumbersM += 1;
      }
    }
  }
  let kittenNumbersF = kittenNumbers - kittenNumbersM
  // printing the kitten numbers
  kittenInfo.textContent = 'Number of kittens: ' + kittenNumbers + ' (' + kittenNumbersM + ' male; ' + kittenNumbersF + ' female' + ')';
  // adding the paragraph to the section
  section.appendChild(kittenInfo);
}
    
