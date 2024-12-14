var addbtn=document.getElementById('add');
var deletebtn=document.getElementById('delete');
var unorderlist =document.getElementById('unorderlist');

let showitem=[];

function render()
{
    unorderlist.innerHTML='';
    showitem.forEach((task,index)=>{
        let para=document.createElement('p');
        para.innerHTML=`${task.task}-${task.status} <button id="deletecontent" onclick="deletecontent(${index})">Delete</button>`
       para.classList.add('border');
        unorderlist.appendChild(para);
    });   
}
addbtn.addEventListener('click',()=>{
    let inputselect=document.getElementById('inputselect');
    let selecttable=document.getElementById('selecttable');
    console.log(inputselect.value);
    console.log(selecttable.value);

    showitem.unshift({task:inputselect.value,status :selecttable.value});
    render();
    inputselect.value='';
    selecttable.value='completed';
});
deletebtn.addEventListener('click',()=>{
showitem=[];
render();
});

window.deletecontent=(index)=>
    {
        showitem.splice(index,1);
        render();
    }