let sidenav=document.querySelector('.side-navbar');
let navbartoggle=document.querySelector('.navbar-toggle');
let x_mark=document.querySelector('.x-mark');

navbartoggle.addEventListener('click',()=>
    {
        sidenav.style.left="0"
    })

    x_mark.addEventListener('click',()=>
        {
            sidenav.style.left="-40%"
        })