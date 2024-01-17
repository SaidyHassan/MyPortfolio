const menu=document.querySelector("#menu-btn");
const list=document.querySelector("#nav-small");

menu.addEventListener('click', () =>
{
    if(list.style.display=="none")
    {
        list.style.display="block";
    }
    else{
        list.style.display="none";
    }
})

