const rootEl = $('#root');
const h3Tags = $('h3');

//Changes the string from local storage back to an object, and appends it to the rootEl for every different input the user gives
function loadFromLocalStorage() {
    const blogData = JSON.parse(localStorage.getItem('blog'));

    for(i = 0; i < blogData.length; i ++) {
    const newSection = $('<section>');
    newSection.addClass('new-container');
    rootEl.append(newSection);
    newSection.append(`
    <h3 class="blog-post-title">${blogData[i].title}</h3>
    <p class="blog-post-text">${blogData[i].content}</p>
    <h4 class="blog-post-tag">Posted by: ${blogData[i].username}</h4>
    `);
    }
}

//Runs the function
loadFromLocalStorage();

