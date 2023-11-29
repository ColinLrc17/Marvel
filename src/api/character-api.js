const characters = require('../data/characters.json');

/**
 * Get all characters from json file
 * @returns 
 */
function getCharacters(orderBy = 'name', order = 'asc') {
    // Sort characters by name
    let sortedCharacters = characters.sort((a, b) => {
        if (orderBy === 'name') {
            return a.name.localeCompare(b.name)
        } else if (orderBy === 'modified') {
            return new Date(b.modified) - new Date(a.modified)
        } else {
            throw new Error(`Invalid orderBy parameter: ${orderBy}`)
        }
    })

    // Reverse the order if it is descending
    if (order === 'desc') {
        sortedCharacters.reverse()
    }

    return sortedCharacters
}

/**
 * Get character by id
 * @param {number} id 
 * @returns 
 */
function getCharacterById(id) {
    // If id is a number, convert it to string
    if (typeof id === 'number') {
        id = id.toString()
    }

    if (typeof id !== 'string') {
        throw new Error(`Parameter id must be a number or a string, but it was ${typeof id}`)
    }

    // Find character by id
    const character = characters.find((character) => character.id === id)

    // Throw error if character is not found
    if (!character) {
        throw new Error(`Character with id ${id} not found`)
    }
    return character
}

module.exports = {
    getCharacters,
    getCharacterById
}
