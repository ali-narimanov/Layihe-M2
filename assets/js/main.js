let body = document.body;
let div = document.querySelectorAll('.main');
let plus = document.querySelector('.but-3');
let add = document.querySelector('.p2');
let ul = document.querySelector('ul');
let poisk = document.querySelector('.poisk');
let iks = document.querySelector('.iks');
let input = document.querySelector('input');
let but = document.querySelector('.but')
let photo1 = document.querySelector('.photo1');
let photo2 = document.querySelector('.photo2')




























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




photo2.style.display="none"
photo1.addEventListener('click', ()=>{
  photo1.style.display="none";
  photo2.style.display="block"
  
  let arr = [];
  let info = [...ul.children];
  info.forEach(item=>{
    arr.push(item.innerHTML);
  })
  arr.sort();
  ul.innerHTML="";
  arr.forEach(item=>{
    let lis = `<li>${item}</li>`;
    ul.innerHTML +=lis;
  });
});
photo2.addEventListener('click', ()=>{
  photo2.style.display="none";
  photo1.style.display="block"
  
  let arr = [];
  let info = [...ul.children];
  info.forEach(item=>{
    arr.push(item.innerHTML);
  })
  arr.sort();
  arr.reverse();
  ul.innerHTML="";
  arr.forEach(item=>{
    let lis = `<li>${item}</li>`;
    ul.innerHTML +=lis;
  });
});
















