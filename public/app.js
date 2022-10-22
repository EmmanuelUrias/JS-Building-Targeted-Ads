// get user's data
// get user's coordinates
async function getCoords() {
try {
    let pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

catch(error) {
    return [12, 25]
}}
console.log(getCoords())

// Get the user's time:                                                               
function userTime(){
    const now = new Date()
    return now.getHours()
}                     
console.log(userTime())     


// helper functions
// check time of day
function getMealTime() {
    const tod = userTime()
    return tod > 20 ? 'late-night snack' : tod > 16 ? 'Dinner ' : tod > 11 ? 'Lunch' : 'Breakfast'
}

console.log(getMealTime())

// build ads
// build ad 1
function buildAd1() {
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let adParagraph = document.createElement('p')
    adParagraph.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.append(adParagraph)
}
buildAd1()

// build ad 2
function buildAd2() {
    const coords = 'coordinates'
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector('.ad2')
    let adParagraph = document.createElement('p')
    adParagraph.innerHTML = `It's time to try our coffee! <span><a href=${href} target="_blank">We're this close!</a></span> in town`
    content.append(adParagraph)
}
buildAd2(getCoords())

// event listeners
// on load, build ads
window.onLoad = async () => {
    buildAd1()
    const coords = await getcoords()
    buildAd2(coords)
}

