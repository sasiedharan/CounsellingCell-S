import { useState, useEffect } from "react";
import Axios from 'axios';

const StudentManagement = () => {
  // State for student management
  const [listOfStudents, setListOfStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [counselorId, setCounselorId] = useState("");

  // Function to add a student
  const addStudent = () => {
    if (name === "" || email === "" || department === "" || year === "") {
      alert("Please fill in all fields.");
      return;
    }

    Axios.post('http://localhost:3001/students', {
      name: name,
      email: email,
      department: department,
      year: year,
      counselorId: counselorId,
    })
      .then(() => {
        alert("Student added successfully!");
        fetchStudents();  // Fetch updated list of students after adding a new one
      })
      .catch((error) => {
        console.log("Error adding student:", error);
      });
  };

  // Function to update a student's department
  const updateStudent = (id) => {
    const newDepartment = prompt("Enter new department:");

    if (!newDepartment) {
      alert("Please enter a valid department.");
      return;
    }

    Axios.put("http://localhost:3001/update", { newDepartment: newDepartment, id: id })
      .then(() => {
        alert("Student's department updated successfully!");
        fetchStudents();  // Fetch updated list after updating
      })
      .catch((error) => {
        console.log("Error updating student:", error);
      });
  };

  // Function to delete a student
  const deleteStudent = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
      .then(() => {
        alert("Student deleted successfully!");
        setListOfStudents(listOfStudents.filter((val) => val._id !== id));  // Update the list of students after deleting
      })
      .catch((error) => {
        console.log("Error deleting student:", error);
      });
  };

  // Function to fetch all students from the backend
  const fetchStudents = () => {
    Axios.get('http://localhost:3001/read')
      .then((response) => {
        setListOfStudents(response.data);  // Update the list of students from the backend
      })
      .catch(() => {
        console.log("Error fetching students");
      });
  };

  // Fetch all students when the component loads
  useEffect(() => {
    fetchStudents();  // Fetch data when component mounts
  }, []);

  return (
    <div className="student-management">
      <div className="inputs">
        <input
          type="text"
          placeholder="Student name..."
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="Student email..."
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Department..."
          onChange={(event) => setDepartment(event.target.value)}
        />
        <input
          type="text"
          placeholder="Year..."
          onChange={(event) => setYear(event.target.value)}
        />
        <input
          type="text"
          placeholder="Counselor ID..."
          onChange={(event) => setCounselorId(event.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <div className="listofstudents">
        {listOfStudents.map((val, index) => {
          return (
            <div className="studentcontainer" key={index}>
              <div className="Student">
                <h3>Name: {val.name}</h3>
                <h3>Email: {val.email}</h3>
                <h3>Department: {val.department}</h3>
                <h3>Year: {val.year}</h3>
              </div>
              <button onClick={() => updateStudent(val._id)}>Update Department</button>
              <button id="removeBtn" onClick={() => deleteStudent(val._id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentManagement;
