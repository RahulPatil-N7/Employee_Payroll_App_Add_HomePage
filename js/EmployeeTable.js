window.addEventListener('DOMContentLoaded', () => {
    createInnerHTML();
});

const createInnerHTML = () => {
    const innerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td>
            <img class="profile" src="../assets/profile-images/Ellipse -2.png" alt="">
        </td>
        <td>Rahul Patil</td>
        <td>Male</td>
        <td>
            <div class="dept-label">Engineer</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>500000</td>
        <td>1 Nov 2022</td>
        <td>
            <img id="1" onclick="remove(this)"
                src="../assets/icons/delete-black-18dp.svg"
                alt="delete">
            <img id="1" onclick="update(this)"
                src="../assets/icons/create-black-18dp.svg" alt="edit">
        </td>
    </tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
}