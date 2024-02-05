let body = document.querySelector('body')
let darkbtn = document.getElementById("dark-btn")
let lightbtn = document.getElementById("light-btn")

const refresh = localStorage.getItem("mode")
if(refresh){
     body.classList.add("dark-mode")
     darkbtn.classList.toggle("hidden")
     lightbtn.classList.toggle("hidden")
}


const darkmode = () => {
     darkbtn.classList.toggle("hidden")
     lightbtn.classList.toggle("hidden")
     body.classList.toggle("dark-mode")
}

darkbtn.addEventListener("click",()=>{
     darkmode()
     localStorage.setItem("mode", '')
})

lightbtn.addEventListener("click",()=>{
     darkmode()
     localStorage.setItem("mode","darkmode")
})



