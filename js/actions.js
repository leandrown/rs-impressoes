/*******************************************************
  © 2019 Mandrillus
  Author: Carlos Alberto
  Author URI: http://www.mandrillus.com.br
  Description: Vice Version Traduções
  Version: 1.0
  License: GNU General Public License v3 or later
  License URI: http://www.gnu.org/licenses/gpl-3.0.html
********************************************************/

function openMenu() {
  var element = document.getElementById("collapsible-menu");
  element.classList.toggle("open");
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "15px 0";
    document.getElementById("imglogo").style.width = "180px";
  } else {
    document.getElementById("navbar").style.padding = "15px 0";
    document.getElementById("imglogo").style.width = "200px";
  }
}