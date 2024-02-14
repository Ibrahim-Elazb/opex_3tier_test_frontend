import React from "react";
import ShowDepartments from "../../components/Departments/ShowDepartments";
import { redirect } from "next/navigation";

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
      redirect("/error-page");
    }
    return <ShowDepartments allDepartments={departments} />;
  } catch (error) {
    redirect("/error-page");
  }
}

export default ShowDepartmentsPage;
