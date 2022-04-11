export default function createIteratorObject(report) {
  let employees = [];
  Object.entries(report.allEmployees).forEach(([_, staff]) => {
    employees = [...employees, ...staff];
  });
  return employees;
}
