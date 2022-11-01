let body = document.body;
let div = document.querySelectorAll('.main');
let plus = document.querySelector('.but-3')
let add = document.querySelector('.p2')
let ul = document.querySelector('ul')
let poisk = document.querySelector('.poisk')
let iks = document.querySelector('.iks')



// plus.addEventListener("click", (event)=>{
//     event.stopPropagation();
//     console.log("works");
//     let newdiv = document.createElement('div');
//     newdiv.classList.add('poisk')
//     ul.appendChild(newdiv);
//     let newInput = document.createElement('input');
//     newInput.classList.add('input')
//     newdiv.appendChild(newInput);
//     let newx = document.createElement('button');
//     newdiv.appendChild(newx)
//     newx.classList.add('iks')
//     newx.innerText = 'x'
    
    
    
// });


add.addEventListener('click', ()=>{
    console.log(" 2nd works")
    let li = document.createElement('li');
   ul.append(li);
   let inputs = document.querySelectorAll('input');
   let divs = document.querySelectorAll("#input > div");
   inputs.forEach((item, index) => {
    li.innerText = inputs[index].value;
    if (index === inputs.length - 1){
        divs[index].remove();
    }
   })
  ul.style.display="block"
})



