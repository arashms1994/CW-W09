let btn = document.querySelector('.btn');
let clickCount = 0;
let firstClickTime = 0;
let flag = false;
const modal = document.createElement('div');
document.body.appendChild(modal);
modal.style.width = '100%';
modal.style.height = '100vh';
modal.style.background = 'black';
modal.style.display = 'none';

btn.addEventListener('click', () => {
    const now = new Date().getTime();
    if (clickCount === 0) {
        firstClickTime = now;
    }
    clickCount++;
    if (clickCount > 5 && now - firstClickTime < 3000 && !flag) {
        alert('msg');
        clickCount = 0;
        flag = true;
        return;
    }
    if (clickCount > 5 && now - firstClickTime < 3000 && flag) {
        modal.style.display = "block"
    }
    if (clickCount > 5 && now - firstClickTime >= 3000) {
        clickCount = 1;
        firstClickTime = now;
    }

})

// btn.addEventListener('click', () => {
//     if (clickCount > 5 && now-firstClickTime < 3000) {
//         console.log("k")
//     }
// })





// let btn = document.querySelector('.btn');
// let clickCount = 0;
// let timeOut;

// btn.addEventListener('click', () => {
//     clickCount++;
// })

// setTimeout(() => {
//     if (clickCount > 5) {
//         alert('msg');
//     }
// }, 3000);