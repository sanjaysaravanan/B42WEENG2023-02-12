function toggleClass() {
  const divEle = document.getElementById('sam-div');
  divEle.classList.toggle('bg-blue');

  // Add
  // if (divEle.classList.contains('bg-blue')) {
  //   divEle.classList.remove('bg-blue');
  // } else {
  //   divEle.classList.add('bg-blue');
  // }

}

const toogleBtn = document.querySelector('button');

// named function as argument
// toogleBtn.addEventListener('click', toggleClass);

toogleBtn.addEventListener('click', toggleClass, { once: true });

document.getElementById('rmv').addEventListener('click', () => {
  toogleBtn.removeEventListener('click', toggleClass);
  // ** remove event listner should be on a named callback function **
});


const form = document.querySelector('form');

form.addEventListener(
  'submit', (e) => {
    e.preventDefault();
    alert();
    console.log('#############  Submitting the Form #################33', e);
    console.error('Hi This is warning');
  },
  { once: false, passive: true }
)