
// const moviesSpoilers = [
//     {
//         'title': 'The Good, the Bad and the Ugly',
//         'imgSrc': 'https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg',
//         'spoiler': 'xxx'
//     },
//     {
//         'title': ' Django Unchained',
//         'imgSrc': 'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg',
//         'spoiler': 'Django (Jamie Foxx) is freed from slavery by a German bounty hunter (Christoph Waltz). Together they kill the men who had sold Django and his wife to separate slave traders.'
//     },
//     {
//         'title': 'Once Upon a Time in the West',
//         'imgSrc': 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_FMjpg_UX1000_.jpg',
//         'spoiler': 'The “twist” ending is a happy one, of course. In this alternate universe, Tate gets to raise her child; her friends will enjoy long lives; Hollywood’s innocence won’t be shattered, at least for a while longer. Plus, we all were treated to the singular catharsis of watching the brutality that the Manson crew became synonymous with get turned back around on them.'
//     },
//     {
//         'title': 'For a Few Dollars More',
//         'imgSrc': 'https://m.media-amazon.com/images/M/MV5BZDJjMjM0ZGQtNzdlNS00MTRhLTg3OTYtZDc3OTgwN2Y2OGQ1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg',
//         'spoiler': 'xxxxxx'
//     },
//     {
//         'title': 'Unforgiven',
//         'imgSrc': 'https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
//         'spoiler': 'xxxxxxx'
//     },
//     {
//         'title': 'The Treasure of the Sierra Madre',
//         'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/1/1d/The_Treasure_of_the_Sierra_Madre_%281947_poster%29.jpg',
//         'spoiler': 'xxxxxxx'
//     },
//     {
//         'title': 'The Gold Rush',
//         'imgSrc': 'https://m.media-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
//         'spoiler': 'xxxxxxxxx'
//     },
//     {
//         'title': 'Dances with Wolves',
//         'imgSrc': 'https://m.media-amazon.com/images/M/MV5BMTY3OTI5NDczN15BMl5BanBnXkFtZTcwNDA0NDY3Mw@@._V1_FMjpg_UX1000_.jpg',
//         'spoiler': 'xxxxxxx'
//     },
//     {
//         'title': 'Sholay',
//         'imgSrc': 'https://m.media-amazon.com/images/M/MV5BNDQ3ODYyOWYtYTkwNC00ZThhLTlkMzItYWMwODFhMmJhOGFlXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
//         'spoiler': 'xxxxxxx'
//     },
//     {
//         'title': 'The Man Who Shot Liberty Valance',
//         'imgSrc': 'https://m.media-amazon.com/images/M/MV5BMGEyNzhkYzktMGMyZS00YzRiLWJlYjktZjJkOTU5ZDY0ZGI4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_FMjpg_UX1000_.jpg',
//         'spoiler': 'xxxxxxxxx'
//     }
// ]

// const $sliderSection = $('.slider')
// const $sliderList = $('.slider-list')
// const $prevBtn = $('.prev')
// const $nextBtn = $('.next')
// let index = 1

// const $slide1 = $('.slide1')
// const $slide2 = $('.slide2')
// const $slide3 = $('.slide3')

// const $spoilerSection = $('.spoiler-section')
// const $h3Spoiler = $('#h3-spoiler')
// const $btnShowSpoiler = $('#btn-spoiler')
// const $spoilerText = $('#p-spoiler')


// // $.each(moviesSpoilers, function(index, value ) {
// //     $sliderList.append(`<p>${index} ${value.title}</p>`)
// // })




// //display slider section with an animation
// $sliderSection.hide(300).slideDown(1000)
// //function to display movies
// function displayMovie() {
    
//     $sliderList.html('')
//     $sliderList.html(
//         `
//             <div class="movie-slide">
//                 <p>${moviesSpoilers[index - 1].title}</p>
//                 <img src="${moviesSpoilers[index - 1].imgSrc}">
//             </div>
//             <div class="movie-slide important-slide">
//                 <p>${moviesSpoilers[index].title}</p>
//                 <img src="${moviesSpoilers[index].imgSrc}">
//             </div>
//             <div class="movie-slide">
//                 <p>${moviesSpoilers[index + 1].title}</p>
//                 <img src="${moviesSpoilers[index + 1].imgSrc}">
//             </div>
//         `
//     )
//     updateSpoilerSection()
// }

