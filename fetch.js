function fetchData(){
   fetch("http://dummy.restapiexample.com/api/v1/employees").then(response =>{
       if (!response.ok){
           throw Error("Error")
       }
    return response.json()
   }).then(data=>{
       console.log(data.data)
       const html=data.data.map(employee =>{
           return`<div class="employee">
           <p>Name: ${employee.employee_name}</p>
           <p>Salary:${employee.employee_salary}</p>
           <p>Age:${employee.employee_age}</p>
           </div>`
       }).join("")
       console.log(html);
       document.querySelector("#app").insertAdjacentHTML("afterbegin",html)
   }).catch(error=>{console.log(error)})
}
fetchData()