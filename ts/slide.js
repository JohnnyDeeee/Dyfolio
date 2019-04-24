var topSliders = document.getElementsByClassName("slide-top");
var baseTimeout = 100;
var timeout = 0;
var _loop_1 = function (slider) {
    setTimeout(function () {
        slider.classList.add("slide-top-animated");
    }, timeout);
    var _loop_5 = function (innerSlider) {
        setTimeout(function () {
            innerSlider.classList.add("slide-bottom-animated");
        }, timeout);
    };
    for (var _i = 0, _a = slider.children; _i < _a.length; _i++) {
        var innerSlider = _a[_i];
        _loop_5(innerSlider);
    }
    timeout += baseTimeout;
};
for (var _i = 0, topSliders_1 = topSliders; _i < topSliders_1.length; _i++) {
    var slider = topSliders_1[_i];
    _loop_1(slider);
}
var bottomChildrenSliders = document.getElementsByClassName("slide-bottom-children");
timeout: number = 0;
for (var _a = 0, bottomChildrenSliders_1 = bottomChildrenSliders; _a < bottomChildrenSliders_1.length; _a++) {
    var slider = bottomChildrenSliders_1[_a];
    var _loop_2 = function (innerSlider) {
        setTimeout(function () {
            innerSlider.classList.add("slide-bottom-animated");
        }, timeout);
    };
    for (var _b = 0, _c = slider.children; _b < _c.length; _b++) {
        var innerSlider = _c[_b];
        _loop_2(innerSlider);
    }
    timeout += baseTimeout;
}
var menu = document.getElementsByClassName("index-menu");
for (var _d = 0, menu_1 = menu; _d < menu_1.length; _d++) {
    var single = menu_1[_d];
    var _loop_3 = function (child) {
        child.addEventListener("mouseout", function (event) {
            if (!child.classList.contains("swing-out")) {
                child.classList.add("swing-out");
            }
        });
    };
    for (var _e = 0, _f = single.children; _e < _f.length; _e++) {
        var child = _f[_e];
        _loop_3(child);
    }
}
var leftSliders = document.getElementsByClassName("slide-left");
timeout = 0;
var _loop_4 = function (slider) {
    setTimeout(function () {
        slider.classList.add("slide-left-animated");
    }, timeout);
    timeout += baseTimeout;
};
for (var _g = 0, leftSliders_1 = leftSliders; _g < leftSliders_1.length; _g++) {
    var slider = leftSliders_1[_g];
    _loop_4(slider);
}
