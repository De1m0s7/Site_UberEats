function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Кнопка при скроле наверх
$(window).scroll(function () {
  let scrolled = $(window).scrollTop();
  if(scrolled > 600) {
    $('.btn-top').addClass('active');
  } else {
    $('.btn-top').removeClass('active');
  }
});
$('.btn-top').click(function () {
  $('body,html').animate({scrollTop:0}, 1000)
});