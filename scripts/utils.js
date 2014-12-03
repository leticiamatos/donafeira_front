Application = {
  init: function () {
    this.menuPosition();
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

  }
};

$(document).ready( function () { Application.init(); });
