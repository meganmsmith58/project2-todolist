
let dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let todaysDay = dayArray [new Date().getDay()];
document.getElementById('day').innerHTML = todaysDay + ', ';
let todaysMonth = monthArray [new Date().getMonth()];
document.getElementById('month').innerHTML = todaysMonth;
document.getElementById('date').innerHTML = [new Date().getDate()] + ', ';
document.getElementById('year').innerHTML = [new Date().getFullYear()];

listNumber = 0;
$('#addListInput').focus();
let taskArray = [];


function addList() {
    let myListTitle = $('#addListInput').val();
    listNumber++;
    $('#list').append("<div class='listBox'>" +
        "<div class='listTitle' contenteditable='true'>" + myListTitle + "</div>" +
        "<input type='text' id='addTaskInput" + listNumber +"' placeholder='Add Tasks Here' onkeyup='addTaskButton(event," + listNumber +")'>" +
        "<button class='btn btn-outline-secondary' onclick='addTask(" + listNumber +")'>+</button>" +
        "<div class='taskBox' id='taskBoxId" + listNumber +"'></div>" +
        "<i onclick='deleteTask(this)' class=\"far fa-trash-alt\"</i>" +
        "</div>");
    $('#addListInput').val("");
    $('#addTaskInput').focus();

}


//" + listNumber +"

function addTask(id) {
    let myTask = $('#addTaskInput' + id).val();
    $('#taskBoxId' + id).append("<div class='eachTask'>" +
        "<input type='checkbox'>" +
        "<span contenteditable='true'>" + myTask + "</span>" +
        "<i onclick='deleteTask(this)' class=\"far fa-trash-alt\"></i>" +
        "</div>");
    $('#addTaskInput' + id).val("");
    taskArray.push(myTask);
}

function addButton(event) {
    switch(event.keyCode) {
        case 13:
            addList();
            break;
    }
}

function addTaskButton(event, id) {
    switch(event.keyCode) {
        case 13:
            addTask(id);
            break;
    }
}

function deleteTask(element) {
  //  $(element).parent().fadeOut('slow', function() {
        $(element).parent().remove();
   // });

}


//"<input type='text' class='taskInput' onkeyup='addButton(event)'>" +


//

//"<i onclick='' class=\"far fa-plus-square\"></i>" +