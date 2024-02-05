let overlay = document.getElementById("overlay")


const Api = 'https://randomuser.me/api/?results=9'


const getData = (resurse) =>{
   return new Promise((resolve,reject)=>{
     const request = new XMLHttpRequest()
     request.addEventListener('readystatechange', ()=>{
          if(request.readyState==4 && request.status==200){
               let data = JSON.parse(request.responseText)
               resolve(data.results)
               overlay.classList.add("hidden")
          } else if(request.readyState<4){
              overlay.classList.remove("hidden")
          }
          
          else if(request.readyState==4){
               reject("error")
          } 
     })
     request.open('GET',resurse)
     request.send()
   })
}

const reload = ()=>{
     getData(Api)
     .then((data)=>{
          updateUI(data)
     })
     .catch((err)=>{
          console.log(err)
     })
}
document.addEventListener('DOMContentLoaded',reload)


