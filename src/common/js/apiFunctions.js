async function getGameOfThrones(id) {
    let response = await fetch(`https://thronesapi.com/api/v2/Characters/` + id)
    let obj = await response.json()
    return obj.imageUrl
}

async function getPokemon(id) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + id)
    let pokemon = await response.json()
    return pokemon.sprites.front_default
}

async function getRickMorty(id) {
    let response = await fetch(`https://rickandmortyapi.com/api/character/` + id)
    let obj = await response.json()
    return obj.image
}

async function randomImg(theme) {
    let num = -1
    let id = -1
    switch (theme) {
        case 1:
            num = Math.round(Math.random() * 500) + 1
            id = await getPokemon(num)
            break;
        case 2:
            num = Math.round(Math.random() * 600) + 1
            id = await getRickMorty(num)
            break;
    }

    return id
}

function desordenarList(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

async function generateList(theme, length) {
    let list = []
    if (theme != 0) {
        for (let i = 0; i < length; i++) {
            let card = {id: -1,selected: false, link: ''}
            card.id = i
            card.link = await randomImg(theme)
            list.push( JSON.parse(JSON.stringify(card)) )
            list.push( JSON.parse(JSON.stringify(card)) )
        }
        list = desordenarList(list)
    }
    return list
}

async function getListImages(theme, level) {
    let array = []
    switch (level) {
        case 1:
            array = await generateList(theme, 8)
            break;
        case 2:
            array = await generateList(theme, 12)
            break;
        case 3:
            array = await generateList(theme, 15)
            break;
    }
    return array
}

export {
    getListImages
}