$(document).foundation();

var menu, except, w, advertButton;
menu = document.getElementById('main-menu');
except = document.getElementById('main-content');
w = window.innerWidth;
advertButton = document.getElementById('advert-button');

function clickHideMenu() {
    menu.setAttribute("style", "display: none;");
}

function showAdvertSection(){
    var aSection = document.getElementById('advert-section');
    aSection.setAttribute("style", "display: block;");
    aSection.scrollIntoView({
        behavior: 'smooth'
    });
}

window.addEventListener("resize", function() {
    var wResize = window.innerWidth;
    if (wResize <= 1020) {
        except.addEventListener("click", clickHideMenu);
    } else {
        except.removeEventListener("click", clickHideMenu);
    }
});
if (w <= 1020) {
    except.addEventListener("click", clickHideMenu);
}

advertButton.addEventListener("click", showAdvertSection);