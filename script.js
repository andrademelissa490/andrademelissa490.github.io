const items=document.querySelectorAll('.reveal');
const io=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
items.forEach(i=>io.observe(i));
const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{
 const d=document.documentElement;
 const max=d.scrollHeight-d.clientHeight;
 progress.style.width=(max?d.scrollTop/max*100:0)+'%';
},{passive:true});
