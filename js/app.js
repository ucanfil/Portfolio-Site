document.body.className = "fade";

/* Below code belongs to Dustin Diaz >> http://dustindiaz.com/smallest-domready-ever  */

function r(f) { /in/.test(document.readyState) ? setTimeout(r, 9, f) : f() }
r(function () { document.body.className = "";});