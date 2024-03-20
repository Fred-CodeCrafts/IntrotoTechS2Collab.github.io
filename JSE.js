let students = [];

function deleteStudent(studentId) {
    const index = students.findIndex(student => student.id === studentId);
    if (index !== -1) {
        students.splice(index, 1);
        const row = document.querySelector(`tr[data-id="${studentId}"]`);
        if (row) {
            row.remove();
        }
        showDeleteAlert();
    } else {
        console.error(`Student with ID ${studentId} not found.`);
    }
}

function editStudent(studentId) {
    document.getElementById("box").classList.remove("hidden");

    const student = students.find(student => student.id === studentId);

    if (student) {
        document.getElementById("nameTemp").value = student.name;
        document.getElementById("studentNumberTemp").value = student.studentNumber;
        document.getElementById("addressTemp").value = student.address;

        const saveButton = document.getElementById("saveButton");
        saveButton.addEventListener("click", function() {
            saveData(studentId);
        });
    } else {
        console.error(`Student with ID ${studentId} not found.`);
    }
}

function saveData(studentId) {
    const name = document.getElementById("nameTemp").value;
    const studentNumber = document.getElementById("studentNumberTemp").value;
    const address = document.getElementById("addressTemp").value;

    const index = students.findIndex(student => student.id === studentId);

    if (index !== -1) {
        students[index] = { id: studentId, name, studentNumber, address };

        const tableBody = document.querySelector("#studentTableBody");
        const row = document.querySelector(`tr[data-id="${studentId}"]`);
        if (row) {
            row.cells[0].textContent = name;
            row.cells[1].textContent = studentNumber;
            row.cells[2].textContent = address;
        }

        showEditAlert();
        closeForm();
    } else {
        console.error(`Student with ID ${studentId} not found.`);
    }
}

function addStudent() {
    const name = document.getElementById("name").value;
    const studentNumber = document.getElementById("studentNumber").value;
    const address = document.getElementById("address").value;

    if (!studentNumber || !address || !name) {
        showFailureAlert();
        return;
    }

    const id = Date.now().toString();
    students.push({ id, name, address, studentNumber });

    const tableBody = document.querySelector("#studentTableBody");
    const row = tableBody.insertRow();
    row.setAttribute("data-id", id);
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    const cell4 = row.insertCell();
    const cell5 = row.insertCell();

    cell1.textContent = name;
    cell2.textContent = studentNumber;
    cell3.textContent = address;
    cell4.innerHTML = `<button class="btn btn-primary btn-edit" onclick="editStudent('${id}')">Edit</button>`;
    cell5.innerHTML = `<button class="btn btn-danger btn-delete" onclick="deleteStudent('${id}')">Delete</button>`;

    document.getElementById("studentForm").reset();
    showSuccessAlert();
}

function closeForm() {
    document.getElementById("box").classList.add("hidden");
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
