// Add new todo task to todoList
function addTodo() {
    // TODO: Get the value from todoInput element
   
    var value = document.getElementById("todoInput").value;
    // TODO: Check that input value was provided
    if (value=="")
    {
        return null;
    }
    // TODO: Get todoList element from html and assign it to variable
    var todolist = document.getElementById("todoList");

    // TODO: Create new li element and assign it to variable
    var li = document.createElement("li");

    // TODO: Assing the todoInput value to the textConten
    var voo = document.createTextNode(value);
    li.appendChild(voo);
    

    // TODO: Create completed button to set the task to done, createElement
    var taskdonebutton = document.createElement("button");

    // TODO: Add text to the completed button using textContent
    taskdonebutton.textContent = "done";

    // TODO: Add onclick method to the completed button, that changes the background color of the todo item
    taskdonebutton.addEventListener("click", function(e){
       taskdonebutton.style.backgroundColor = taskdonebutton.style.backgroundColor == "green" ? "" : "green"
    }  );
    // Below is one way to change the background color using ternary logic
    //todoListItem.style.backgroundColor = todoListItem.style.backgroundColor == "green" ? "" : "green";
    

    // TODO: Add created done button to new todo list item
    todolist.appendChild(li);
    li.appendChild(taskdonebutton);
    // TODO: Add new todo list item to todoList

    // TODO: Set todoInput value to empty string
    document.getElementById("todoInput").value = "";
}

// Extra assingment -> try to find a way to remove all completed todo items
// hint -> you might need to use additional list variable