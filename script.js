
let dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//let dateArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

let todaysDay = dayArray [new Date().getDay()];
document.getElementById('day').innerHTML = todaysDay + ', ';
let todaysMonth = monthArray [new Date().getMonth()];
document.getElementById('month').innerHTML = todaysMonth;
//let todaysDate = dateArray [new Date().getDate()];
document.getElementById('date').innerHTML = [new Date().getDate()] + ', ';
document.getElementById('year').innerHTML = [new Date().getFullYear()];


function addList() {
    let myListTitle = $('#addListInput').val();
    $('#list').append("<div class='listTitle'>" +
        "<span contenteditable='true'>" + myListTitle + "</span>" +
        "<input type='text' id='addTaskInput' placeholder='Add Tasks Here' onkeyup='addTaskButton(event)'>" +
        "<button onclick='addTask()'>+</button>" +
        "<div class='taskBox'></div>" +
        "</div>");
    $('#addListInput').val("");

}

function addTask() {
    let myTask = $('#addTaskInput').val();
    $('.taskBox').append("<div class='eachTask'>" +
        "<input type='checkbox'>" +
        "<span contenteditable='true'>" + myTask + "</span> " +
        "<i class=\"far fa-trash-alt\"></i>" +
        "</div>");
    $('#addTaskInput').val("");
}

function addButton(event) {
    switch(event.keyCode) {
        case 13:
            addList();
            break;
    }
}
function addTaskButton(event) {
    switch(event.keyCode) {
        case 13:
            addTask();
            break;
    }
}



//"<input type='text' class='taskInput' onkeyup='addButton(event)'>" +


//

//"<i onclick='' class=\"far fa-plus-square\"></i>" +