window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("Navbar").style.top = "0";
    } else {
        document.getElementById("Navbar").style.top = "-50px";
    }
}
