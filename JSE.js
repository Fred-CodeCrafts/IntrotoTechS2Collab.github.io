let students = [];

function deleteStudent(index) {
    students.splice(index, 1);
    const tableBody = document.querySelector("#studentTableBody");
    tableBody.rows[index].remove();
    showDeleteAlert();
}

function editStudent(index) {
    document.getElementById("box").classList.remove("hidden");

    const student = students[index];

    document.getElementById("nameTemp").value = student.name;
	document.getElementById("studentNumberTemp").value = student.studentNumber;
    document.getElementById("addressTemp").value = student.address;

    const saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", function() {
        saveData(index);
    });
}

function saveData(index) {
    const name = document.getElementById("nameTemp").value;
	const studentNumber = document.getElementById("studentNumberTemp").value;
	const address = document.getElementById("addressTemp").value;

    students[index] = { name, studentNumber, address };

    const tableBody = document.querySelector("#studentTableBody");
    const row = tableBody.rows[index];
    row.cells[0].textContent = name;
	row.cells[1].textContent = studentNumber;
	row.cells[2].textContent = address;

    showEditAlert();

    closeForm();
}

function closeForm() {
    document.getElementById("box").classList.add("hidden");
}

function addStudent() {
    const name = document.getElementById("name").value;
    const studentNumber = document.getElementById("studentNumber").value;
    const address = document.getElementById("address").value;

    if (!studentNumber || !address || !name) {
        showFailureAlert();
        return;
    }

    students.push({ name, address, studentNumber });

    const tableBody = document.querySelector("#studentTableBody");
    const row = tableBody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    const cell4 = row.insertCell();
    const cell5 = row.insertCell();

    cell1.textContent = name;
    cell2.textContent = studentNumber;
    cell3.textContent = address;
    cell4.innerHTML = `<button class="btn btn-primary btn-edit" onclick="editStudent(${students.length - 1})">Edit</button>`;
    cell5.innerHTML = `<button class="btn btn-danger btn-delete" onclick="deleteStudent(${students.length - 1})">Delete</button>`;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);

    document.getElementById("studentForm").reset();
    showSuccessAlert();
}

function showFailureAlert() {
    document.getElementById("failureAlert").style.display = "block";
}

function closeFailureAlert() {
    document.getElementById("failureAlert").style.display = "none";
}

function showSuccessAlert() {
    document.getElementById("successAlert").style.display = "block";
}

function closeSuccessAlert() {
    document.getElementById("successAlert").style.display = "none";
}

function showDeleteAlert() {
    document.getElementById("deleteAlert").style.display = "block";
}

function closeDeleteAlert() {
    document.getElementById("deleteAlert").style.display = "none";
}

function showEditAlert() {
    document.getElementById("editAlert").style.display = "block";
}

function closeEditAlert() {
    document.getElementById("editAlert").style.display = "none";
}
