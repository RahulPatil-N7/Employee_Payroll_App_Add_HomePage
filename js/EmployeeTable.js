let employeePayrollList;
window.addEventListener('DOMContentLoaded', () => {
    employeePayrollList = getEmployeeDataFromStorage();
    document.querySelector('.emp-count').textContent = employeePayrollList.length;
    createInnerHTML();
});

const getEmployeeDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList')
        ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHTML = () => {
    if (employeePayrollList.length == 0) return;
    const headerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>`;

    let innerHtml = `${headerHtml}`;
    for (const employeePayrollData of employeePayrollList) {
        innerHtml = `${innerHtml}
        <tr>
        <td>
            <img class="profile" alt="profile" src="${employeePayrollData._profilePic}">
        </td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>
            ${getDeptHtml(employeePayrollData._department)}
        </td>
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
            <img name="${employeePayrollData._id}" onclick="update(this)" alt="edit" 
            src="../assets/icons/create-black-18dp.svg">
            <img name="${employeePayrollData._id}" onclick="remove(this)" alt="delete" 
            src="../assets/icons/delete-black-18dp.svg">
        </td>
    </tr>`;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const createEmployeePayrollJson = () => {
    let employeePayrollList = [
        
    ];
    return employeePayrollList;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}