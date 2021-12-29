
var btn_prev = document.querySelector(".btn_prev");
var btn_next = document.querySelector(".btn_next");
var images = document.querySelectorAll("img");

var i = 0;
console.log(images.length - 1);

// btn_next.addEventListener("click", () => {
//     images[i].style.display = "none";
//     i++;
//     if(i >= images.length){
//         i = 0
//     }
//     images[i].style.display = "block"
//     console.log(i);
// })

// btn_prev.addEventListener("click", () => {
//     images[i].style.display = "none";
//     i--;
//     if(i < 0){
//         i = images.length - 1
//     }
//     images[i].style.display = "block";
//     console.log(i);
// })

// OPACITYLI SLIDER
btn_next.addEventListener("click", () => {
    images[i].classList.remove("active")
    i++;
    if(i >= images.length){
        i = 0
    }
    images[i].classList.add("active")
    console.log(i);
})

btn_prev.addEventListener("click", () => {
    images[i].classList.remove("active")
    i--;
    if(i < 0){
        i = images.length - 1
    }
    images[i].classList.add("active")
    console.log(i);
})



// SETTIMOUT VA SETINTERVAL
// function some () {
//     alert("Salom gruppa")
// }
// setTimeout(some, 2000);


// setTimeout(function () {
//     alert("Hi My name is Shohrux");
// }, 2000)


// SETINTERVAL

// function sayhello () {
//     alert("Assalomu Alekum")
// }
// setInterval(sayhello, 1000)


function sayhello() {
    alert("bombani tuhtat")
}
var int = setInterval(sayhello, 2000)

setTimeout(function () {
    clearInterval(int)
    alert(boom)
}, 6000)

// let a = 0;
// let timer = setTimeout(function som () {
//     a++;
//     alert("Salom Dunyo" + a);
//     timer = setTimeout(som, 2000);
    
//     if(a === 3) {
//         clearInterval(timer)
//     }
// }, 2000)


