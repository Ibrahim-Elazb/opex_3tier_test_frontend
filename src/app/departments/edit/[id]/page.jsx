import React from "react";
import NewDepartmentForm from "@/components/Departments/NewDepartment";
import { BACKEND_URL } from "@/utils/links";
import ShowError from "@/components/Error/ShowError";
async function EditDepartmentPage({ params }) {
  try {
    const id = params.id;
    const departmentResponse = await fetch(
      `${BACKEND_URL}/api/departments/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const fetchDepartmentResponse = await departmentResponse.json();
    let departmentDetails = null;
    if (fetchDepartmentResponse.status == 200) {
      departmentDetails = fetchDepartmentResponse.data;
    } else {
      return (
        <ShowError
          ErrorMSG={{
            title: "A problem occurred on Backend server",
            details: `Backend server is working, but The Response isn't Success Code (200), 
              The response Code is ${fetchDepartmentResponse.status}, 
              and Server message is ${fetchDepartmentResponse.message}`,
          }}
        />
      );
    }
    return <NewDepartmentForm department={departmentDetails} />;
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

export default EditDepartmentPage;
