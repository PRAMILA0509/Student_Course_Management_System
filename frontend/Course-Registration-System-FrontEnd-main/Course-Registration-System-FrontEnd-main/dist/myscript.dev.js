"use strict";

function showCourses() {
  fetch("http://localhost:8080/courses") //API End point
  .then(function (response) {
    return response.json();
  }).then(function (courses) {
    var dataTable = document.getElementById("coursetable");
    courses.forEach(function (course) {
      var row = "<tr>\n            <td>".concat(course.courseId, "</td>\n            <td>").concat(course.courseName, "</td>\n            <td>").concat(course.trainerName, "</td>\n            <td>").concat(course.courseDuration, "</td>\n            </tr>");
      dataTable.innerHTML += row;
    });
  });
}

function showEnrolledStudents() {
  fetch("http://localhost:8080/courses/enrolled") //API End point
  .then(function (response) {
    return response.json();
  }) //Http response into json object
  .then(function (students) {
    var dataTable = document.getElementById("enrolledtable");
    students.forEach(function (student) {
      var row = "<tr>\n            <td>".concat(student.name, "</td>\n            <td>").concat(student.emailId, "</td>\n            <td>").concat(student.courseName, "</td>\n            </tr>");
      dataTable.innerHTML += row;
    });
  });
}