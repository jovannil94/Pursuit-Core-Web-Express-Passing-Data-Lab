let pixyKey = "14881651-1e1228a1f06e5912049e890d8"
let gifKey = "eZzQ4D3kLuqDmPlQUgDqmlD9dGc4JZl1"
document.addEventListener("DOMContentLoaded", () => {
    setSearch()
    setGif()
})

const setSearch = () => {
    let imageSearch = document.querySelector("#imageSearch");
    imageSearch.addEventListener("click", displayImage);
} 

const setGif = () => {
    let imageSearch = document.querySelector("#gifSearch");
    imageSearch.addEventListener("click", displayGifs);
} 
const displayImage = async () => {
    let input = document.querySelector("input").value;
    try{
        let res = await axios.get(`http://localhost:3000/images/?q=${input}`)
        console.log(res)
        res.data.hits.forEach(pic =>{
            let div = document.querySelector("#pics");
            let image = document.createElement("img");
            image.src = pic.largeImageURL;
            div.appendChild(image);
        })
    } catch(err) {
        console.log(err)
    }
}

const displayGifs = async () => {
    let input = document.querySelector("input").value;
    try{
        let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${input}&limit=6&offset=0&rating=G&lang=en`);
        res.data.data.forEach(gifs =>{
            let div = document.querySelector("#pics");
            let image = document.createElement("img");
            image.src = gifs.images.downsized.url;
            div.appendChild(image);
        })
    } catch(err) {
        console.log(err)
    }
}