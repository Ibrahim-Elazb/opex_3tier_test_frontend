import React from "react";
import NewProjectForm from "@/components/Projects/NewProject";
import ShowError from "@/components/Error/ShowError";
async function EditProjectPage({ params }) {
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
    //-----------------------------------------------------------------------------------
    const projectResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    const fetchProjectsResponse = await projectResponse.json();
    let projectDetails = null;
    if (fetchProjectsResponse.status == 200) {
      projectDetails = fetchProjectsResponse.data;
    } else {
      return (
        <ShowError
          ErrorMSG={{
            title: "A problem occurred on Backend server",
            details: `Backend server is working, but The Response isn't Success Code (200), 
              The response Code is ${fetchProjectsResponse.status}, 
              and Server message is ${fetchProjectsResponse.message}`,
          }}
        />
      );
    }

    return (
      <NewProjectForm allDepartments={departments} project={projectDetails} />
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

export default EditProjectPage;
