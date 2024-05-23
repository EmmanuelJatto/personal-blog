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
const footerTag = document.querySelectorAll('footer');

// Removed the signupButton event listener, because it was giving an error in the console, and wouldn't allow anything to work

//Sends user back to the first page
goBack.addEventListener('click', function() {
    window.location.href = 'index.html';
});

//Used to change the color of the whole webpage background and not just sections
function changeBackground(color) {
    document.body.style.background = color;
}

//Used to change the text color of the whole webpage and not just sections
function changeTextColor(color) {
    document.body.style.color = color
}

lightDarkModeButton.addEventListener("click",function() {
    if (lightDarkModeButton.textContent == '☀️') {
    changeBackground('#28282B'); 
    for(i = 0; i < h1Tags.length; i++) {
        h1Tags[i].setAttribute('style', 'color:white');
    }
    for(i = 0; i < headerTags.length; i++) {
        headerTags[i].setAttribute('style', 'background-color:black');
    }
    for(i = 0; i < buttonTags.length; i++) {
        buttonTags[i]. setAttribute('style', 'background-color:black');
        break;
    }
    for(i = 1; i < buttonTags.length; i++) {
        buttonTags[i]. setAttribute('style', 'background-color:#28282B; color:white');
    }
    for(i = 0; i < sectionTags.length; i++) {
        sectionTags[i].setAttribute('style', 'color:white; background-color:#28282B');
    }
    for(i = 0; i < h3Tags.length; i++) {
        h3Tags[i].setAttribute('style', 'color:black');
    }
    for(i = 0; i < footerTag.length; i++) {
        footerTag[i].setAttribute('style', 'background-color:black');
    }

    document.body.classList.remove('lightMode');
    document.body.classList.add('darkMode');
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
        for(i = 0; i < headerTags.length; i++) {
            headerTags[i].setAttribute('style', 'background-color:white');
        }
        for(i = 0; i < buttonTags.length; i++) {
            buttonTags[i]. setAttribute('style', 'background-color:white');
            break;
        }
        for(i = 0; i < footerTag.length; i++) {
            footerTag[i].setAttribute('style', 'background-color:white');
        }
        for(i = 1; i < buttonTags.length; i++) {
            buttonTags[i]. setAttribute('style', 'background-color:black; color:white');
        }
        document.body.classList.remove('darkMode');
        document.body.classList.add('lightMode');
    }
});




