window.addEventListener('load', ()=> {
    const todoList = [];
    const actionDisplayList = document.getElementById("actionDisplayList");
    const actionAddListItem = document.getElementById("actionAddListItem");
    const actionPrintList = document.getElementById("actionPrintList");
    const listHolder = document.getElementById("listHolder");
    
    actionDisplayList.addEventListener('click', ()=>{
        todoList.push("Wash car");
        todoList.push("Wash dog");
        todoList.push("Get groceries");
        todoList.push("Do INFO 2134 homework");
        rebuildList(todoList);

    });
    actionAddListItem.addEventListener('click', ()=> {
        let newItem = prompt("Please enter a new list item");
        todoList.push(newItem);
        rebuildList(todoList);
    });
    actionPrintList.addEventListener('click', ()=>{
        try{
        printToDoList();
        } catch(error){
            console.log("The printToDoList function has not been implemented yet.");
        }
    });

    function rebuildList(listItems) {
        listHolder.innerHTML = '';
        for(let i = 0; i < listItems.length; i++) {
            let listItem = document.createElement('li');
            listItem.innerHTML = listItems[i];
            listHolder.appendChild(listItem);
        }
    }

});

