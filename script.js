let buttons = document.getElementsByClassName('buttons');

function getHTMLForAnimal(animal) {
    return `
      <div class="card">
        <img src="${animal.imageURL}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${animal.name}</h5>
          <p class="card-text">sex: ${animal.sex} age: ${animal.age}</p>
        </div>
      </div>
  `;
  }

  function initLionButton() {

    let lionButton = document.getElementById('lion-link');


     // each animal object has the following properties
      // 
      // {
      //   name: "Zena",
      //   sex: "female",
      //   imageURL: "https://images.unspl....",
      //   age: 12,
      //   showcase: false,
      //   typeId: 1, // lion
      // }

      // step 1: create a variable to hold the DOM element
      // that represents the button with id='lion-link'.
      // use the document.getElementById method to retrieve it.
      // https://www.w3schools.com/jsref/met_document_getelementbyid.asp
      
      // step 2: create an event-handler for when the button 
      // in step 1 is clicked. 
      // use the Element.addEventLister method to register the
      // event handler.
      // https://www.w3schools.com/jsref/met_document_addeventlistener.asp
      
      for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', (e)=>{
            let name = e.target.id.split('-')[0];
            let typeId = zoo.animalTypes.find(x=>x.name === name).id;
            let animalsOfType = zoo.animals.filter(x=>x.typeId === typeId);
            let html = '';
            html = animalsOfType.map(x=>getHTMLForAnimal(x)).join('');
            // for(let i = 0; i < animalsOfType.length; i++){
            //   html += getHTMLForAnimal(animalsOfType[i]);
            // }
            let mainContentEl = document.getElementById('main-content');
            mainContentEl.innerHTML = html;
        });
    }
      // within the body of the event handler....

      // step 3: create a variable to hold the animal
      // that has the property showcase: true. 
      // use the Array.find method to find it.
      // https://www.w3schools.com/jsref/jsref_find.asp

      // step 4: create a variable to hold the DOM element
      // that represents the div with the id='main-content'.
      // use the document.getElementById method to retrieve it.
      // https://www.w3schools.com/jsref/met_document_getelementbyid.asp

      // step 5: assign the innerHTML of the variable returned in step 3
      // the value returned from calling the function getHTMLForAnimal.
      
      // these modifications should result in the main-content div being
      // update to contain the HTML for the specific animal.
  }

  initLionButton();

console.log(zoo);