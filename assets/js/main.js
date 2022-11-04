let body = document.body;
let div = document.querySelectorAll('.main');
let plus = document.querySelector('.but-3');
let add = document.querySelector('.p2');
let ul = document.querySelector('ul');
let poisk = document.querySelector('.poisk');
let iks = document.querySelector('.iks');
let input = document.querySelector('input');





























ul.addEventListener("click",(e)=>{
  if(e.target.tagName ==="BUTTON"){
    e.target.parentElement.remove()
  }
})


add.addEventListener('click', ()=>{
    console.log(" 2nd works")
    let li = document.createElement('li');
   ul.append(li);
   let newx = document.createElement('button');
   let inputs = document.querySelectorAll('input');
   let divs = document.querySelectorAll("#input > div");
   inputs.forEach((item, index) => {
    li.innerText = inputs[index].value;
   })
   let delButton = document.createElement("button");
   delButton.innerText="x"
   li.append(delButton)
  ul.style.display="block";
  delButton.classList.add('delButton')
})

let a = document.querySelector('.iks')
a.addEventListener('click',()=>{
  poisk.classList.add('hide')
})



plus.addEventListener('click',()=>{
  if(poisk.classList.contains("hide")){
    poisk.classList.remove("hide")
  }
})













