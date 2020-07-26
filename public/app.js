var list = document.getElementById('list')


function additem() {
    var item = document.getElementById('todo-item')
    var li = document.createElement('li')
    var litext = document.createTextNode(item.value)
    li.appendChild(litext)
    li.setAttribute('class','li')
    list.appendChild(li)
   
    item.value = ''
    
    var delbtn = document.createElement('button')
    var btnText = document.createTextNode(' delete')
    delbtn.appendChild(btnText)
    delbtn.setAttribute('onclick', "del(this)")
    delbtn.setAttribute('class','btn1')
    li.appendChild(delbtn)

    //edit button
    var edit=document.createElement('button')
    var etext=document.createTextNode('edit')
    edit.appendChild(etext)
    edit.setAttribute('onclick','edit(this)')
    edit.setAttribute('class','btn1')
    li.appendChild(edit)
    // console.log(li);
}


function del(e) {
    e.parentNode.remove();
}


function delall() {
    list.innerHTML = ''
}

function edit(e){
    var val=e.parentNode.firstChild.nodeValue
    var edittext=prompt('enter edit value',val)
    e.parentNode.firstChild.nodeValue=edittext
}