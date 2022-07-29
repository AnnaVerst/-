document.querySelector('#text-to-find').oninput = function () {
  let val = this.value.trim();
  let searchInput = document.querySelectorAll('.calendar .day');
  if (val != '') {
    searchInput.forEach(function (elem) {
          if (elem.innerText.toLowerCase().search(val) == -1) {
              elem.classList.add('hide');
              
          }
          else {
              elem.classList.remove('hide');
              let str = elem.innerText;
          }
      });
  }
  else {
    searchInput.forEach(function (elem) {
          elem.classList.remove('hide');
      });
  }
}

function insertMark(string, pos, len) {
  return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}

