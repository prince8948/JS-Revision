const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const userHeight = parseInt(document.querySelector('#userheight').value);
    const userWeight = parseInt(document.querySelector('#userWeight').value);
    const result = document.querySelector('#Result');
    
    if(userHeight=='' || userHeight<0 || isNaN(userHeight)){
        result.innerHTML = `Please Enter Valid Height ${userHeight}`;
    }else if(userWeight=='' || userWeight<0 || isNaN(userWeight)){
        result.innerHTML = `Please Enter Valid Weight  ${userWeight}`;
        // console.log(userHeight);
    }
    else{
        const BMI = (userWeight/((userHeight*userHeight)/10000)).toFixed(2);
        result.innerHTML = `<span>You Body Index- ${BMI} </span>`;
    }
    
});
