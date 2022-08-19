
// add a name
let webinput = prompt("Adınızı girin.")

if(webinput){
document.querySelector("#myName").innerHTML = webinput

}


function showTime(){
let d = new Date()
let myClock = document.querySelector("#myClock")
console.log(d.getDate())
console.log(d.getDay())
let days = ["Pazartesi", "Salı", "Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
myClock.innerHTML =`${d.getHours()} : ${d.getMinutes()}: ${d.getSeconds()} ${days[d.getDay()]}`

setTimeout(showTime, 1000)

}

showTime()



