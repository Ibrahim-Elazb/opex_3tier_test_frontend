import React from 'react'
import NewEmployeeForm from "../../../components/Employees/NewEmployee"
import { redirect } from "next/navigation";
async function NewEmployeesPage() {
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
    return <NewEmployeeForm allDepartments={departments} employee={null} />;
  } catch (error) {
    redirect("/error-page");
  }
}

export default NewEmployeesPage