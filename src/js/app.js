const asyncGetCall = async () => {
  
        const response = await fetch('http://localhost:8080/users');
         const data = await response.json();
         console.log(data);
     
    }


  asyncGetCall();
  fetch("http://localhost:8080/users")
  then((res)=> res.json())
  then((data)=>{
    document.querySelector("tbody").innerHTML+=`<tr>
    <td>12354</td>
    <td>sdadsa</td>
    <td>dsad</td>
    <td>pervin</td>
    <td>ehmedov</td>
    <td>025</td>
</tr>`
  })