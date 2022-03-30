const date = document.getElementById('date');
const education = document.querySelectorAll('.education');
const add = document.getElementById('add');
const enlarge = document.getElementById('enlarge');
const lower = document.getElementById('lower');
const delete_ = document.getElementById('delete');
const image = document.getElementById('image');
const imaging = document.getElementById('imaging');

date.addEventListener('click', () => {
    date.classList.toggle('change1');
})

education[0].addEventListener('click', () => {
    education[0].classList.toggle('change2');
})

add.addEventListener('click',()=>{
    image.classList.add('visible');
})

delete_.addEventListener('click', ()=>{
    image.classList.remove('visible');
    imaging.classList.remove('big');
    imaging.classList.remove('small');
})

enlarge.addEventListener('click', ()=>{
    imaging.classList.add('big');
})

lower.addEventListener('click', ()=>{
    imaging.classList.add('small');
})