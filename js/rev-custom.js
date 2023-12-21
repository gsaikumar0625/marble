var tpj = jQuery;
if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider131"] = {
    once: RS_MODULES.modules["revslider131"] !== undefined ? RS_MODULES.modules["revslider131"].once : undefined, init: function () {
        window.revapi13 = window.revapi13 === undefined || window.revapi13 === null || window.revapi13.length === 0 ? document.getElementById("rev_slider_13_1") : window.revapi13;
        if (window.revapi13 === null || window.revapi13 === undefined || window.revapi13.length == 0) { window.revapi13initTry = window.revapi13initTry === undefined ? 0 : window.revapi13initTry + 1; if (window.revapi13initTry < 20) requestAnimationFrame(function () { RS_MODULES.modules["revslider131"].init() }); return; }
        window.revapi13 = jQuery(window.revapi13);
        if (window.revapi13.revolution == undefined) { revslider_showDoubleJqueryError("rev_slider_13_1"); return; }
        revapi13.revolutionInit({
            revapi: "revapi13",
            DPR: "dpr",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1240,1024,778,480",
            gridheight: "980,768,550,400",
            lazyType: "smart",
            perspective: 600,
            perspectiveType: "global",
            editorheight: "980,768,550,400",
            responsiveLevels: "1240,1024,778,480",
            progressBar: { disableProgressBar: true },
            navigation: {
                wheelCallDelay: 1000,
                onHoverStop: false,
                arrows: {
                    enable: true,
                    style: "metis",
                    hide_onmobile: true,
                    hide_under: "1399px",
                    hide_onleave: true,
                    animSpeed: "500ms",
                    animDelay: "500ms",
                    left: {
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 300,
                        v_offset: 80
                    },
                    right: {
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 380,
                        v_offset: 80
                    }
                },
                bullets: {
                    enable: true,
                    tmp: "",
                    style: "hesperiden",
                    hide_over: "1399px"
                }
            },
            parallax: {
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
                type: "mouse",
                origo: "slidercenter",
                speed: "1ms"
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }
} // End of RevInitScript
if (window.RS_MODULES.checkMinimal !== undefined) { window.RS_MODULES.checkMinimal(); };
 