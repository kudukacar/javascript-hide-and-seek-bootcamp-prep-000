function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.getElementByID('nested').querySelector(".target");
}
function increaseRankBy(n) {
  var lis = document.getElementByID('app').querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  }
}
function deepestChild(){
  var lis = document.getElementByID('grand-node').querySelectorAll('div');
  for (i=0; i < lis.length; i++) {
    
  }
}