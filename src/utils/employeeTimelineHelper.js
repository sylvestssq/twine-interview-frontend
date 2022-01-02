/*
Helper function to transform an array of employee objects into an object with key value pairs.
Key of object is the termination date of employees.
Value of each key is an array of employees which have termination date as the key value.
*/

const getTimelineData = (employees) => {
  const result = {};
  employees.forEach((employee) => {
    if (!Object.prototype.hasOwnProperty.call(result, employee.terminated_date)) {
      result[employee.terminated_date] = [employee];
    } else {
      result[employee.terminated_date].push(employee);
    }
  });
  return result;
};

export default getTimelineData;
