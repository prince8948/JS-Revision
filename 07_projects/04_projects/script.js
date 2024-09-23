const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const userHeight = parseInt(document.querySelector('#userheight').value);
    const userWeight = parseInt(document.querySelector('#userWeight').value);
    const result = document.querySelector('#Result');
    let BMI;
    if(userHeight=='' || userHeight<0 || isNaN(userHeight)){
        result.innerHTML = `Please Enter Valid Height ${userHeight}`;
    }else if(userWeight=='' || userWeight<0 || isNaN(userWeight)){
        result.innerHTML = `Please Enter Valid Weight  ${userWeight}`;
        // console.log(userHeight);
    }
    else{
        BMI = (userWeight/((userHeight*userHeight)/10000)).toFixed(2);
        result.innerHTML = `<span>You Body Mass Index- ${BMI} </span>`;
    }
    if(BMI > 0 && BMI < 18.6){
        document.querySelector('.bmiGuide').innerHTML = `Under Weight (<18.6)= ${BMI}`
    }else if(BMI>=18.6 && BMI<24.9){
        document.querySelector('.bmiGuide').innerHTML = `Normal Weight (18.6 to 24.9) =  ${BMI}`
    }
    else{
        document.querySelector('.bmiGuide').innerHTML = `Over Weight (>24.9) =  ${BMI}`
    }
    
});
