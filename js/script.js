//slider section
const ulSliderList = document.querySelector('.slider-list')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
//spoiler sectiom
const spanCurrentMovieName = document.querySelector('#current-movie')
const btnShowSpoiler = document.querySelector('#btn-spoiler')
const spoilerText = document.querySelector('#p-spoiler')
//hidding button-for-spoilr and creating a new array
spoilerText.style.display = 'none'
let newArr = []




$.getJSON( 'js/movies.json', (movies) => {

    //adding last item to the beggining of array ... and first item to the end of array
    movies.unshift(movies[movies.length - 1])
    movies.push(movies[1])

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
        changeMiddleLi()
    }

    //add class style for center movie
    //add the IMBD rate for movie
    function changeMiddleLi() {
        let li = document.querySelectorAll('li')
        li[1].classList.add('slide2')
        li[1].innerHTML = 
        `
            <p>${newArr[index+1].title}</p>
            <p>${newArr[index+1].imbdRate}</p>
            <img src="${newArr[index+1].imgSrc}" alt="${newArr[index+1].imgSrc}">
        `
    }

    //show current movie name in the paragraph before button 'Show spoiler'
    function showCurrentMovieTittle() {
        spanCurrentMovieName.textContent = newArr[index+1].title
    }

    //btn show-spoiler
    function showSpoiler() {
        btnShowSpoiler.addEventListener('click', () => {
            spoilerText.textContent = newArr[index+1].spoiler;
            spoilerText.style.display = 'block'
        })
    }
    

    //event listener on click for prev button to display previous movie
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
        showCurrentMovieTittle()
        spoilerText.style.display = 'none'
    })

    //event listener on click for next button to display next movie
    nextBtn.addEventListener('click', () => {
        index++
        if ( index === 10) {
            index = 0
        }
        ulSliderList.innerHTML = ''
        displayMoviesSlides()
        showCurrentMovieTittle()
        spoilerText.style.display = 'none'        
    })


    displayMoviesSlides()
    showSpoiler()
    showCurrentMovieTittle()
})

