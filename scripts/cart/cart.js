ApplicationCart = {
  init: function () {
    this.cart();
    this.boxCartShow();
    this.valProductsBox();
    this.valProductsBoxInt();
    this.valProductsBoxKit();
  },

  cart: function(){
    // click cart icon
    var topCartBox = 0;

    function topBox(){
        topCartBox = ($("#cart").position().top + ($("#wrap-itens-cart").outerHeight() / 2) - ($("#cart").outerHeight() / 2) / 4)
    }
    topBox();

    $(window).bind({
        load: function(){
            topBox();
        },
        resize: function () {
            topBox();
        }
    });

    $("#wrap-cart").on('click', function(){
        var self = $(this);

        if($("#cart").hasClass("active")){
            $("#cart").removeClass('active');
            $("#wrap-itens-cart").animate({
                opacity: '0'
            },200).css({
                top: "-400px"
            });
        }else{
            $("#cart").addClass('active');
            $("#wrap-itens-cart").css({
                top: topCartBox + "px"
            }).animate({
                opacity: '1'
            },400);
        }
    });

    $("#main").mouseleave(function(){
        $("#cart").removeClass('active');
        $("#wrap-itens-cart").animate({
            opacity: '0'
        },200).css({
            top: "-400px"
        });
    });

    // value cart
    // add value in parent
    var somaValue = 0;
    $("#wrap-itens-cart").find(".list-itens .price-prod").each(function(){
        var self = $(this),
            selfValue = self.html(),
            selfValueSp = selfValue.replace(/,/gi, ".");

        somaValue += parseFloat(selfValueSp);
        var selfValueRound = somaValue.toFixed(2),
            selfValueFinal = selfValueRound.replace(".", ",");

        $("#cart").find("#value-cart span").html(selfValueFinal);

    });

  },

  boxCartShow: function(){
    // price box
    $(".list-itens li").bind({
        click: function(){
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
        click: function(){
            var self = $(this),
                selfPrice = self.find(".price-prod").html();

            $(".cart-add-box.float").find(".value-prod span").html(selfPrice);
            $(".cart-add-box.float").find(".quant-prod").val(1);

            valueLi = selfPrice;

            $(".cart-add-box.float").find(".quant-prod").val(1);

        }
    });


    // add value
    $(".cart-add-box.float").find(".more").on("click", function(){
    // raise the price
        var valueQuant = $(".cart-add-box.float").find(".quant-prod").val(),
            quant = ++valueQuant,
            valueQuantAl = valueQuant,
            valueLiSp = valueLi.replace(/,/gi, "."),
            mult = valueLiSp*valueQuantAl,
            valRound = parseFloat(mult).toFixed(2),
            valFinal = valRound.replace(".", ",");

        $(".cart-add-box.float").find(".quant-prod").val(quant);
        $(".cart-add-box.float").find(".value-prod span").text(valFinal);
    });

    // remove value
    $(".cart-add-box.float").find(".less").on("click", function(){
        var valueQuant = $(".cart-add-box.float").find(".quant-prod").val(),
            quant = --valueQuant,
            valueQuantAl = valueQuant,
            valueLiSp = valueLi.replace(/,/gi, "."),
            mult = valueLiSp*valueQuantAl,
            valRound = parseFloat(mult).toFixed(2),
            valFinal = valRound.replace(".", ",");

        if(quant === 0){
            $(".cart-add-box.float").find(".quant-prod").val(1);
        }else{
            $(".cart-add-box.float").find(".quant-prod").val(quant);
            $(".cart-add-box.float").find(".value-prod span").text(valFinal);
        }
    });

    // change value
    $(".cart-add-box.float").find(".quant-prod").on("change", function(){
        var valueQuant = $(".cart-add-box.float").find(".quant-prod").val(),
            valueQuantAl = valueQuant,
            valueLiSp = valueLi.replace(/,/gi, "."),
            mult = valueLiSp*valueQuantAl,
            valRound = parseFloat(mult).toFixed(2),
            valFinal = valRound.replace(".", ",");

        if(valueQuant == 0 || valueQuant == ""){
            $(".cart-add-box.float").find(".quant-prod").val(1);
        }else{
            $(".cart-add-box.float").find(".value-prod span").text(valFinal);
        }
    });

  },

  valProductsBoxInt: function(){
    // add value
    if($(".value-prod-promo span").length > 0){
        var valueLi = $(".value-prod-promo span").html(),
            valueLiSp = valueLi.replace(/,/gi, ".");
    }

    $(".cart-add-box.cont").find(".more").on("click", function(){
    // raise the price
        var valueQuant = $(".cart-add-box.cont").find(".quant-prod").val(),
            quant = ++valueQuant,
            valueQuantAl = valueQuant,
            mult = valueLiSp * valueQuantAl,
            valRound = parseFloat(mult).toFixed(2),
            valFinal = valRound.replace(".", ",");
        $(".cart-add-box.cont").find(".quant-prod").val(quant);
        $(".cart-add-box.cont").find(".value-prod-promo span").text(valFinal);
    });

    // remove value
    $(".cart-add-box.cont").find(".less").on("click", function(){
        var valueQuant = $(".cart-add-box.cont").find(".quant-prod").val(),
            quant = --valueQuant,
            valueQuantAl = valueQuant,
            mult = valueLiSp * valueQuantAl,
            valRound = parseFloat(mult).toFixed(2),
            valFinal = valRound.replace(".", ",");

        if(quant === 0){
            $(".cart-add-box.cont").find(".quant-prod").val(1);
        }else{
            $(".cart-add-box.cont").find(".quant-prod").val(quant);
            $(".cart-add-box.cont").find(".value-prod-promo span").text(valFinal);
        }
    });

    // change value
    $(".cart-add-box.cont").find(".quant-prod").on("change", function(){
        var valueQuant = $(".cart-add-box.cont").find(".quant-prod").val(),
            valueQuantAl = valueQuant,
            valueLi = $(".value-prod-promo span").html(),
            mult = valueLiSp * valueQuantAl,
            valRound = parseFloat(mult).toFixed(2),
            valFinal = valRound.replace(".", ",");

        if(valueQuant == 0 || valueQuant == ""){
            $(".cart-add-box.cont").find(".quant-prod").val(1);
        }else{
            $(".cart-add-box.cont").find(".value-prod-promo span").text(valFinal);
        }

    });

  },

  valProductsBoxKit: function(){
    // add value in parent
    $("table").find(".value-prod span").each(function(){
        var self = $(this),
            selfValue = self.html();

        self.parent().attr({
            "data-valuethis": selfValue
        });

    });
    function valueReal(){
        var somaValue = 0;
        $("table").find(".value-prod span").each(function(){
            var self = $(this),
                selfValue = self.html(),
                selfValueSp = selfValue.replace(/,/gi, ".");

            somaValue += parseFloat(selfValueSp);
            var selfValueRound = somaValue.toFixed(2),
                selfValueFinal = selfValueRound.replace(".", ",");

            $("#wrap-value-kit").find(".value-prod-promo span").html(selfValueFinal);
        });
    }
    valueReal();

    $("table").find(".more").on("click", function(){
    // raise the price
        var self = $(this),
            valueQuant = self.parent().parent().parent().find(".quant-prod").val(),
            quant = ++valueQuant,
            valueQuantAl = valueQuant,
            valueLi = self.parent().parent().parent().find(".value-prod").data("valuethis"),
            valueLiSp = valueLi.replace(/,/gi, "."),
            mult = valueLiSp * valueQuantAl,
            valRound = parseFloat(mult).toFixed(2),
            valFinal = valRound.replace(".", ",");


        self.parent().parent().parent().find(".quant-prod").val(quant);
        self.parent().parent().parent().find(".value-prod span").text(valFinal);
        valueReal();
    });

    // remove value
    $("table").find(".less").on("click", function(){
        var self = $(this),
            valueQuant = self.parent().parent().parent().find(".quant-prod").val(),
            quant = --valueQuant,
            valueQuantAl = valueQuant,
            valueLi = self.parent().parent().parent().find(".value-prod").data("valuethis"),
            valueLiSp = valueLi.replace(/,/gi, "."),
            mult = valueLiSp * valueQuantAl,
            valRound = parseFloat(mult).toFixed(2),
            valFinal = valRound.replace(".", ",");

        // verification is page cart-page
        if($(".cart-page").length > 0){
            if(valueQuant == 0){
                self.parent().parent().parent().fadeOut(300, function(){
                    self.parent().parent().parent().remove();
                    valueReal();
                });
            }else{
                self.parent().parent().parent().find(".quant-prod").val(quant);
                self.parent().parent().parent().find(".value-prod span").text(valFinal);
                valueReal();
            }
        }else{
            if(quant === 0){
                self.parent().parent().parent().find(".quant-prod").val(1);
            }else{
                self.parent().parent().parent().find(".quant-prod").val(quant);
                self.parent().parent().parent().find(".value-prod span").text(valFinal);
                valueReal();
            }
        }


    });

    // change value
    $("table").find(".quant-prod").on("change", function(){
        var self = $(this),
            valueQuant = self.val(),
            valueQuantAl = valueQuant,
            valueLi = self.parent().parent().parent().parent().find(".value-prod").data("valuethis"),
            valueLiSp = valueLi.replace(/,/gi, "."),
            mult = valueLiSp * valueQuantAl,
            valRound = parseFloat(mult).toFixed(2),
            valFinal = valRound.replace(".", ",");

        // verification is page cart-page
        if($(".cart-page").length > 0){
            if(valueQuant == "" || valueQuant == 0){
                self.parent().parent().parent().parent().fadeOut(300, function(){
                    self.parent().parent().parent().parent().remove();
                    valueReal();
                });
            }
        }else{
            if(valueQuant == "" || valueQuant == 0){
                self.parent().parent().parent().find(".quant-prod").val(1);
            }else{
                self.parent().parent().parent().parent().find(".value-prod span").text(valFinal);
                valueReal();
            }
        }

    });

  }

};

$(document).ready( function () { ApplicationCart.init(); });
