export default function createIteratorObject(report) {
  let employees = [];
  Object.entries(report.allEmployees).forEach(([, staff]) => {
    employees = [...employees, ...staff];
  });
  return employees;
}
