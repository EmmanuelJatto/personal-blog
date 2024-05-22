const rootEl = $('#root');
const h3Tags = $('h3');

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

loadFromLocalStorage();

