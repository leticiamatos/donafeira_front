ApplicationCart = {
  init: function () {
    this.cart();
    this.boxCartShow();
    this.valProductsBox();
  },

  cart: function(){
    // click cart icon
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

  boxCartShow: function(){
    // price box
    $(".list-itens li").bind({
        mouseenter: function(){
            var self = $(this);


            function positBox(){
                $(".cart-add-box.float").css({
                    display: "block",
                    top: parseInt(self.offset().top + 20) + "px",
                    left: (self.offset().left + (self.width() / 4)) + "px"
                });
            };
            positBox();
        }
    });
    $(".list-itens").bind({
        mouseleave: function(){
             $(".cart-add-box.float").css({
                display: "none"
            });
        }
    });
    $(".cart-add-box.float").bind({
        mouseenter: function(){
             $(".cart-add-box.float").css({
                display: "block"
            });
        }
    });

  },

  valProductsBox: function(){
    // hover print value
    var valueLi;
    $(".list-itens li").bind({
        mouseenter: function(){
            var self = $(this),
                selfPrice = self.find(".price-prod").html();

            $(".cart-add-box.float").find(".value-prod span").html(selfPrice);
            $(".cart-add-box.float").find(".quant-prod").val(1);

            valueLi = selfPrice;

        }
    });

    // raise the price
    var valueProd = parseInt($(".cart-add-box.float").find(".value-prod span").html()),
        valueQuant = $(".cart-add-box.float").find(".quant-prod").val();

    $(".cart-add-box.float").find(".more").on("click", function(){
        var quant = ++valueQuant,
            valueQuantAl = parseInt(valueQuant),
            mult = parseInt(valueLi)*parseInt(valueQuantAl);

        $(".cart-add-box.float").find(".quant-prod").val(quant);
        $(".cart-add-box.float").find(".value-prod span").text(mult);

    });

  }

};

$(document).ready( function () { ApplicationCart.init(); });
