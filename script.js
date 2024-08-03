const imgs = document.querySelectorAll('.head_slider ul img');
const pre = document.querySelector('.control1');
const nxt = document.querySelector('.control2');

let n = 0;

function changeSlide() {
    
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    
    imgs[n].style.display = 'block';
}

changeSlide();
pre.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeSlide();
})
nxt.addEventListener('click',(e)=>{
    if(n<imgs.length - 1){
        n++;
    }
    else{
        n = 0;
    }
    changeSlide();
})

const scroll = document.querySelectorAll('.pro');
for(const i of scroll){
    i.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        i.scrollLeft+=evt.deltaY;
    })
}