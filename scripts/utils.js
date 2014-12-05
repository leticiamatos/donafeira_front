Application = {
  init: function () {
    this.menuPosition();
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
