$(document).ready(function() {             
    $('#loginModal').modal('show');
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    });
    const element = document.getElementsByClassName("product group item");
    element.addEventListener("mouserover", myFunction);
    
    function myFunction() {
      document.getElementsByClassName(this).style.display = "none"
    }