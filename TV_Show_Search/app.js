const form = document.querySelector('#searchForm');
form.style.padding = '0rem 0rem 2rem 0rem';
const displaySection = document.querySelector('#displaySection');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.searchValue.value;
    const config = { params: { q: searchTerm }, headers: {} }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    try { makeImages(res.data); }
    catch (error) {
        displaySection.innerText = error + ' Invalid Search Query. Try Again With A New Query!'
        displaySection.style.fontWeight = '700';
        displaySection.style.color = 'red';
    }
    form.elements.searchValue.value = '';
})

const makeImages = (shows) => {
    displaySection.innerHTML = '';
    if (shows.length == 0) {
        throw 'No Search Result.';
    }
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium
            img.style.padding = "1rem 1rem 0rem 0rem";
            displaySection.append(img);
        }
    }
}