import React from "react";
import ShowProjects from "@/components/Projects/ShowProjects";
import ShowError from "@/components/Error/ShowError";

async function ShowProjectsPage() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const fetchProjectsResponse = await response.json();
    let projects = [];
    if (fetchProjectsResponse.status == 200) {
      projects = fetchProjectsResponse.data;
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
    return <ShowProjects allProjects={projects} />;
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

export default ShowProjectsPage;
