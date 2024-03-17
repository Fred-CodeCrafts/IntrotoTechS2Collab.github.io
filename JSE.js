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
		        const name = prompt("Enter the updated name:", student.name);

        const studentNumber = prompt("Enter the updated student number:", student.studentNumber);
        const address = prompt("Enter the updated address:", student.address);

        if ( !name || !studentNumber || !address) {
            alert("Please fill in all fields before editing the student.");
            return;
        }

        students[index] = { name, studentNumber, address };

        const tableBody = document.querySelector("#studentTableBody");
        const row = tableBody.rows[index];
		row.cells[0].textContent = name;
        row.cells[1].textContent = studentNumber;
        row.cells[2].textContent = address;
        alert("Student edited successfully.");
    }

    function addStudent() {
		const name = document.getElementById("name").value;
        const studentNumber = document.getElementById("studentNumber").value;
        const address = document.getElementById("address").value;

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

		cell1.textContent = name;
        cell2.textContent = studentNumber;
        cell3.textContent = address;
        cell4.innerHTML = `<button class="btn btn-primary btn-edit" onclick="editStudent(${students.length - 1})">Edit</button>`;
        cell5.innerHTML = `<button class="btn btn-danger btn-delete" onclick="deleteStudent(${students.length - 1})">Delete</button>`;

        document.getElementById("studentForm").reset();
        alert("Student added successfully.");
    }