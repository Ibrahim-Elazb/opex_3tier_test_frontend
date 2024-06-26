
import React from "react";
import NewEmployeeForm from "@/components/Employees/NewEmployee";
import ShowError from "@/components/Error/ShowError";
async function NewEmployeesPage() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/departments`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const fetchDepartmentsResponse = await response.json();
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
    return <NewEmployeeForm allDepartments={departments} employee={null} />;
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

export default NewEmployeesPage;
