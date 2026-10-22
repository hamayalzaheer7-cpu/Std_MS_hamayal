var students = [];
var edit = -1;

function addStudent(e) {
    var student = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        course: document.getElementById("course").value
    };

    // Add new student or update existing
    if (edit == -1) {
        students.push(student);
    } else {
        students[edit] = student;
        edit = -1;
    }

    // Clear the form after adding or updating
    document.querySelector("form").reset();
    document.getElementById("submitBtn").innerText = "Add Student";

    showStudents();
}

function showStudents() {
    var studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    // Display all students the table
    students.forEach(function(s, i) {
        studentList.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.age}</td>
            <td>${s.course}</td>
            <td>
                <button onclick="editStudent(${i})">Edit</button>
                <button onclick="deleteStudent(${i})">Delete</button>
            </td>
        </tr>`;
    });

    //  number of students
    document.getElementById("totalStudents").innerText = students.length;
}

function editStudent(i) {
    var s = students[i];

    document.getElementById("name").value = s.name;
    document.getElementById("age").value = s.age;
    document.getElementById("course").value = s.course;

    edit = i;

    document.getElementById("submitBtn").innerText = "Update Student";
}

function deleteStudent(i) {
    // Remove the selected student
    students.splice(i, 1);

    // Refresh the table and student count
    showStudents();
}
