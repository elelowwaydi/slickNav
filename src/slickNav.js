// https://github.com/elelowwaydi/
(function ($) {
    $.fn.slickNav = function () {
        return this.each(function () {
            var nav = $(this);
            var slider = $("#" + nav.data("slick-nav"));
            var activeIndex = 0;

            nav.find("li:first-child").addClass("active");

            nav.find("li").each(function (index) {
                var link = $(this).find("a");

                link.data("slide-index", index);
                link.on("click", function (e) {
                    e.preventDefault();

                    nav.find("li.active").removeClass("active");
                    $(this).parents("li").addClass("active");

                    slider.slick("slickGoTo", $(this).data("slide-index"));
                });


                slider.on("afterChange", function (event, slick, currentSlide, nextSlide) {
                    slider.find(".slide-item:not(.slick-cloned)").each(function (i) {
                        if ($(this).hasClass("slick-active")) {
                            activeIndex = i;
                        }
                    })
                    nav.find("li.active").removeClass("active");
                    nav.find("li:nth-child(" + (activeIndex + 1) + ")").addClass("active");
                });

            });
        });
    };
}(jQuery));