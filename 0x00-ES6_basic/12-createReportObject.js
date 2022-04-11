export default function createReportObject(employeesList) {
  const result = {
    allEmployees: employeesList,
    getNumberOfDepartments: () => Object.keys(result.allEmployees).length,
  };
  return result;
}
