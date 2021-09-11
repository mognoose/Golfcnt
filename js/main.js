
const defaultPlayers = [
  {id:1, name: "Player 1", count: 0, color: 'darkcyan'},
  {id:2, name: "Player 2", count: 0, color: 'darkorchid'},
  {id:3, name: "Player 3", count: 0, color: 'darkorange'},
  {id:4, name: "Player 4", count: 0, color: 'darkslategrey'},
  {id:5, name: "Player 4", count: 0, color: 'darkolivegreen'},
]

let players = localStorage.players ? JSON.parse(localStorage.getItem('players')): JSON.parse(JSON.stringify(defaultPlayers))

const upArrow = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>'
const downArrow = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>'
const dots = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>'
const closeX = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>'

document.getElementsByClassName('menuButton')[0].innerHTML = dots

let closeButtons = document.getElementsByClassName('closeButton')
Array.from(closeButtons).forEach(btn => btn.innerHTML = closeX);

let app = document.getElementById('app')

const init = function(){
  app.innerHTML=""
  players.forEach(player => {
    app.innerHTML= app.innerHTML+'<section id="player'+player.id+'" style="background-color: '+player.color+';"><p class="topButton"><button onclick="addPoint('+player.id+')">'+upArrow+'</button></p><h1>'+player.count+'</h1><p class="bottomButton"><button onclick="subPoint('+player.id+')">'+downArrow+'</button></p><h2 oncontextmenu="nameChange('+player.id+');return false;">'+player.name+'</h2></section>'
  });
}

const addPoint = function(playerId){
  let i = players.findIndex((player => player.id === playerId))
  players[i].count++
  document.getElementById('player'+playerId).getElementsByTagName('H1')[0].innerText = players[i].count
  save()
}
const subPoint = function(playerId){
  let i = players.findIndex((player => player.id === playerId))
  players[i].count--
  document.getElementById('player'+playerId).getElementsByTagName('H1')[0].innerText = players[i].count
  save()
}

const nameChange = function(id){
  let i = players.findIndex((player => player.id === id))
  let name = players[i].name
  document.getElementById('nameChange').style.display = "block"
  document.getElementById('nameChangeInput').value = name
  document.getElementById('nameChangeInputId').value = id
}

const setName = function(){
  let name = document.getElementById('nameChangeInput').value
  let id = parseInt(document.getElementById('nameChangeInputId').value)
  let i = players.findIndex((player => player.id === id))
  players[i].name = name
  document.getElementById('player'+id).getElementsByTagName('H2')[0].innerText = name
  document.getElementById('nameChange').style.display = "none"
  save()
}
const cancelNameChange = function(){
  document.getElementById('nameChange').style.display = "none"
}

const openMenu = function(){
  document.getElementById('menu').style.display = "block"
}

const closeMenu = function(){
  document.getElementById('menu').style.display = "none"
}

const resetCount = function(){
  players.forEach(p => p.count = 0)
  localStorage.setItem('players', JSON.stringify(players))
  init()
  closeMenu()
}

const resetAll = function(){
  localStorage.setItem('players', JSON.stringify(defaultPlayers))
  players = JSON.parse(localStorage.getItem('players'))
  init()
  closeMenu()
}

const save = function(){
  localStorage.setItem('players', JSON.stringify(players))
}

init()
