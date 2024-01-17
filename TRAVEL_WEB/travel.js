
const menubtn=document.querySelector("#menu-toggle-icon");
const navlist=document.querySelector("#nav-mobile");

menubtn.addEventListener("click",()=>{
    if (navlist.style.display=="none") {
        navlist.style.display="block";
    }
    else
    {
        navlist.style.display="none";
    }
})

// scroll