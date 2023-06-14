const getData =() =>{
    url = `https://jsonplaceholder.typicode.com/posts`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}

getData();

const displayData = posts => {
    // console.log(posts);
    const displayContainer = document.querySelector('.row');
    posts.forEach(post => {
        // console.log(post);
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML = `
                <div class="card">
                    <img src="https://picsum.photos/200/300" class="card-img-top" height="200px" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
        `;
        displayContainer.appendChild(div);
    });
}