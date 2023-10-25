console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

// Display Dog Pictures

function renderDog(dog){
    const imageContainer = document.getElementById("dog-image-container");
    let dogImage = document.createElement('p');``
    dogImage.className = 'woof';
    dogImage.innerHTML = `<img src=${dog}>`
    imageContainer.appendChild(dogImage)
};

function fetchDogs(){
    fetch (imgUrl)
        .then(res => res.json())
        .then((data) => {
            data.message.forEach(dog => renderDog(dog))
        })
};


// Display Dog Breeds 

function renderBreed(breed){
    const breedContainer = document.getElementById("dog-breeds");
    let dogBreed = document.createElement('li');
    dogBreed.className = 'type';
    dogBreed.innerHTML = breed;
    let breedSelection = document.getElementById('breed-dropdown');
    if(breed.charAt(0) === breedSelection.value){
        breedContainer.appendChild(dogBreed);
        dogBreed.addEventListener('click', colorChanger);
    }
};

function fetchBreed(){
    fetch(breedUrl)
        .then(res => res.json())
        .then((data) => {
            for(const breed in data.message){
                renderBreed(breed);
            }
        })
}

// Change Color When Clicked

function colorChanger(){
this.style.color = 'crimson';
};


// Filter Results

document.addEventListener('DOMContentLoaded', function() {
    let breedSelection = document.getElementById('breed-dropdown')
    console.log(breedSelection.value);
    breedSelection.addEventListener('change', function(){
        let breedContainer = document.getElementById("dog-breeds");
        breedContainer.innerHTML = ''
        fetchBreed();
    }); 
})


//Initialize

function initialize(){ 
    fetchDogs()
    fetchBreed()
}
initialize()