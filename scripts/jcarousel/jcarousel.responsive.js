(function($) {
    $(function() {
        var father = $('#main, #wrap-itens-cart');


        father.each(function(){
            var self = $(this),
                jcarousel = self.find('.jcarousel');
                jcarousel
                .on('jcarousel:reload jcarousel:create', function () {
                    var width = jcarousel.innerWidth();

                    if (width >= 600) {
                        width = width / 4;
                    } else if (width >= 350) {
                        width = width / 2;
                    }

                    jcarousel.jcarousel('items').css('width', width + 'px');
                })
                .jcarousel({
                    wrap: 'circular'
                });

                self.find('.jcarousel-control-prev')
                .jcarouselControl({
                    target: '-=1'
                });
                self.find('.jcarousel-control-prev, .jcarousel-control-next').bind({
                    click: function(){
                         $(".cart-add-box.float").css({
                            display: "none"
                        });
                    }
                });

                self.find('.jcarousel-control-next')
                .jcarouselControl({
                    target: '+=1'
                });

                self.find('.jcarousel-pagination')
                .on('jcarouselpagination:active', 'a', function() {
                    $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function() {
                    $(this).removeClass('active');
                })
                .on('click', function(e) {
                    e.preventDefault();
                })
                .jcarouselPagination({
                    perPage: 1,
                    item: function(page) {
                        return '<a href="#' + page + '">' + page + '</a>';
                    }
                });
            });

        });
})(jQuery);
