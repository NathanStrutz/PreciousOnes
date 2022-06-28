const nav = document.getElementById("primary-nav");
var navLinks = nav.getElementsByTagName("a");
for (link of navLinks) {
  let linkHref = link.href.split(/\//)[3];
  let addrHref = window.location.href.split(/\//)[3];
  if (linkHref === addrHref) {
    link.className = "nav-link active";
  }
}
