function helloWorld() {
alert("hello world")
}

function playSound() {
    var audio = new Audio('sounds/Navigation_Enter.mp3'); 
    audio.play();
}

function button() {
    playSound()
    helloWorld()
}
function search() {
    var userInput = document.getElementById('searchInput').value;
    // Construct the Google search URL with the user input
    var googleSearchURL = 'https://www.google.com/search?q=' + encodeURIComponent(userInput);
    // Open the URL in a new tab/window
    window.open(googleSearchURL, '_blank');
}

function imgSearch() {

    var userInput = document.getElementById('searchInput').value;
    // Construct the Google Images search URL with the user input
    var googleImagesURL = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(userInput);
    // Open the URL in a new tab/window
    window.open(googleImagesURL, '_blank');

}