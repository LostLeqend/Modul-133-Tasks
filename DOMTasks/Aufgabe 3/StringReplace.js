var goFunction = function(){
    var name = document.getElementById("lblName").innerText;

    var newName = "Kunz";
    var oldName = "Hinz";
    name = name.replace(oldName, newName + " geb. " + oldName);
    
    document.getElementById("lblNewName").innerText = name;
};

document.getElementById("btnGo").addEventListener("click", goFunction);