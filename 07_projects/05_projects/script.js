const colorGenerator = function(){
    const hexValue = '0123456789ABCDEF';
    let color = '#';
    for(let i =0; i<6; i++){
        color += hexValue[Math.floor(Math.random() * 16)];
    }
    return color;
};



document.addEventListener('DOMContentLoaded', function(){
    const BgChanging = ()=>{
        document.querySelector('body').style.backgroundColor = colorGenerator();
        //document.querySelector('h1').style.color = colorGenerator();
    }
    let intervalId;
    const startBgChanging =()=>{
        intervalId= setInterval(BgChanging, 1000)
    }

    function stopChanging(){
        clearInterval(intervalId)
        intervalId =null;
    }

    document.querySelector('#start').addEventListener('click', startBgChanging)
    document.querySelector('#stop').addEventListener('click', stopChanging)
});
  