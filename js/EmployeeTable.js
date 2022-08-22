window.addEventListener('DOMContentLoaded', () => {
    createInnerHTML();
});

const createInnerHTML = () => {
    let employeePayrollList = createEmployeePayrollJson();
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
    for(const employeePayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
        <tr>
        <td>
            <img class="profile" alt="profileImage" src="${employeePayrollData._profilePic}">
        </td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>
            ${getDeptHtml(employeePayrollData._department)}
        </td>
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
            <img name="${employeePayrollData._id}" alt="edit" src="../assets/icons/create-black-18dp.svg">
            <img name="${employeePayrollData._id}" alt="delete" src="../assets/icons/delete-black-18dp.svg">
        </td>
    </tr>`;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const createEmployeePayrollJson = () => {
    let employeePayrollList = [
        {
            "id": new Date().getTime() +1,
            "_name": "Rahul Patil",
            "_gender": "Male",
            "_department": [
                "Finance",
                "Engineer"
            ],
            "_salary": "500000",
            "_startDate": "01 Aug 2022",
            "_note": "Welcome!",
            "_profilePic": "../assets/profile-images/Ellipse -3.png"
        },
        {
            "id": new Date().getTime() +1,
            "_name": "Terrisa M",
            "_gender": "Female",
            "_department": [
                "Engineer"
            ],
            "_salary": "500000",
            "_startDate": "20 Aug 2022",
            "_note": "Welcome!",
            "_profilePic": "../assets/profile-images/Ellipse -1.png"
        }
        
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