const list = document.querySelector('#display-books ul');

// delete books
list.addEventListener('click', (e) => {
  if (e.target.className === 'remove') {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});
