
async function getPokemon(id) {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    let pokemon = await response.json()
    return pokemon.sprites.front_default
}

async function randomPokemon() {
    let num = Math.round(Math.random() * 250) + 1
    let pokemon = await getPokemon(num)
    return pokemon
}

function desordenarList(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {
      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // E intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

async function generateList(length) {
    let list = []
    for (let i = 0; i < length; i++) {
        let card = {id: -1,selected: false, link: ''}
        card.id = i
        card.link = await randomPokemon()
        list.push( JSON.parse(JSON.stringify(card)) )
        list.push( JSON.parse(JSON.stringify(card)) )
    }
    list = desordenarList(list)
    return list
}

async function getListPokemon(level) {
    let array = []
    switch (level) {
        case 1:
            array = await generateList(8)
            break;
        case 2:
            array = await generateList(12)
            break;
        case 3:
            array = await generateList(15)
            break;
    }
    return array
}

export {
    getListPokemon
}