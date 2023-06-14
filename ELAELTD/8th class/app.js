// const data = document.getElementById('paragraph-section');
// data.style.background = 'black';
// data.style.color = '#fff';
// data.style.height = '200px';
// data.style.width = '200px';
// data.style.textAlign = 'center';
// data.style.padding = '10px';


// hello.style.background = '#000';
// hello.style.color = '#fff';
// hello.style.height = '200px';
// hello.style.width = '200px';
// hello.style.textAlign = 'center';
// hello.style.padding = '10px';

const players = document.getElementsByClassName('player');
for(const player of players){
    console.log(player);
    player.style.border = '1px solid red';
    player.style.borderRadius = '10px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}

function addPlayer(){
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
        <h4>New Player</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam incidunt laboriosam labore laudantium, in non nobis, iusto consequatur enim molestiae deleniti nostrum facere id quod cumque at praesentium dolore quas!</p>
    `;
    playerContainer.appendChild(player);
}

document.getElementById('players').addEventListener('click', function(event){
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.background = '#eee';
    }
    else{
        event.target.parentNode.style.background = '#eee';
    }
})