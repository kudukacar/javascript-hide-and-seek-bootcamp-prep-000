function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.getElementByID('nested').querySelector(".target");
}
function increaseRankBy(n) {
  var lis = document.getElementByID('app').querySelectorAll("ul.ranked-list li")
}