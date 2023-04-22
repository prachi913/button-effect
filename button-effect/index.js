let btne = document.querySelector(".btn")

btne.addEventListener("mouseover", (event) => {
    // console.log(ev)
    const x = (event.pageX - btne.offsetLeft)
    const y = (event.pageY - btne.offsetTop);
    btne.style.setProperty("--xPos", x + "px")
    btne.style.setProperty("--yPos", y + "px");
})