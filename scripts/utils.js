Application = {
  init: function () {
    this.menuPosition();
    this.cart();
    this.sizeCatList();
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
            $("#cart").removeClass('active');
            $("#wrap-itens-cart").animate({
                opacity: '0'
            },200).css({
                bottom: "400px"
            });
        }else{
            $("#cart").addClass('active');
            $("#wrap-itens-cart").css({
                bottom: "-" + ($("#header").outerHeight() - 75) + "px"
            }).animate({
                opacity: '1'
            },400);
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
  }

};

$(document).ready( function () { Application.init(); });
