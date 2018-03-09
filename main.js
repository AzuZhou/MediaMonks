
document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('load', function () {

        setTimeout(function () {
            document.getElementById("phrase").innerHTML = "Patience, young Padawan..."
        }, 2500)

        setTimeout(function () {
            document.getElementsByClassName("container")[0].style.display = "block"
            document.getElementsByClassName("loading")[0].style.display = "none"
            document.getElementsByClassName("path")[0].style.display = "flex"
        }, 3500)

        // document.getElementsByClassName("prev")[0].onclick = prevSlide;
        // document.getElementsByClassName("next")[0].onclick = nextSlide;

    })
})