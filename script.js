
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

retrieveLocalStorage();

displayText();
function displayText() {
    const savedstuff = $('.list');
    savedstuff.html('');
    for (let i = 0; i < masterList.length; i++) {
        savedstuff.append(`<div>${masterList[i]}</div>`);
    }
}

function addList() {
    let myListTitle = $('#addListInput').val();

    $('#list').append("<div class='listBox'>" +
        "<div class='listTitle' contenteditable='true'>" + myListTitle + "</div>" +
        "<input type='text' id='addTaskInput" + listNumber +"' placeholder='Add Tasks Here' onkeyup='addTaskButton(event," + listNumber +")'>" +
        "<button class='btn btn-outline-secondary' onclick='addTask(" + listNumber +")'>+</button>" +
        "<div class='taskBox' id='taskBoxId" + listNumber +"'></div>" +
        "<i onclick='deleteTask(this)' class=\"far fa-trash-alt\"</i>" +
        "</div>");
    masterList.add( $('#addListInput').val());
    $('#addListInput').val("");
    $('#addTaskInput').focus();
    listNumber++;
    saveLocalStorage();

}

function addTask(id) {
    let myTask = $('#addTaskInput' + id).val();
    $('#taskBoxId' + id).append("<div class='eachTask'>" +
        "<input onclick='completedTask()' id='checkboxChecked' type='checkbox'>" +
        "<span contenteditable='true'>" + myTask + "</span>" +
        "<i onclick='deleteTask(this)' class=\"far fa-trash-alt\"></i>" +
        "</div>");
    masterList.collection[id].add( $('#addTaskInput' + id).val());
    $('#addTaskInput' + id).val("");
    saveLocalStorage();

}

function addButton(event) {
    switch(event.key) {
        case 'Enter':
            addList();
            break;
    }
}

function addTaskButton(event, id) {
    switch(event.key) {
        case 'Enter':
            addTask(id);
            break;
    }
}

function completedTask () {
    document.getElementById('checkboxChecked').checked = true;
}

function saveLocalStorage() {
    localStorage.setItem('data', JSON.stringify(masterList.collection));
    retrieveLocalStorage();
}

function retrieveLocalStorage() {
    let pageText = localStorage.getItem('data');
    return JSON.parse(pageText);
}

function deleteTask(element) {
  //  $(element).parent().fadeOut('slow', function() {
        $(element).parent().remove();
   // });

}


//"<input type='text' class='taskInput' onkeyup='addButton(event)'>" +


//

//"<i onclick='' class=\"far fa-plus-square\"></i>" +