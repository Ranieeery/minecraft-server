ServerEvents.tags('block', event => {
  event.add("ftbchunks:interact_whitelist", "waystones:waystone")
})

PlayerEvents.loggedIn(event => { 
  event.player.tell("[§6Server]§f Seja bem vindo ao servidor!\n Se esta é a sua primeira vez jogando configure o Voice Mod apertando a tecla §2 \"V\". Para acessar a documentação acesse https://ranieeery.github.io/minecraft-server/")
})