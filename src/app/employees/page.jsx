import React from "react";
import ShowEmployees from "../../components/Employees/ShowEmployees";
import { redirect } from "next/navigation";

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
      redirect("/error-page");
    }
    return <ShowEmployees allEmployees={employees} />;
  } catch (error) {
    redirect("/error-page");
  }
}

export default ShowEmployeesPage;
