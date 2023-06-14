const getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => displayData(data))
}

// const displayData = users => {
//     const show = document.querySelector('.show')
//     for(const user of users){
//         const li = document.createElement('ol')
//         li.innerText = user.name;
//         show.appendChild(li);
//     }
// }

const displayData = users => {
    const show = document.querySelector('.show')
    for(const user of users){
        const li = document.createElement('div')
        li.innerHTML = `
            <p>Id: ${user.id}</p>
            <h3>Name: ${user.name}</h3>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.city}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Company: ${user.company.name}</p>
        `;
        show.appendChild(li);
    }
}