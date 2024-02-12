//Fetch Requests

function fetchShows(){
    const searchForm = document.getElementById('search-bar');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchInput = document.getElementById('search').value;
        fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
        .then(response => response.json())
        .then(shows => renderShows(shows))
    })
}
//Add Highlight to Card

function addHighlight(card) {
    card.style.borderColor = 'pink';
}

function removeHighlight(card) {
    card.style.borderColor = 'black';
}

//Render Shows

function renderShows(shows){
    const showCollection = document.getElementById('show-collection');
    shows.forEach(obj => {
        const card = document.createElement('div');
        card.className = 'card'; 
        card.innerHTML = `
        <img class= "card-img"src="${obj.show.image.original}" alt=""/>
        <h2>${obj.show.name}</h2>
        <h4>Network: ${obj.show.network.name}</h4>
        <h4>Genre: ${obj.show.genres}</h4>
        <h4>Rating: ${obj.show.rating.average}</h4>
        <button class="summary-btn">Summary ⌄</button>
        `;
        showCollection.appendChild(card);
        const summaryButton = card.querySelector('.summary-btn');
        summaryButton.addEventListener('click', () => {
            const summaryContainer = document.createElement('div');
            summaryContainer.className = 'summary-container'
            summaryContainer.innerHTML = `
            <p>${obj.show.summary}</p>
            `;
            card.appendChild(summaryContainer)
            
        })
        card.addEventListener('mouseover', () => {
            addHighlight(card);
        });

        card.addEventListener('mouseout', () => {
            removeHighlight(card);
        });

    })
}


//Invoking my function
fetchShows()