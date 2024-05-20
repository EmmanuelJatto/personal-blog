const signUpButton = document.getElementById('submit');
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

signUpButton.addEventListener('click', function() {
    event.preventDefault();

    const blog = {
        username: userName.value,
        title: title.value,
        content: content.value
    };

    localStorage.setItem('blog', JSON.stringify(blog));

    window.location.href = 'blog.html';
});

lightDarkModeButton.addEventListener('click', function() {
    if (lightDarkModeButton.textContent == '☀️') {
        const darkMode = '🌒';
        lightDarkModeButton.textContent = darkMode;

        for(i = 0; i < sectionTags.length; i++) {
            sectionTags[i].setAttribute('style', 'color:white; background-color:#28282B');
        }
        for(i = 0; i < headerTags.length; i++) {
            headerTags[i].setAttribute('style', 'color:white; background-color:#28282B');
        }
        for(i = 0; i < buttonTags.length; i++) {
            buttonTags[i]. setAttribute('style', 'background-color:#28282B');
            break;
        }
    }
    else {
        const lightMode = '☀️';
        lightDarkModeButton.textContent = lightMode;

        for(i = 0; i < sectionTags.length; i++) {
            sectionTags[i].setAttribute('style', 'color:black; background-color:white');
            // headerTags[i].setAttribute('style', 'color:black; background-color:white');
            buttonTags[i]. setAttribute('style', 'background-color:white');
        }
        for(i = 0; i < headerTags.length; i++) {
            headerTags[i].setAttribute('style', 'color:black; background-color:white');
        }
        for(i = 0; i < buttonTags.length; i++) {
            buttonTags[i]. setAttribute('style', 'background-color:white');
            break;
        }
        for (i = 1; i < buttonTags.length; i++) {
            buttonTags[i]. setAttribute('style', 'background-color:black');
        }
    }
});

goBack.addEventListener('click', function() {
    // history.go();
    console.log('Hello')
});
