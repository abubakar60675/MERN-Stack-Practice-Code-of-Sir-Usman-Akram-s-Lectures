function handleAddNewTodo() {
    console.log("Handling Add New Todo Button");
}

function doBindings() {
    console.log("handle Bindings");
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAddNewTodo;
}