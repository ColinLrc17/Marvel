console.log('Chargement de la liste des personnages...');

// retrieve data from json file
fetch('characters.json')
.then((response) => {
    console.log(response);
    return response.json();
})
.then((characters) => {
    console.log(characters);
    // add a ul element to the body after the h1 element
    let ul = document.createElement('ul');
    document.querySelector("h1").after(ul);

    // loop through the characters array
    characters.forEach((character) => {
        console.log(character);
        // create a li element
        let li = document.createElement('li');
        // set the text of the li element to the name of the character
        li.innerText = character.name;
        // append the li element to the ul element
        ul.append(li);
    });

    // add a h2 element to the body after the ul element with the number of characters
    let h2 = document.createElement('h2');
    h2.innerText = `Number of characters: ${characters.length}`;
    ul.after(h2);

}).catch((err) => {
    console.log(err);
});