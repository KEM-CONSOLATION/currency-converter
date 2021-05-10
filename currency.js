let output= document.getElementById('output');
let naira= document.getElementById('naira');
// let dollars= document.getElementById('dollars');
// let euros= document.getElementById('euros');
// let btn= document.getElementById('btn');
const dollar=450;
output.addEventListener('keyup', function () {
    naira.value=this.value * dollar;
})
naira.addEventListener('keyup', function () {
    output.value=this.value / dollar;
})

// let input=document.getElementById('input');
// let naira=document.getElementById('naira');
// let dollar=document.getElementById('dollar');
// let euro=document.getElementById('euro');

// const nairas=