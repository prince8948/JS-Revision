const btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    const userInput = document.querySelector('#userInput').value;
    if(userInput){
        addList(userInput);
        document.querySelector('#userInput').value = '';
    }
});

function addList(text){
    const newList = document.createElement('li')
    newList.textContent =   `${text}`
    const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove'; // Label the button "Remove"
        // removeBtn.setAttribute('className', 'removebtn')
        removeBtn.style.color = 'red'
        const donebtn = document.createElement('button');
        donebtn.textContent = 'Done';

        // Add click event listener to the "Remove" button
        removeBtn.addEventListener('click', function() {
            newList.remove(); // Remove the list item when the button is clicked
        });
        donebtn.addEventListener('click', function() {
            newList.style.textDecoration='line-through'; // Remove the list item when the button is clicked
        });

        // Append the "Remove" button to the list item
        newList.appendChild(removeBtn);
        newList.appendChild(donebtn);

        // Append the new list item to the <ul> with the class "listItems"
        document.querySelector('.listItems').appendChild(newList);
}

