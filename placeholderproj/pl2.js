

function text()
{
    alert(document.querySelector("#inptext").value);
}

function onLoad()
{
    document.querySelector("#dispText").onclick = text;
}

window.onload = onLoad;