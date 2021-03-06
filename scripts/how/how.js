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
            selfAlign = self.data("align"),
            elemPoint = $("#"+selfIdpass),
            offset = elemPoint.offset(),
            width = elemPoint.width(),
            height = elemPoint.height(),
            centerX = offset.left + width / 2,
            centerY = offset.top + height / 2,
            topBox = centerY + (elemPoint.height() / 2);
            leftBox = centerX - ($("#wrap-how-box").width() / 2);

        // active link
        $(".links-how a").removeClass("active");
        self.addClass("active");

        // show how-box
        $("#wrap-how-box").hide();
        // infos
        $("#how-box").find("h3").text(selfTitle);
        $("#how-box").find("p").text(selfDesc);
        //position
        var widthPage = $(window).width();

        if (widthPage >= 600) {
          $("#wrap-how-box").css({
            top: topBox + "px",
            left: leftBox  + "px"
          });
        } else if (widthPage >= 320) {
          $("#wrap-how-box").css({
            width: "100%",
            top: centerY + (elemPoint.height() / 2) + "px",
            left: "0%"
          });
        }

        if($("#wrap-how-box").width() + leftBox > widthPage){
          $("#wrap-how-box").css({
            left: widthPage - $("#wrap-how-box").width() + "px"
          });
        }


        // show
        $("#wrap-how-box").stop(false,true).fadeIn(300);
        $("html, body").animate({
          scrollTop: $("#wrap-how-box").offset().top - 120 + "px"
        },300);

        return false;
    });

    // click next prev
    $(".arrow-nav-how").on("click", function(){
        var self = $(this);

        if(self.hasClass("next")){
            if($(".links-how").find(".active").next().length == 0){
                $(".links-how a:first").click();
            }else{
                $(".links-how").find(".active").next().click();
            }

        }else{
            if($(".links-how").find(".active").prev().length == 0){
                $(".links-how a:last").click();
            }else{
                $(".links-how").find(".active").prev().click();
            }
        }

        return false;
    });

    // close how-box
    $("#close-how").on("click", function(){
        $("#wrap-how-box").hide();
    });
  }

};

$(document).ready( function () { ApplicationHow.init(); });
