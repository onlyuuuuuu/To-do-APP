var list = [];
var activity = document.getElementById("input");
var todolist = document.getElementById("todolist");
document.getElementById("button").onclick = click;

function click() {
    list.push(activity.value);
    console.log(list);
    input.value = "";
    show();
}

function show() {
    todolist.innerHTML = list.map((item, index) => {
        return `<li>${item}<a onclick="edit_task(${index})">Edit</a><a onclick="delete_task(${index})">&times;</a></li>`;
    }).join('');
}

function delete_task(i) {
    list.splice(i, 1);
    show();
}

function edit_task(i) {
    var newValue = prompt("Please insert your new value");
    list.splice(i, 1, newValue);
    show();
}
