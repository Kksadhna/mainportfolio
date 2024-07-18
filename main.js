let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuicon.onclick=()=>{
    menuicon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active')
}
/*-----------scroll section active link---------*/

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
let git1=document.querySelector("#github").onclick=()=>{
    window.location.href="https://github.com/Kksadhna";
}
let linked=document.querySelector("#linkedin").onclick=()=>{
    window.location.href="https://www.linkedin.com/in/ritika-parashar-21a12b24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
}


window.onscroll=()=>
    {
        sections.forEach(sec => {
            let top=window.scrollY;
            let offset =sec.offsetTop - 150;
            let height=sec.offsetHeight;
            let id=sec.getAttribute('id');

            if(top >= offset && top <offset + height){
                navlinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };

    });
        /*----------------------sticky navbar-------------*/

        let header=document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 100);

        /*--------------------remove toggle icon and navbar----------*/

        menuicon.classList.remove('fa-xmark');
      navbar.classList.remove('active');

};

/*================scoll reveal================*/

ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading',{origin: 'top'});

ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form', {origin:'button'});

ScrollReveal().reveal('.home-contact h1, .about-img',{origin:'left'});
ScrollReveal().reveal()('.home-contact p, .about-content',{origin:'right'});

/*--------------------typed js--------------------------*/

const typed=new Typed('.multiple',{
    strings:['Frontend developer', 'UI/UX designer'],
    typeSpeed: 70,
    backSpeed:70,
    backDelay:1000,
    loop: true,
});