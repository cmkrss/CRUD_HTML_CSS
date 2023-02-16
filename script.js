var selectedRow = null;

function onFormSubmit() {
        var formData = readFormData();
        if (selectedRow == null)
            {console.log(formData);
            insertNewRecord(formData);}
        else
            updateRecord(formData);
        resetForm();
}
function readFormData() {
    var formData = {};
    formData["sno"] = TotalCount();
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["mailID"] = document.getElementById("mailID").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mailID;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button onClick="onEdit(this)" >Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`
}
// function resetForm() {
//     document.getElementById("firstname").value = "";
//     document.getElementById("lastname").value = "";
//     document.getElementById("mailID").value = "";
//     selectedRow = null;
// }
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mailID").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {

    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.mailID;

}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function DateTime() {
    let newDate = new Date();
    let hours = newDate.getHours();
    let minutes = newDate().getMinutes();
    let year = newDate.getFullYear(); 
    let month = newDate.getMonth();
    let todaySDate = newDate.getDate();
    
}

function TotalCount() {
    var allTableData = document.getElementById("employeeList");
    var totalNumbeOfRows = allTableData.rows.length;
    console.log("Total Number Of Rows="+totalNumbeOfRows);
    // var a = document.getElementById("employeeList");
    // var count = a.count.length;
    // alert(cou)
}

