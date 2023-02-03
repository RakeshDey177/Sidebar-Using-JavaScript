let btn = document.querySelector("#btn");
let sidebar =document.getElementsByClassName("sidebar")[0];
let search =document.querySelector(".bx-search");

btn.addEventListener("click",function(){
    sidebar.classList.toggle("active");

})

search.addEventListener("click",function(){
    sidebar.classList.toggle("active");
})


