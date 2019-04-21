window.onscroll = function() {myFunction()};

var navbar = document.getElementById("menubar");
var sticky = navbar.offsetTop+220;
var news = document.getElementById("news-rb");
var footer = document.getElementById("footer");
var sticky1 = news.offsetTop+220;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    if (window.pageYOffset >= sticky1) {
        news.classList.add("sticky1")
    } else {
        news.classList.remove("sticky1");
    }
}


$(document).ready(function(){
    $("header").load('header.html header');
    $(".slide").load('slide.html .slide-page');
    $("#myModal").load('form.html #myLg');
    $(".footer11").load('footer.html #footer1'); 

    var num = parseInt(document.getElementById('num-buy').innerText);
    var product = document.getElementsByClassName('product');
    $(".btn-buy").click(function(){
        num = num + 1;
        document.getElementById('num-buy').innerText = num;
        var nProduct = parseInt($(this).attr('id'));
        document.getElementById('product').innerText = product[nProduct].innerText;
        document.getElementById('count').innerText = num;
    });
    
    $("#fa-bars").click(function(){
        $(".area-menu").slideToggle();        
    });
    
});