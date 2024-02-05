let delete__btn = document.getElementById("delete__btn")
let listcard = document.getElementById("user")
let Refreshbtn = document.getElementById("refresh")
let ClearBtn = document.getElementById("clear")
let search = document.querySelector("input")
search.addEventListener('input',()=>{
  let card = document.querySelectorAll(".user__name")
  let inputvalue = search.value.toLowerCase()
  card.forEach((item)=>{
    if(item.lastElementChild.textContent.toLowerCase().includes(inputvalue)){
      item.parentElement.classList.remove('hidden')
    }else{
      item.parentElement.classList.add('hidden')
    }
  })
})

Refreshbtn.addEventListener('click',(e)=>{
  e.preventDefault()
  reload()
  ClearBtn.classList.remove("hidden")
})

ClearBtn.addEventListener('click',()=>{
  listcard.innerHTML=''
  ClearBtn.classList.add("hidden")
})

document.addEventListener('click',(e)=>{
   if(e.target.classList[0]==='user__delete--btn'){
    e.target.parentElement.remove()
   }if(!listcard.children.length){
    ClearBtn.classList.add("hidden")
   }
})



const updateUI = (data) =>{
  listcard.innerHTML = ''
  data.forEach((item)=>{
    const {location, name, picture, gender, dob} = item 

listcard.innerHTML+= `
  <li class="user__item">
    <button id="delete__btn" class="user__delete--btn">
      <i class="fas fa-trash"></i>
    </button>
    <img
      class="user__img"
      alt="User photo"
      src="${picture.large}"
      width="100"
      height="100"
    />
    <div class="user__name ">
      <span class="material-symbols-outlined"><i class="fa-solid fa-user-tie fa-sm"></i></span>
      <span>- ${name.title} ${name.first} ${name.last}</span>
    </div>
    <div class="user__year">
      <span class="material-symbols-outlined"><i class="fa-regular fa-calendar fa-sm"></i></span>
      <span>- ${dob.age} years old.</span>
    </div>
    <div class="user__location">
      <span class="material-symbols-outlined">person_pin_circle</span>
      <span>-${location.city} , ${location.country}</span>
    </div>
    <div class="user__gender">
      <span class="material-symbols-outlined">man</span>
      <span>- ${gender}</span>
    </div>
  </li>
    `
  })
}