// //event for the prev-btn to display previous movies
// function prevMovie() {
//     $prevBtn.on('click',()=> {
//         if ( index  === 1) {
//             index = 8
//         } else {
//             index--
//         }
//         displayMovie()
//     })
// }

// //event for the next-btn to display next movies
// function nextMovie() {
//     $nextBtn.on('click',()=> {
//         if ( index === moviesSpoilers.length - 2 ) {
//             index = 1
//         } else {
//             index++
//         }
//         displayMovie()
//     })
// }





// function updateSpoilerSection() {
//     $h3Spoiler.html(`Click the buttom to see the spoiler for <span id="span-spoiler"> ${moviesSpoilers[index].title}</span>`).slideDown(1000);
//     $spoilerText.text(moviesSpoilers[index].spoiler).hide()

//     $btnShowSpoiler.on('click', ()=>{
//         $spoilerText.show(2000)
//     })
// }




// displayMovie()
// prevMovie()
// nextMovie()














// <div class="slider">
//         <ul class="slider-list">
//             <!-- jQuery -->
//             <li class="movie-slide slide1">
//                 <p>The Good, the Bad and the Ugly</p>
//                 <img src="https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg">
//             </li>
//             <li class="movie-slide slide2">
//                 <p>The Good, the Bad and the Ugly</p>
//                 <p id="imbd-rating">IMBD Rating - 9.5</p>
//                 <img src="https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg">
//             </li>
//             <li class="movie-slide slide3">
//                 <p>The Good, the Bad and the Ugly</p>
//                 <img src="https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg">
//             </li>
//          </ul>

//         <button id="prev" class="change-slides"> <i class="fa-solid fa-arrow-left"></i> </button>
//         <button id="next" class="change-slides"> <i class="fa-solid fa-arrow-right"></i> </button>
//</div>


//     <div class="spoiler-section">
//         <h3 class="" id="h3-spoiler">Click the buttom to see the spoiler for <span id="current-movie">Good and the bad guy</span> </h3>
//         <button id="btn-spoiler"> <i class="fa-solid fa-arrow-down"></i> Show spoiler <i class="fa-solid fa-arrow-down"></i> </button>
//         <p id="p-spoiler">The “twist” ending is a happy one, of course. In this alternate universe, Tate gets to raise her child; her friends will enjoy long lives; Hollywood’s innocence won’t be shattered, at least for a while longer. Plus, we all were treated to the singular catharsis of watching the brutality that the Manson crew became synonymous with get turned back around on them.</p>
//     </div>




const ulSliderList = document.querySelector('.slider-list')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

const spanCurrentMovieName = document.querySelector('#current-movie')
const btnShowSpoiler = document.querySelector('#btn-spoiler')
const spoilerText = document.querySelector('#p-spoiler')

spoilerText.style.display = 'none'
let newArr = []

$.getJSON( 'js/movies.json', (movies) => {

    

    movies.unshift(movies[movies.length - 1])
    movies.push(movies[1])

    // console.log(movies[1])
    // console.log(movies)
    // console.log(movies.length)

    let index = 0
    newArr = movies
    // console.log('edi')
    console.log(newArr)


    function displayMoviesSlides() {
        for ( let i = index; i < index+3; i ++) {
            ulSliderList.innerHTML += 
            `
            <li class="movie-slide">
                <p>${newArr[i].title}</p>
                <img src="${newArr[i].imgSrc}" alt="${newArr[i].imgSrc}">
            </li>
            `
        }
        //add class style for center movie
        let li = document.querySelectorAll('li')
        li[1].classList.add('slide2')
    }
    displayMoviesSlides()
    showSpoiler()

    

    prevBtn.addEventListener('click', () => {
        console.log(index)
        index --
        console.log(index)
        if ( index === -1) {
            index = 9
        }
        console.log(index)
        ulSliderList.innerHTML = ''
        displayMoviesSlides()
        spoilerText.style.display = 'none'
    })

    nextBtn.addEventListener('click', () => {
        index++
        if ( index === 10) {
            index = 0
        }
        ulSliderList.innerHTML = ''
        displayMoviesSlides()
        spoilerText.style.display = 'none'        
    })



    function showSpoiler() {
        btnShowSpoiler.addEventListener('click', () => {
            spoilerText.textContent = `${newArr[index+1].spoiler}`;
            spoilerText.style.display = 'block'
        })
    }



})


let a 
function bar(b) {
    console.log(a)
}
function foo(){
    const a = 7 
    bar(9)
}

console.log(foo())

