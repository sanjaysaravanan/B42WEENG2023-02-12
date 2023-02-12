// with setInterval
// Hint to use setInterval
const hEle = document.createElement('h1');
document.body.append(hEle);

var count = 10;

// var id = setInterval(() => {
//   hEle.innerText = count;
//   count--;
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
//   hEle.innerText = "Happy V'Day";
// }, 11000);

// without setInterval
// Hint: use callback hell & setTimeout only

setTimeout(() => {
  hEle.innerText = 5;
  setTimeout(() => {
    hEle.innerText = 4;
    setTimeout(() => {
      hEle.innerText = 3;
      setTimeout(() => {
        hEle.innerText = 2;
        setTimeout(() => {
          hEle.innerText = 1;
          setTimeout(() => {
            hEle.innerText = "Happy V'Day";
          }, 1000);
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)