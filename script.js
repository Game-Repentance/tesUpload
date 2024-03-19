const text = document.querySelector(".text__second");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Blogger";
    }, 4000);
    setTimeout(() => {
        text.textContent = "YouTuber";
    }, 8000); // 1s = 1000 milliseconds
}
textLoad();
setInterval(textLoad, 12000);