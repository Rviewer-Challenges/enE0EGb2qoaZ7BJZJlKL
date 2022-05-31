# Memory Game 

El proyecto de Memory Game es un juego donde se reta a la memoria emparejando las imagenes que se nos presentan en el tablero.
Se comienza desde un nivel facil de 4x4, un nivel medio de 4x5 y uno dificil de 5x6

## Herramientas de desarrollo

El juego se desarrolló para plataforma web y las herramientas que se implementaron son: 

- Vue.Js 2
- Javascript
- HTML
- Bootstrap

Para las imagenes a mostrar, se usaron apis públicas, las cuales son: 

- [PokeApi](https://pokeapi.co/)
- [The Rick and Morty API](https://rickandmortyapi.com/)

## Despliegue

Para el despliegue del juego, se usó la herramienta de Github Pages: 
- [Memory Game](https://henrysantamariac.github.io/MemoryGame/#/)

## Sobre el desarrollo

Decidí hacer este proyecto en Vue Js, ya que es un framework que llevo hace unos meses aprendiendo.

Sobre el juego, este nos presenta 2 opciones sobre las imagenes que se mostrarán en el tablero, en este caso hice uso de las apis de PokeApi y la de Rick and Morty, de las cuales obtenemos imágenes sobre sus personajes.

Para el llamado de las apis, usé la API de Fetch de javascript, de esta forma obtengo de manera sencilla la data necesaria para el juego, en este caso, enlaces a las imagenes que mostraremos. 

Vue Js ofrece plugins como Vue Router y Vuex que nos facilitan el desarrollo las distintas vistas que hay en el juego, y el paso de informacion entre componentes. Tambien instalé el plugin de PWA, aunque solo se encuentra con las configuraciones por defecto al instalarse, por lo que si se ejecuta el juego desde un navegador de celular, este mostrará la opcion de instalarlo como aplicación.  

Para el diseño usé Bootstrap, facilitando el diseño responsive, ya que la idea era presentar un diseño completamente orientado a moviles. Aun asi, en escritorio no deja de verse bien.

Para finalizar adjunto capturas sobre el resultado final del juego.