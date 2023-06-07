document.getElementById("submit").onclick = () => {
    let result = document.getElementById("result");
    let num1 = parseInt(document.getElementById("num1").value);
    console.log(num1);
    let num2 = parseInt(document.getElementById("num2").value);
    console.log(num2);
    let sum = 0;
    if (isNaN(num1) || isNaN(num2)) {
        result.style.color = "red";
        result.innerHTML = "Please, enter numbers only.";
    }
    else {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
        result.style.color = "green";
        result.innerHTML = sum;
    }
}
let box = document.getElementById("box");
let enlargebtn = document.getElementById("enlarge");
let shrinkbtn = document.getElementById("shrink");

enlargebtn.onclick = () => {
    if (box.offsetWidth < window.innerWidth && box.offsetHeight < window.innerHeight)
    {
        box.style.width = `calc(${box.offsetWidth}px + 10vw)`;
        box.style.height = `calc(${box.offsetHeight}px + 10vh)`;
        shrinkbtn.style.color = "#666600";
        shrinkbtn.style.backgroundColor = "#ffffcc";
    }
    if (box.offsetWidth >= window.innerWidth || box.offsetHeight >= window.innerHeight)
    {
        enlargebtn.style.color = "#888888";
        enlargebtn.style.backgroundColor = "#dddddd";
    }
}

shrinkbtn.onclick = () => {
    if (box.offsetWidth > window.innerWidth * 0.3 && box.offsetHeight > window.innerHeight * 0.3)
    {
        box.style.width = `calc(${box.offsetWidth}px - 10vw)`;
        box.style.height = `calc(${box.offsetHeight}px - 10vh)`;
        enlargebtn.style.color = "#006600";
        enlargebtn.style.backgroundColor = "#ccffcc";
    }
    if (box.offsetWidth <= window.innerWidth * 0.3 || box.offsetHeight <= window.innerHeight * 0.3)
    {
        shrinkbtn.style.color = "#888888";
        shrinkbtn.style.backgroundColor = "#dddddd";
    }
}