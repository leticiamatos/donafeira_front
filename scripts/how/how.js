ApplicationHow = {
  init: function () {
    this.linkHow();
  },

  linkHow: function(){
    // click cart icon
    $(".links-how a").on("click", function(){
        var self = $(this),
            selfTitle = self.text(),
            selfDesc = self.data("desc"),
            selfIdpass = self.data("idpass"),
            elemPoint = $("#"+selfIdpass);

        // active link
        $(".links-how a").removeClass("active");
        self.addClass("active");

        // show how-box
        $("#wrap-how-box").hide();
        // infos
        $("#how-box").find("h3").text(selfTitle);
        $("#how-box").find("p").text(selfDesc);
        //position
        $("#wrap-how-box").css({
            top: elemPoint.offset().top + elemPoint.height() + "px",
            left: elemPoint.offset().left + "px"
        });
        console.log(elemPoint)
        console.log(elemPoint.position().left)
        // show
        $("#wrap-how-box").stop(false,true).fadeIn(300);

        return false;
    });
  }

};

$(document).ready( function () { ApplicationHow.init(); });
