
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



// $.getJSON ( 'js/movies.json', (items)=> {
//         console.log(items[1].title)
//         console.log($(items))
// })
