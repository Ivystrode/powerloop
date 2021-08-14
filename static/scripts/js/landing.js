var aboutButton = document.querySelector('.about-button')
var aboutContent = document.querySelector('.about-content')
var introContent = document.querySelector('.intro-content')

aboutButton.addEventListener("click", function(){
    if (aboutContent.style.display !== 'block'){
        console.log("ABOUT SHOW")
        aboutContent.style.display = 'block'
        introContent.style.top = '-35%'
    }
    else if (aboutContent.style.display === 'block'){
        console.log("ABOUT HIDE")
        aboutContent.style.display = 'none'
        introContent.style.top = '-40%'

    }

})