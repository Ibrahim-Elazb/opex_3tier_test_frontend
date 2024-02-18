import React from "react";
import ShowEmployees from "../../components/Employees/ShowEmployees";
import { redirect } from "next/navigation";
import ShowError from "@/components/Error/ShowError";

async function ShowEmployeesPage() {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/employees`, {
      method: "GET",
      cache: "no-store",
    });
    const fetchEmployeesResponse = await response.json();
    let employees = [];
    if (fetchEmployeesResponse.status == 200) {
      employees = fetchEmployeesResponse.data;
    } else {
      // redirect("/error-page");
      return (
        <ShowError
          ErrorMSG={{
            title: "A problem occurred on Backend server",
            details: "Backend server is working, but The Response isn't Success Code (200)",
          }}
        />
      );
    }
    return <ShowEmployees allEmployees={employees} />;
  } catch (error) {
    // redirect("/error-page");
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
