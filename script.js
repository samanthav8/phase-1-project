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

//

function renderShows(shows){
    const showCollection = document.getElementById('show-collection');

    shows.forEach(obj => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <h2>${obj.show.name}</h2>
        <h4>${obj.show.network.name}</h4>
        <h4>${obj.show.genres}</h4>
        <h4>${obj.show.rating.average}</h4>
      
        `;
        showCollection.appendChild(card);
    })
}

//Invoking my function
fetchShows()