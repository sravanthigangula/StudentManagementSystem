function results()
{
    let id=document.getElementById("rollno").value
    let results=fetch(`http://localhost:3000/studentdata/${id}`).then(response=>response.json()).then(data=>
        {
            temp=JSON.stringify(data)
            document.getElementById("result").innerHTML=data.marks
            console.log(temp.marks)
        }
    ).catch(error => {
        // Handle errors
        console.error('Error:', error.message);
        alert('An error occurred while fetching data');
    });
}
function include()
{
    let id=document.getElementById("post-id").value
    let name=document.getElementById("post-name").value
    let marks=document.getElementById("post-marks").value
    
let data = {
    id: id,
    name: name,
    marks: marks
};

let db = fetch(`http://localhost:3000/studentdata`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(response=>response.json).then(()=>
{
    document.getElementById("2").innerHTML="data successfully posted"
}).catch(error=>{
    alert('An error occured while posting data')
});
    
}
function update()
{
    let id=document.getElementById("update-id").value
    let marks=document.getElementById("update-marks").value
    let data ={
        marks:marks
    };
    let db=fetch(`http://localhost:3000/studentdata/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response=>response.json).then(()=>
    {
        document.getElementById("3").innerHTML="data successfully updated"
    }).catch(error=>{
        alert('An error occured while updating data')
    });
}
function deletion()
{
    let id=document.getElementById("delete-id").value
    fetch(`http://localhost:3000/studentdata/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response=>response.json).then(()=>
    {
        document.getElementById("4").innerHTML="data successfully deleted"
    }).catch(error=>{
        alert('An error occured while deleting data')
    });
}