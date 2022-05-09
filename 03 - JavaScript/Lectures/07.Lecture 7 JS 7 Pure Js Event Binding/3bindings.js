function handleAddNewTodo() {
    console.log("Handling Add New Todo Button");
}

window.onload = function() {
    //do all bindings here 
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAddNewTodo;
}