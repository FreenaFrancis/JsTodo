const inputBox = document.getElementById("input-box")
const listContainer =document.getElementById("list-conatainer")


function addtask(){
    if (inputBox.value === ''){
        alert('you must write something')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
    }
}