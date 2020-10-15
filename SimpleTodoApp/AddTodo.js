var addTodoFunction = function (event) {
    event.preventDefault();

    var todo = document.getElementById("textTodo").value;
    document.getElementById("textTodo").value = "";

    if (todo == "")
        return false;

    var node = document.createElement("li");

    var textnode = document.createElement("label");
    textnode.innerText = todo;

    var checkBoxNode = document.createElement("input");
    checkBoxNode.setAttribute("type", "checkbox");
    
    checkBoxNode.addEventListener("click", function() {
        if(checkBoxNode.checked == true) {
            console.log(textnode);
            textnode.style.textDecoration = 'line-through';
        } else {
            textnode.style.textDecoration = '';
        }
    });
 
    node.appendChild(checkBoxNode);
    node.appendChild(textnode);
    document.getElementById("listTodo").appendChild(node);

    return false;
}

var form = document.getElementById("formCreateTodo");
form.addEventListener("submit", addTodoFunction);