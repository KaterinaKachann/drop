const items = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
const add = document.querySelector('.add')


items.addEventListener('dragstart', dragstart);
items.addEventListener('dragend', dragend);


placeholders.forEach((placeholder)=>{
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', drop);
})
function dragstart(event){
   event.target.classList.add('hold');
   setTimeout(() => event.target.classList.add('hide'), 0)
   
}

function dragend(event){ 
    event.target.classList.remove('hold', 'hide')
}  

function dragover(event){ 
   event.preventDefault();
}  

function dragenter(event){ 
    event.target.classList.add('hovered');
} 

function dragleave(event){ 
    event.target.classList.remove('hovered');
} 

function drop(event){ 
    event.target.classList.remove('hovered');
    event.target.append(items);
} 

