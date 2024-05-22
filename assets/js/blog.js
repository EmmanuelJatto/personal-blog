const userName = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const lightDarkModeButton = document.querySelector('.lightDarkMode');
const goBack = document.querySelector('.goBack');
const divTags = document.querySelectorAll('div');
const bodyTag = document.querySelectorAll('body')
const sectionTags = document.querySelectorAll('section');
const headerTags = document.querySelectorAll('header');
const buttonTags = document.querySelectorAll('button');
const h1Tags = document.querySelectorAll('h1');
const newContainer = document.querySelector('new-container');

// Removed the signupButton event listener, because it was giving an error in the console, and wouldn't allow anything to work

goBack.addEventListener('click', function() {
    window.location.href = 'index.html';
});

function changeBackground(color) {
    document.body.style.background = color;
}

function changeTextColor(color) {
    document.body.style.color = color
}

lightDarkModeButton.addEventListener("click",function() {
    if (lightDarkModeButton.textContent == '☀️') {
    changeBackground('#28282B'); 
    for(i = 0; i < h1Tags.length; i++) {
        h1Tags[i].setAttribute('style', 'color:white');
    }
    for(i = 0; i < buttonTags.length; i++) {
        buttonTags[i]. setAttribute('style', 'background-color:#28282B');
        break;
    }
    for(i = 0; i < sectionTags.length; i++) {
        sectionTags[i].setAttribute('style', 'color:white; background-color:#28282B');
    }
    // document.body.classList.remove('lightMode');
    // document.body.classList.add('darkMode');
    const darkMode = '🌒';
    lightDarkModeButton.textContent = darkMode;
    }
    else {
        changeBackground('white');
        const lightMode = '☀️';
        lightDarkModeButton.textContent = lightMode;
        for(i = 0; i < h1Tags.length; i++) {
            h1Tags[i].setAttribute('style', 'color:black');
        }
        for(i = 0; i < buttonTags.length; i++) {
            buttonTags[i]. setAttribute('style', 'background-color:white');
            break;
        }
        newContainer.setAttribute('style', 'color:black');
    //     document.body.classList.remove('darkMode');
    //     document.body.classList.add('lightMode');
    }
});




