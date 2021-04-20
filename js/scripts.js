$(document).ready(function () {
    $('.mobilmenu').click( function ()
            {
                console.log("rákattint");
        $('.menupont').toggleClass("menunyit");
                
            });
        
    $('.almenu').click(function () {
        document.getElementById("myDropdown").classList.toggle("menunyit");
        window.onclick = function (event) {
            if (!event.target.matches('.almenu')) {
                var dropdowns = document.getElementsByClassName("lenyillomenu");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('menunyit')) {
                        openDropdown.classList.remove('menunyit');
                    }
                }
            }
        }
    });
    
$(function() {
  $(".img-w").each(function() {
    $(this).wrap("<div class='img-c'></div>")
    let imgSrc = $(this).find("img").attr("src");
     $(this).css('background-image', 'url(' + imgSrc + ')');
  })
            
  
  $(".img-c").click(function() {
    let w = $(this).outerWidth()
    let h = $(this).outerHeight()
    let x = $(this).offset().left
    let y = $(this).offset().top
    
    
    $(".active").not($(this)).remove()
    let copy = $(this).clone();
    copy.insertAfter($(this)).height(h).width(w).delay(500).addClass("active")
    $(".active").css('top', y - 8);
    $(".active").css('left', x - 8);
    
      setTimeout(function() {
    copy.addClass("positioned")
  }, 0)
    
  }) 
  
  

  
})

$(document).on("click", ".img-c.active", function() {
  let copy = $(this)
  copy.removeClass("positioned active").addClass("postactive")
  setTimeout(function() {
    copy.remove();
  }, 500)
});
    
    $('#Rgomb').click( function ()
            {
                var dots =  $('.galeria').css("max-height");
  var btnText = document.getElementById("Rgomb");
        var pointNum = parseFloat(dots);
  console.log(pointNum);
  if (pointNum <= 500) {
      btnText.innerHTML = "kevesebb";
    $('.galeria').css("max-height","5000px");
     
  } else {
    
    btnText.innerHTML = "még több";
      $('.galeria').css("max-height","500px");
  }

                
            });
    
    
});
