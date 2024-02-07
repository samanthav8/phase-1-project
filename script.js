//Fetch Requests

function fetchShows(){
    const searchForm = document.getElementById('search-bar');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchInput = document.getElementById('search').value;
        fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
        .then(response => response.json())
        .then(data => console.log(data))
    })
}

//Invoking my function
fetchShows()