let dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let todaysDay = dayArray [new Date().getDay()];
document.getElementById('day').innerHTML = todaysDay + ', ';
let todaysMonth = monthArray [new Date().getMonth()];
document.getElementById('month').innerHTML = todaysMonth;
document.getElementById('date').innerHTML = [new Date().getDate()] + ', ';
document.getElementById('year').innerHTML = [new Date().getFullYear()];

let listNumber = 0;
let taskNumber = 0;
$('#addListInput').focus();

let masterList = retrieveLocalStorage() || new AllLists();

displayLists();

function displayLists() {
    if(localStorage.data) {
        let savedStuff = JSON.parse(localStorage.data);
        let myListTitle = $('#addListInput').val();

        for(let l = 0; l < localStorage.data.length; l++) {
            masterList.add(savedStuff[l].myListTitle);
            $('#list').append("<div class='listBox'>" +
                "<div class='listTitle' contenteditable='true'>" + myListTitle + "</div>" +
                "<input type='text' id='addTaskInput" + listNumber + "' placeholder='Add Tasks Here' onkeyup='addTaskButton(event," + listNumber + ")'>" +
                "<button class='btn btn-outline-secondary' onclick='addTask(" + listNumber + ")'>+</button>" +
                "<div class='taskBox' id='taskBoxId" + listNumber + "'></div>" +
                "<i onclick='deleteTask(this)' class=\"far fa-trash-alt\"</i>" +
                "</div>");

            let myTask = $('#addTaskInput').val();
            for (let i = 0; i < savedStuff[l].collection.length; i++) {
               masterList.collection[l].add(savedStuff[l].collection[i].name, savedStuff[l].collection[i].completed)
                $('#taskBoxId').append("<div class='eachTask'>" +
                    "<input onclick='completedTask(" + taskNumber + ")' id='checkboxChecked'" + taskNumber + " type='checkbox'>" +
                    "<span contenteditable='true'>" + myTask + "</span>" +
                    "<span><i onclick='deleteTask(this)' class='far fa-trash-alt taskTrash'></i></span>" +
                    "</div>");
            }
        }
    }
}

function addList() {
    let myListTitle = $('#addListInput').val();

    $('#list').append("<div class='listBox'>" +
        "<div class='listTitle' contenteditable='true'>" + myListTitle + "</div>" +
        "<div class='toptaskbox'><input type='text' id='addTaskInput" + listNumber + "' placeholder='Add Tasks Here' onkeyup='addTaskButton(event," + listNumber + ")'>" +
        "<button class='btn btn-outline-secondary' onclick='addTask(" + listNumber + ")'>+</button></div>" +
        "<div class='taskBox' id='taskBoxId" + listNumber + "'></div>" +
        "<i onclick='deleteTask(this)' class=\"far fa-trash-alt\"</i>" +
        "</div>");
    masterList.add($('#addListInput').val());
    $('#addListInput').val("");
    $('#addTaskInput').focus();
    listNumber++;
    saveLocalStorage();

}

function addTask(id) {
    let myTask = $('#addTaskInput' + id).val();
    $('#taskBoxId' + id).append("<div class='eachTask'>" +
        "<div><input onclick='completedTask(" + id + ", " + taskNumber + ")' id='checkboxChecked'" + taskNumber + " type='checkbox'>" +
        "<span contenteditable='true'>" + myTask + "</span></div>" +
        "<i onclick='deleteTask(this)' class=\"far fa-trash-alt\"></i>" +
        "</div>");
    masterList.collection[id].add($('#addTaskInput' + id).val());
    $('#addTaskInput' + id).val("");
    taskNumber++;
    saveLocalStorage();

}

function addButton(event) {
    switch (event.key) {
        case 'Enter':
            addList();
            break;
    }
}

function addTaskButton(event, id) {
    switch (event.key) {
        case 'Enter':
            addTask(id);
            break;
    }
}

function saveLocalStorage() {
    localStorage.setItem('data', JSON.stringify(masterList.collection));

}

function retrieveLocalStorage() {
    let pageText = localStorage.getItem('data');
    let lists = JSON.parse(pageText);
    let newAllLists = new AllLists();

    if (lists) {

        lists.forEach(list => {
            let newSingleList = new SingleList();
            newSingleList.name = list.name;
            newSingleList.collection = list.collection;
            newAllLists.collection.push(newSingleList);
        });
    }

    return newAllLists;
}

function deleteTask(element) {
    $(element).parent().slideUp('slow', function() {
        $(element).parent().remove();
    });
}

function completedTask(listIndex, taskIndex) {
    if ($('#checkboxChecked').prop('checked')) {
        masterList.collection[listIndex].collection[taskIndex].completed = true;
    }

}

function clearCompleted() {
    if (masterList.collection[listIndex].collection[taskIndex].completed === true) {
        $(this).remove();
    }
}

