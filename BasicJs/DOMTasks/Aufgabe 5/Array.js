let array = ["rot", "orange", "gelb", "grün", "blau"];

var refresh = function () {
    let list = document.getElementById("ulArrayValues");
    list.innerHTML = "";

    for (var item in array) {
        var listItem = document.createElement("li");
        listItem.innerText = array[item];

        list.appendChild(listItem);
    }
}

refresh();

var addValueToArray = function () {
    var value = document.getElementById("txtNewValue").value;
    document.getElementById("txtNewValue").value = "";
    array.push(value);
    refresh();
}

document.getElementById("btnAdd").addEventListener("click", addValueToArray);