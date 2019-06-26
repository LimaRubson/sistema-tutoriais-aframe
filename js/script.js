document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
    }, 2000);
    setTimeout(function() {
        document.getElementsByClassName("loader-line")[0].style.display = "none";
        document.getElementsByClassName("style-horizontal-line")[0].style.display = "block";
    }, 5000);
    console.log("DOM completamente carregado e analisado");
});
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

document.getElementById("tutorial1").addEventListener("click", function() {
    modal.style.display = "block";
});
document.getElementById("tutorial2").addEventListener("click", function() {
    modal.style.display = "block";
});
document.getElementById("tutorial3").addEventListener("click", function() {
    modal.style.display = "block";
});
document.getElementById("tutorial4").addEventListener("click", function() {
    modal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for(var i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if(txtValue.toLocaleUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
