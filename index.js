function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget( ) {
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n){
    const lis = document.querySelectorAll('ul.ranked-list li');

    for (let i = 0; i < lis.length; i ++){
      lis[i].innerHTML = parseInt(lis[i].innerHTML) + n; 
    }
}

function deepestChild() {
  let noders = document.getElementById('grand-node').querySelectorAll('*');
  let next = null;

  for (let i = 0; i < noders.length; i++){
    if (!noders[i].hasChildren)
      return noders[i];
  }
}