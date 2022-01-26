var input_text = document.querySelector("input[name='todo_input']")
var btn = document.querySelector("button");
var list_div = document.querySelector(".todos")

btn.addEventListener("click", addToList);
input_text.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        addToList(e);
    }
});
var countItems = 0
function addToList(){
    var text = input_text.value;
    if (text === null || text === ""){
        alert("Please enter an item!!")
    }
    else{
        var node = document.createElement("p");
        var textNode = document.createTextNode(text);
        node.setAttribute("key", countItems);
        node.appendChild(textNode);
        list_div.appendChild(node);
        input_text.value = ""; input_text.focus();
        countItems += 1;
        // adding delete button
        /* var del = document.createElement("img");
        del.setAttribute("src", "./delete_icon.png")
        node.appendChild(del); */
    }
}

// To remove list item on click
list_div.addEventListener("click", removeItem);
function removeItem(e){
    list_div.removeChild(e.target);
}

/* var input=document.querySelector("input[name='todo_input']")
var addBtn=document.querySelector("button")
var innerDiv=document.querySelector(".todos")
var count=0
addBtn.addEventListener('click',function(){
    innerDiv.innerHTML+='<p key='+count+'>'+input.value+'</p>'
    count+=1
})
innerDiv.addEventListener("click", removeFunction)
function removeFunction(e){
    // removeTag=document.querySelector("p[key='"+count+"']")
    console.log(e.target)
    innerDiv.removeChild(e.target);
} */

/* var input=document.querySelector("input[name='todo_input']")
var addBtn=document.querySelector("button")
var innerDiv=document.querySelector(".todos")
var count=0
addBtn.addEventListener('click',function(){
    innerDiv.innerHTML+='<p key='+count+' onclick=removeFunction('+count+')>'+input.value+'</p>'
    count+=1
})
function removeFunction(count){
    removeTag=document.querySelector("p[key='"+count+"']")
    console.log(removeTag)
    removeTag.remove()
} */