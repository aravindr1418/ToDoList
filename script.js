let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input')



let list = []



window.onload = ()=>{
    list = JSON.parse(localStorage.getItem('list')) || []
    list.forEach(todo=>showlist(todo))
}

button.addEventListener('click',()=>{
    list.push(input.value)
    localStorage.setItem('list',JSON.stringify(list))
    showlist(input.value)
    input.value=''
})

function showlist(todo){
    let para = document.createElement('p')
    para.innerText = todo
    todoList.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
    function remove(todo){
         let index = list.indexOf(todo)
         if(index>-1)
         list.splice(index,1) 
         localStorage.setItem('list',JSON.stringify(list))     
    }
}

