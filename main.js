document.getElementById('search-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('search-input').ariaValueMax;
    const apiKey = 'FSyEmnPbhNQmyLUGJRWirAgWeiFaxsQm';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}api_key=${FSyEmnPbhNQmyLUGJRWirAgWeiFaxsQm}&limit=25`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const gifResultsDiv = document.getElementById('gif-results');
        gifResultsDiv.innerHTML = '';

        data.data.forEach(gif => {
            const img = document.createElement('img');
            img.scr = gif.images.fixed_height.url;
            img.alt = gif.title;
            gifResultsDiv.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching GIFS:', error);
        gifResultsDiv.innerHTML = '<p>Error loading GIFS. Please try again.</p>';
    }
});