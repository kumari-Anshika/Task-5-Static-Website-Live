// MelodyX Music Player

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const progressBar = document.querySelector(".progress input");
const volumeBar = document.querySelector(".volume input");

const songTitle = document.querySelector(".song-info h4");
const artist = document.querySelector(".song-info p");
const cover = document.querySelector(".song-info img");

// Playlist

const songs = [

{
    title:"Night Beats",
    artist:"DJ Nova",
    image:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300"
},

{
    title:"Summer Vibes",
    artist:"Olivia",
    image:"https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300"
},

{
    title:"Lo-Fi Cafe",
    artist:"Relax Studio",
    image:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300"
},

{
    title:"Rock World",
    artist:"The Rockers",
    image:"https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300"
}

];

let currentSong = 0;
let isPlaying = false;

// Load Song

function loadSong(index){

    songTitle.textContent = songs[index].title;

    artist.textContent = songs[index].artist;

    cover.src = songs[index].image;

}

loadSong(currentSong);

// Play / Pause

playBtn.addEventListener("click",()=>{

    if(!isPlaying){

        playBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

        isPlaying = true;

    }

    else{

        playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

        isPlaying = false;

    }

});

// Next Song

nextBtn.addEventListener("click",()=>{

    currentSong++;

    if(currentSong >= songs.length){

        currentSong = 0;

    }

    loadSong(currentSong);

});

// Previous Song

prevBtn.addEventListener("click",()=>{

    currentSong--;

    if(currentSong < 0){

        currentSong = songs.length-1;

    }

    loadSong(currentSong);

});

// Progress Bar Animation

let progress = 30;

setInterval(()=>{

    if(isPlaying){

        progress++;

        if(progress > 100){

            progress = 0;

            currentSong++;

            if(currentSong >= songs.length){

                currentSong = 0;

            }

            loadSong(currentSong);

        }

        progressBar.value = progress;

    }

},500);

// Volume

volumeBar.addEventListener("input",()=>{

    console.log("Volume : " + volumeBar.value);

});

// Album Play Buttons

const albumButtons = document.querySelectorAll(".card button");

albumButtons.forEach((button,index)=>{

    button.addEventListener("click",()=>{

        currentSong = index;

        loadSong(currentSong);

        isPlaying = true;

        playBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

        progress = 0;

    });

});

// Recently Played

const recentSongs = document.querySelectorAll(".song");

recentSongs.forEach((song,index)=>{

    song.addEventListener("click",()=>{

        currentSong = index;

        loadSong(currentSong);

        progress = 0;

        isPlaying = true;

        playBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    });

});

// Banner Button

const startBtn = document.querySelector(".banner button");

startBtn.addEventListener("click",()=>{

    alert("🎵 Welcome to MelodyX!\nEnjoy your music experience.");

});

// Search

const search = document.querySelector(".search input");

search.addEventListener("keyup",()=>{

    let value = search.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card=>{

        let title =
        card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(value)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

});

// Sidebar Active Menu

const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item=>{

    item.addEventListener("click",()=>{

        menuItems.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

    });

});

console.log("MelodyX Loaded Successfully 🎵");