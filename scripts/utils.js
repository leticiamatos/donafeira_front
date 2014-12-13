Application = {
  init: function () {
    this.menuResponsive();
    this.menuPosition();
    this.sizeCatList();
    this.btCadastre();
  },

  menuResponsive: function(){

    $(".button-menu").on("click", function(){
      $("#nav-user-responsive").css({
        right: "0"
      });
    });
    $("#close-menu").on("click", function(){
      $("#nav-user-responsive").css({
        right: "-100%"
      });
    });
  },

  menuPosition: function(){
    function sizeMenu(){
        var pHeader = $("#wrap-search").offset().left,
            flagSize = $("#wrap-flag").outerWidth();

        $("#wrap-flag").css({
            "min-width": (pHeader)  + "px"
        });
    }

    $(window).bind({
        resize: function(){
            sizeMenu();
        },
        load: function(){
            sizeMenu();
        }
    });

  },

  sizeCatList: function(){
    var cats = $(".cat"),
        catsLength = cats.length,
        catsWidth = cats.outerWidth(),
        catsMargin = parseInt(cats.css('margin-right'));

    $("#cat-list").css({
      width: (catsWidth*catsLength + (catsMargin*catsLength)) + "px"
    });
  },

  btCadastre: function(){
    $(".bt-cadastre").on("click", function(){
      $("#wrap-cadastre").stop(false,true).fadeIn(600);
      $("html,body").animate({
        scrollTop: $("#wrap-cadastre").offset().top + "px"
      },700);

      return false;
    });
  }

};

$(document).ready( function () { Application.init(); });
