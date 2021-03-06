function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < ranks.length; i++) {
  ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild() {
  var divGN = document.querySelector('div#grand-node');
  var current = divGN;
  while (current) {
    if (current.querySelector(':only-child')) {
      current = current.querySelector(':only-child');
    } else {
      return current
    }
  }
}
