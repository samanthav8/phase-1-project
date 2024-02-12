//Fetch Requests

function fetchShows(){
    //Grab Search Bar Element
    const searchForm = document.getElementById('search-bar');
    //Add event listener to the search form 
    searchForm.addEventListener('submit', (event) => {
        //preventDefault so that the page doesnt refresh
        event.preventDefault();
        //Grab the input of the search
        const searchInput = document.getElementById('search').value;
        //Fetch data from API
        fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
        .then(response => response.json())
        //Show data is then used to render shows
        .then(shows => renderShows(shows))
    })
}
//Add Border Highlight to Card

function addHighlight(card) {
    card.style.borderColor = 'pink';
}
//Remove Border Highlight on Card
function removeHighlight(card) {
    card.style.borderColor = 'black';
}

//Render Shows
function renderShows(shows){
    //Grab the show-collection container
    const showCollection = document.getElementById('show-collection');
    //Iterate through each show
    shows.forEach(obj => {
        //Create card element + give it a class name
        const card = document.createElement('div');
        card.className = 'card'; 
        //Add text, + images to each card + create button element
        card.innerHTML = `
        <img class= "card-img"src="${obj.show.image.original}" alt=""/>
        <h2>${obj.show.name}</h2>
        <h4>Network: ${obj.show.network.name}</h4>
        <h4>Genre: ${obj.show.genres}</h4>
        <h4>Rating: ${obj.show.rating.average}</h4>
        <button class="summary-btn">Summary ⌄</button>
        `;
        //Append cards to the show collection container
        showCollection.appendChild(card);
        //Grab the summary button
        const summaryButton = card.querySelector('.summary-btn');
        //Add an event listener to the summary button to get show summary data
        summaryButton.addEventListener('click', () => {
            //Create summary container + give it a class name
            const summaryContainer = document.createElement('div');
            summaryContainer.className = 'summary-container'
            //Adding summary to the summary container
            summaryContainer.innerHTML = `
            <p>${obj.show.summary}</p>
            `;
            //Append the summary container on card 
            card.appendChild(summaryContainer)
            
        })
        //Mouse over event to add the highlight color
        card.addEventListener('mouseover', () => {
            addHighlight(card);
        });
        //Mouse out event to remove the highlight color
        card.addEventListener('mouseout', () => {
            removeHighlight(card);
        });

    })
}


//Invoking my function
fetchShows()