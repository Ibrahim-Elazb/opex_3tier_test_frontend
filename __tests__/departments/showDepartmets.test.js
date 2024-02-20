import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShowDepartments from '../../src/components/Departments/ShowDepartments';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { departments } from "../../mocks/handlers/dummy-data/departments"

describe('Show Departments', () => {
it('renders without crashing', () => {
    render(<ShowDepartments allDepartments={departments}/>);
    expect(screen.getByRole('link', { name: 'Add New Department' })).toBeInTheDocument();
    expect(screen.getAllByTestId("department-table-row")).toHaveLength(5)
});
})