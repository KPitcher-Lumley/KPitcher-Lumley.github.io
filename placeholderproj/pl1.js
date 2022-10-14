

function Colorgreen()
{
    document.querySelector("#backColor").style.backgroundColor = "Green";
}

function gifAppear()
{
    const gif = "<img src='../images/fh5liftoff.gif' alt=jump>";

    document.querySelector("#gifDisp").innerHTML = "";
    document.querySelector("#gifDisp").innerHTML = gif;
}

function onLoad()
{
    document.querySelector("#makeGreen").onclick = Colorgreen;

    document.querySelector("#dispGIF").onclick = gifAppear;
}

window.onload = onLoad;