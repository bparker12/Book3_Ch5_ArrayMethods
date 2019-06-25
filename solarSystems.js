const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

let section = document.createElement("section")
section.setAttribute("id", "planets")

document.querySelector("body").appendChild(section)
let planetsId = document.querySelector("#planets")

planets.forEach(stuff => {
    planetsId.innerHTML += 
    `<h4>Planet = ${stuff}</h4>`
})
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
// const planetEl = document.getElementById("planets")
function capitalizeFirst(cap) {
    return cap.charAt(0).toUpperCase()
}

let capitalPlanet = planets.map( planet => {
    return planetsId.innerHTML += `<h4>${planet.charAt(0).toUpperCase() + planet.slice(1)}</h4>`;
})
console.log(capitalPlanet)
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let filterplanets = planets.filter( planet => {
    if (planet.includes("e")) {
        return planetsId.innerHTML +=`
        <h4>Planet with a e = ${planet.charAt(0).toUpperCase() + planet.slice(1)}</h4>
        ` 
    }
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/