let players = [
  {id:1, name: "Player 1", count: 0, color: 'darkcyan'},
  {id:2, name: "Player 2", count: 0, color: 'darkorchid'},
  {id:3, name: "Player 3", count: 0, color: 'darkorange'},
  {id:4, name: "Player 4", count: 0, color: 'darkslategrey'},
  {id:5, name: "Player 4", count: 0, color: 'darkolivegreen'},
]
const upArrow = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>'
const downArrow = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>'

const init = function(){

  let app = document.getElementById('app')
  players.forEach(player => {
    app.innerHTML= app.innerHTML+'<section id="player'+player.id+'" style="background-color: '+player.color+';"><p class="topButton"><button onclick="addPoint('+player.id+')">'+upArrow+'</button></p><h1>'+player.count+'</h1><p class="bottomButton"><button onclick="subPoint('+player.id+')">'+downArrow+'</button></p><h2 oncontextmenu="nameChange('+player.id+');return false;">'+player.name+'</h2></section>'
  });
}

const addPoint = function(playerId){
  let i = players.findIndex((player => player.id === playerId))
  players[i].count++
  document.getElementById('player'+playerId).getElementsByTagName('H1')[0].innerText = players[i].count
}
const subPoint = function(playerId){
  let i = players.findIndex((player => player.id === playerId))
  players[i].count--
  document.getElementById('player'+playerId).getElementsByTagName('H1')[0].innerText = players[i].count
}

const nameChange = function(id){
  let i = players.findIndex((player => player.id === id))
  let name = players[i].name
  console.log('name:',name)
  document.getElementById('nameChange').style.display = "block"
  document.getElementById('nameChangeInput').value = name
  document.getElementById('nameChangeInputId').value = id
  console.log("asd: ",id);
}

const setName = function(){
  let name = document.getElementById('nameChangeInput').value
  let id = parseInt(document.getElementById('nameChangeInputId').value)
  let i = players.findIndex((player => player.id === id))
  players[i].name = name
  document.getElementById('player'+id).getElementsByTagName('H2')[0].innerText = name
  document.getElementById('nameChange').style.display = "none"



}

init()
