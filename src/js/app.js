const asyncGetCall = async () => {
  try {
    const response = await fetch("http://localhost:8080/users");
    const data = await response.json();
    data.forEach((user) => {
      document.querySelector("tbody").innerHTML += `
                <tr>
                
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.surname}</td>
                    <td>${user.Type}</td>
                    <td>${user.Invoice}</td>
                    <td>${user.cardNumber} </td>
                    
                    
                </tr>`;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

asyncGetCall();
