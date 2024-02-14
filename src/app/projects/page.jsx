import React from "react";
import ShowProjects from "../../components/Projects/ShowProjects";
import { redirect } from "next/navigation";

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
      redirect("/error-page");
    }
    return <ShowProjects allProjects={projects} />;
  } catch (error) {
    redirect("/error-page");
  }
}

export default ShowProjectsPage;
