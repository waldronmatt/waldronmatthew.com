document.querySelectorAll('.footer-copyright').forEach(element => {
  element.append(document.createTextNode(new Date().getFullYear()));
});
