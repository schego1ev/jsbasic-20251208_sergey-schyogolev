function highlight(table) {
  const rows = table.rows;
  for (const elem of rows) {
    if (!elem.lastElementChild.hasAttribute('data-available')) {
      elem.setAttribute('hidden', 'true');
    }
    if (elem.childNodes[5].textContent === 'm') { elem.classList.add('male'); }
    if (elem.childNodes[5].textContent === 'f') { elem.classList.add('female'); }
    if (elem.childNodes[3].textContent < 18) { elem.style = "text-decoration: line-through"; }
    if (elem.lastElementChild.getAttribute('data-available') === 'true') {
      elem.classList.add('available');
    } else {
      elem.classList.add('unavailable');
    }
  }
}
