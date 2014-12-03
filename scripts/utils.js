Application = {
  init: function () {
    this.menuPosition();
    this.cart();
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

  cart: function(){
    $("#wrap-cart").on('click', function(){
        var self = $(this);

        if($("#cart").hasClass("active")){
            console.log(0)
            $("#cart").removeClass('active');
            $("#wrap-itens-cart").animate({
                opacity: '0',
                bottom: "400px"
            },200);
        }else{
            $("#cart").addClass('active');
            $("#wrap-itens-cart").animate({
                opacity: '1',
                bottom: "-" + ($("#header").outerHeight() - 75) + "px"
            },700);
        }
    });
  }

};

$(document).ready( function () { Application.init(); });
