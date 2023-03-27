const mobile = document.querySelector(".mobileImg")
const dropdown = document.querySelector(".mobile-log")
const close = document.querySelector(".close")

mobile.addEventListener("click",function(e){
    if (dropdown.classList.contains("show")){
        dropdown.classList.remove("show")
    }
    else{
        dropdown.classList.add("show")
    }
})
close.addEventListener("click",function(e){
    if (dropdown.classList.contains("show")){
        dropdown.classList.remove("show")
    }
    else {
        dropdown.classList.add("show")
    }
});