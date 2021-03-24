var typed = new Typed(".typing",{
    strings:["Developer.","Freelencer.","Designer."],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

$(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
})