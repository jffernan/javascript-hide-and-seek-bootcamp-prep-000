/* 
1. Declare a function named getFirstSelector(selector)
2. Function accepts a selector and returns the first element that matches.
*/
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

/* 
1. Declare a function named nestedTarget() that pulls a .target out of #nested.
*/
function nestedTarget( ) {
  return document.querySelector('#nested .target');
}

/* 
1. Declare a function named increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n
*/
function increaseRankBy(n){
    const lis = document.querySelectorAll('ul.ranked-list li');
    for (let i = 0; i < lis.length; i ++){
      lis[i].innerHTML = parseInt(lis[i].innerHTML) + n; 
    }
}

/* 
1. Declare a function named deepestChild() that pulls out the most deeply nested child from div#grand-node
*/
function deepestChild() {
  let noders = document.getElementById('grand-node').querySelectorAll('*');
  let next = null;
  for (let i = 0; i < noders.length; i++){
    if (!noders[i].hasChildren)
      return noders[i];
  }
}
