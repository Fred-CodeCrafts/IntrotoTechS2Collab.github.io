let students = [];

    function deleteStudent(index) {
        const result = confirm("Are you sure you want to delete this student?");
        if (result) {
            students.splice(index, 1);
            const tableBody = document.querySelector("#studentTableBody");
            tableBody.rows[index].remove();
            alert("Student deleted successfully.");
        }
    }

    function editStudent(index) {
        const student = students[index];
        const studentNumber = prompt("Enter the updated student number:", student.studentNumber);
        const address = prompt("Enter the updated address:", student.address);
        const name = prompt("Enter the updated name:", student.name);

        if (!studentNumber || !address || !name) {
            alert("Please fill in all fields before editing the student.");
            return;
        }

        students[index] = { studentNumber, address, name };

        const tableBody = document.querySelector("#studentTableBody");
        const row = tableBody.rows[index];
        row.cells[0].textContent = studentNumber;
        row.cells[1].textContent = address;
        row.cells[2].textContent = name;
        alert("Student edited successfully.");
    }

    function addStudent() {
        const studentNumber = document.getElementById("studentNumber").value;
        const address = document.getElementById("address").value;
        const name = document.getElementById("name").value;

        if (!studentNumber || !address || !name) {
            alert("Failed to add student. Please fill in all fields.");
            return;
        }

        students.push({ studentNumber, address, name });

        const tableBody = document.querySelector("#studentTableBody");
        const row =tableBody.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        const cell3 = row.insertCell();
        const cell4 = row.insertCell();
        const cell5 = row.insertCell();

        cell1.textContent = studentNumber;
        cell2.textContent = address;
        cell3.textContent = name;
        cell4.innerHTML = `<button class="btn btn-primary btn-edit" onclick="editStudent(${students.length - 1})">Edit</button>`;
        cell5.innerHTML = `<button class="btn btn-danger btn-delete" onclick="deleteStudent(${students.length - 1})">Delete</button>`;

        document.getElementById("studentForm").reset();
        alert("Student added successfully.");
    }