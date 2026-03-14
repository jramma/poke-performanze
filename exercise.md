Poke-Performanze challenge!!
Hello, and welcome to our coding challenge. In this opportunity, we want to implement a simple web-based Pokemon game.
Game premise
The game will consist in catching the original 151 Pokemons with the following rules:


* The game will be free to play, but in order to play it, a user has to register. don't worry about authentication  for now
* We invision having a home page once you log in in where you can see your current cached Pokemons (Let's imagine the home page is your Pokedex).
* On that home-page we would also like to have a button that allows you to play the daily mini-game of catching a Pokemon. For this game each day a random Pokemon out of the 151 will appear, and the user will have 6 pokeballs to attempt to catch said mon.
* To catch a mon you have to throw a pokeball to the Pokemon, throwing a pokebal is a random event with a 25% of success. If you ran out of pokeballs the game is over, the mon will escape, and the user will need to wait for the next day for another chance.
Technical consideration
For this challenge we want to stick with the JS ecosystem, Specially with TypeScript.


There's no need to have previous knowledge of Pokemon to complete this challenge. Use this API to retrieve all the info you might need in this challenge.


Remember, the API is mentioned above is modern, so it has more than the original 151 mons!


We would love to see a solid test suite for this challenge.


We would love to see a single-command launch for this app. Something like docker compose up or anything that you might see fit for it.


The challenge has been made intentionally simple. But we will do a technical discussion (and some iterations) over it.
How to submit
Once the challenge is ready, please upload it to a private git repo, and send an invitation to @ItsMacGyver