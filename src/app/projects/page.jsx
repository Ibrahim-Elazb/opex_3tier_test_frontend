import React from "react";
import ShowProjects from "../../components/Projects/ShowProjects";
import { redirect } from "next/navigation";
import ShowError from "@/components/Error/ShowError";

async function ShowProjectsPage() {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/projects`, {
      method: "GET",
      cache: "no-store",
    });
    const fetchProjectsResponse = await response.json();
    let projects = [];
    if (fetchProjectsResponse.status == 200) {
      projects = fetchProjectsResponse.data;
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
    return <ShowProjects allProjects={projects} />;
  } catch (error) {
    // redirect("/error-page");
    return (
      <ShowError
        ErrorMSG={{
          title: "Backend API may be down",
          details: "Unable to fetch Projects Information From Backend Server",
        }}
      />
    );
  }
}

export default ShowProjectsPage;
