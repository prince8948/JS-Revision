const clock = document.getElementById('clock')
const hour = document.getElementById('hour')
const second = document.getElementById('second')
const minute = document.getElementById('minute')
setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    const h = new Date()
    hour.innerHTML = h.getHours();
    minute.innerHTML = h.getMinutes();
    second.innerHTML = h.getSeconds();
},1000)