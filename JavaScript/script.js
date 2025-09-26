
// document.getElementById("about").style.display = "none"


function about(){
    document.getElementById("contact").style.display = "none"
    document.getElementById("task").style.display = "none"

    document.getElementById("display").innerHTML = `
    <p>This is about me.</p>
    <button onclick="back()">Back</button>
    `

}


function back() {
    document.getElementById("contact").style.display = "block"
    document.getElementById("task").style.display = "block"
    document.getElementById("about").style.display = "block"

}

function contact(){
    document.getElementById("about").style.display = "none"
    document.getElementById("task").style.display = "none"

    document.getElementById("display").innerHTML = `
    <p>Contact me on 123456789.</p>
    <button onclick="back()">Back</button>
    `

}

function task(){
    document.getElementById("contact").style.display = "none"
    document.getElementById("about").style.display = "none"

    document.getElementById("display").innerHTML = `
    <p>HTML
    CSS
    PYTHON.</p>
    <button onclick="back()">Back</button>
    `
}