const colors = ["green", "red", "rgba(133,124,222)", "#f15025"];

const btn = document.getElementById("btn"  );

const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    // get random number  between 0-3 colorers[3]
    const randomNumb = getRandomNumber();
    console.log(randomn);

    document.body.style.backgroundColor = colors[randomNumb];
    color.textContent = colors[randomNumb];
});

function getRandomNumber() {
    return Math.floor(Math.random() *colors.length)  ;
}
