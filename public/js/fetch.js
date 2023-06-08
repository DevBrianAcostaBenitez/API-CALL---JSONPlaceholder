  async function createTable() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    const tableBody = document.getElementById('tableBody');
    data.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.address.city}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  async function getUserDetails() {
      const userIdInput = document.getElementById('userIdInput');
      const userId = userIdInput.value;
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const user = await response.json();
      const userDetails = document.getElementById('userDetails')
      if (user.name !== undefined){
      const userDetails = document.getElementById('userDetails');
      userDetails.innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Phone: ${user.phone}</p>
      `;
      }else{
        userDetails.innerHTML = `
        <p>el usuario no existe</p>
      `;
      }
  }
  const getUserButton = document.getElementById('getUser');
  getUserButton.addEventListener('click', getUserDetails);
  document.addEventListener('DOMContentLoaded', async () => {
    createTable() 
  })