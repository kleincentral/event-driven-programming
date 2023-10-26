function onReady() {
  console.log('Yay!, onReady() got called when the page loaded.');
  
  // WE CAN SELECT THINGS!!
  // document is the HTML file. EVERYTHING
  // querySelecter will match 1 thing, the first thing.
  let header = document.querySelector('h1');

  //document.queryselecter('.lass')
  //documents.getElementById('container')
  console.log(header)
  //manipulating
  header.classList.add('gray-border')

  // header.classList.toggle('grey-border')
  //on/off
  // header.classList.remove('grey-border')
  //off

  header.textContent = 'Hello From Javascript!'

  //more manipulation
  let body = document.querySelector('body')
  body.classList.add('background')

  // buttonsize = document.querySelector('button')
  // buttonsize.classList.add('large')

}

function potatoClick() {

  console.log('You clicked a potato!');

  let potatoFarm = document.getElementById('theFarm');

  potatoFarm.innerHTML += `<p onclick="deleteIndex(event, 'potato')">🥔</p>`;

  console.log(potatoFarm)

}

function deleteIndex(event, item){
  console.log(`You wish to delete ${item}!`, event.target);
  console.log("Begone", item);
  //event.target is where the click happened

  event.target.remove();

}

function unicornClick() {

  console.log('You clicked a unicorn!');

  let unicornFarm = document.getElementById('theFarm');

  unicornFarm.innerHTML += `<p onclick="deleteIndex(event, 'unicorn')">🦄</p>`;

  console.log(unicornFarm)

}


// Will call onReady() when the page loads.
onReady()
