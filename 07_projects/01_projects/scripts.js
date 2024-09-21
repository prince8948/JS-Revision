const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('.body')
// console.log(body);
// const reset = document.querySelector('.resetcolor');

buttons.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target)
        if(e.target.id==='grey'){
            document.body.style.backgroundColor = e.target.id
            //OR
            // document.body.style.backgroundColor = 'grey'
            //OR
            // document.body.style.backgroundColor = '#212120'
        }
        if(e.target.id==='yellow'){
            document.body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='green'){
            document.body.style.backgroundColor = e.target.id;
            document.body.style.color = 'white';
        }
        if(e.target.id==='blue'){
            document.body.style.backgroundColor = e.target.id;
        }

    })
})

function resetColor(){
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = '#000';

}

