ServerEvents.tags('block', event => {
  event.add("ftbchunks:interact_whitelist", "waystones:waystone")
})

//Welcome
PlayerEvents.loggedIn(event => { 
  event.player.tell("testeeeee")
})