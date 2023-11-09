let openButton = document.querySelector(".openButton");
let wrapper = document.querySelector(".wrapper");
let body = document.querySelector(".body");
let close = document.querySelector(".close");

openButton.addEventListener("click", ()=>{
    openButton.style.display="none";
    wrapper.style.display="block";
    body.style.backgroundColor="#222"
});

close.addEventListener("click", ()=>{
    openButton.style.display="block";
    wrapper.style.display="none";
    body.style.backgroundColor="#999"
})