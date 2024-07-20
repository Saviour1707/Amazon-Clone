const imgs = document.querySelectorAll('.header-slider ul img');
const prev = document.querySelector('.control-prev');
const next = document.querySelector('.control-next');

let n = 0;
function changeSlide(){
    for(let i = 0; i < imgs.length; i++)
    {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
// changeSlide();
prev.addEventListener('click', (e) => {
    if(n > 0){
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeSlide();
})
next.addEventListener('click', (e) => {
    if(n < imgs.length - 1){
        n++;
    }
    else{
        n = 0;
    }
    changeSlide();
})

const scrol = document.querySelectorAll('.products');
if(scrol.length == 0)
{
    console.log(imgs);
}
for(const it of scrol) {
    it.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        it.scrollLeft += evt.deltaY;
    });
}
