const images = document.getElementById('images');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const img = document.querySelectorAll('#images img')

let index = 0;


interval = setInterval(run, 2000);

function resetInterval(){
    clearInterval(interval);
interval = setInterval(run, 2000);
}


prev.addEventListener('click',()=>{
    // console.log(index);
    resetInterval()
    if (index == 0) index = img.length -1;
    else index--
    images.style.transform = `translateX(${-index * 300}px)`;

})

next.addEventListener("click",run );

function run(){
//   console.log(index);
        resetInterval();
  if (index == img.length - 1) index = 0;
  else if (index < img.length) index++;
  images.style.transform = `translateX(${-index * 300}px)`;
};