var slideIndex = 0;

var timer;

const shelfimgs = [
    "./images/Front.png",
    "./images/Right.png",
    "./images/Back.png",
    "./images/Left.png"
]

$( document ).ready(function() {
    slideIndex = 0;
    adiosSlide();

});

function adiosImgset()
{
    $("#adiosimg").attr("src",shelfimgs[slideIndex]);
    
    if((slideIndex + 1) > 3)
    {
        slideIndex = 0;
    }
    else
    {
        slideIndex += 1;
    }
}

function adiosSlide()
{
    timer = setInterval(adiosImgset, 1700);
}