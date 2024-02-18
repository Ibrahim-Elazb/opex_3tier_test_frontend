import React from "react";
import ShowDepartments from "../../components/Departments/ShowDepartments";
import { redirect } from "next/navigation";
import ShowError from "@/components/Error/ShowError";

async function ShowDepartmentsPage() {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/departments`, {
      method: "GET",
      cache: "no-store",
    });
    const fetchDepartmentsResponse = await response.json();
    let departments = [];
    if (fetchDepartmentsResponse.status == 200) {
      departments = fetchDepartmentsResponse.data;
    } else {
      // redirect("/error-page");
      return (
        <ShowError
          ErrorMSG={{
            title: "A problem occurred on Backend server",
            details:
              "Backend server is working, but The Response isn't Success Code (200)",
          }}
        />
      );
    }
    return <ShowDepartments allDepartments={departments} />;
  } catch (error) {
    // redirect("/error-page");
     return (
       <ShowError
         ErrorMSG={{
           title: "Backend API may be down",
           details: "Unable to fetch Departments Information From Backend Server",
         }}
       />
     );
  }
}

export default ShowDepartmentsPage;
