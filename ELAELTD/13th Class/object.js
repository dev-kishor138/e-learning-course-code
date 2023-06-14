

function clickMe(){
    const persons = {
        name:{
            first: 'Jhon',
            last: 'Abraham'
        },
        address:{
            strret: "Kallyanpur",
            postCode: 78
        },
        qualification:{
            basic: 'web Design',
            inter: 'web Development',
            higher: 'Full stack developer'
        }
    }
    const show = document.querySelector('.show');
    const div = document.createElement('div');
    div.innerHTML = `
        <h4>Name: ${persons.name.first} ${persons.name.last}</h4>
        <p>Address: ${persons.address.strret}</p>
    `;
    show.appendChild(div);
}
