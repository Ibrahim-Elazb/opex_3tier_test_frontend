import React from "react";
import NewEmployeeForm from "@/components/Employees/NewEmployee";
import ShowError from "@/components/Error/ShowError";
async function EditEmployeesPage({ params }) {
  try {
    const id = params.id;

    const departmentResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/departments`, {
      method: "GET",
      cache: "no-store",
    });
    const fetchDepartmentsResponse = await departmentResponse.json();
    let departments = [];
    if (fetchDepartmentsResponse.status == 200) {
      departments = fetchDepartmentsResponse.data;
    } else {
      return (
        <ShowError
          ErrorMSG={{
            title: "A problem occurred on Backend server",
            details: `Backend server is working, but The Response isn't Success Code (200), 
              The response Code is ${fetchDepartmentsResponse.status}, 
              and Server message is ${fetchDepartmentsResponse.message}`,
          }}
        />
      );
    }
    //--------------------------------------------------------------------------------------
    const employeeResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/employees/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    const fetchEmployeesResponse = await employeeResponse.json();
    let employeeDetails = null;
    if (fetchEmployeesResponse.status == 200) {
      employeeDetails = fetchEmployeesResponse.data;
    } else {
      return (
        <ShowError
          ErrorMSG={{
            title: "A problem occurred on Backend server",
            details: `Backend server is working, but The Response isn't Success Code (200), 
              The response Code is ${fetchEmployeesResponse.status}, 
              and Server message is ${fetchEmployeesResponse.message}`,
          }}
        />
      );
    }
    return (
      <NewEmployeeForm
        allDepartments={departments}
        employee={employeeDetails}
      />
    );
  } catch (error) {
    return (
      <ShowError
        ErrorMSG={{
          title: "Backend API may be down",
          details:
            "Unable to fetch Departments Information From Backend Server",
        }}
      />
    );
  }
}

export default EditEmployeesPage;
