import React from "react";
import ShowEmployees from "@/components/Employees/ShowEmployees";
import ShowError from "@/components/Error/ShowError";

async function ShowEmployeesPage() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/employees`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const fetchEmployeesResponse = await response.json();
    let employees = [];
    if (fetchEmployeesResponse.status == 200) {
      employees = fetchEmployeesResponse.data;
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
    return <ShowEmployees allEmployees={employees} />;
  } catch (error) {
     return (
       <ShowError
         ErrorMSG={{
           title: "Backend API may be down",
           details: "Unable to fetch Employees Information From Backend Server",
         }}
       />
     );
  }
}

export default ShowEmployeesPage;
