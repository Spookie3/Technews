var prevScrollpos = window.pageYOffset; /*define a variable for the windows page y offset to compare against*/
var navHeight = window.getComputedStyle(document.getElementById("navbar")).height; /*define a variable for the height of the navbar element*/
var defHeight = "0"; /*define a variable for the default top styling of the navbar element*/
var navRetract = "-" + navHeight; /*define a variable for the negative value of the navbar height*/
var pagePadding = navHeight.replace("px", ""); /*define a variable for the numeric value of the navbar height*/
pagePadding = parseInt(pagePadding); /*convert the string value to an integer*/
document.getElementById("page_content").style.paddingTop = navHeight; /*keep the page content padding the same as the navbar height*/
window.onscroll = function() { /*create a new function for on scroll behavior*/ 
    var navHeight = window.getComputedStyle(document.getElementById("navbar")).height; /*redefine the variable for the height of the navbar element*/
    var currentScrollPos = window.pageYOffset; /*defining the current windows page y offset*/
    if ((prevScrollpos > currentScrollPos)) { /*compare the current y position to the previous*/
        document.getElementById("navbar").style.top = defHeight; /*set current top styling to 0*/
        document.getElementById("page_content").style.paddingTop = navHeight; /*keep the page content padding the same as the navbar height*/
    } else {
        document.getElementById("navbar").style.top = navRetract; /*set current top styling to ...*/
        document.getElementById("page_content").style.paddingTop = "5px"; /*remove the extra padding*/
    }
    prevScrollpos = currentScrollPos; /*set the value of our previous y position to the current postion. update the calue we compare againt*/
}