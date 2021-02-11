function showDataUsers(index){
    let getTable = document.getElementById('table-user')

    let getTbody = getTable.getElementsByTagName('tbody')[0]

    let tr =''

    for(let i = 0; i<dataUsers.length; i++){
        if(i == index){
            tr += `
            <tr>
                <td>
                    <center>${i+1}</center>
                </td>
                <td>
                    <center><input type="text" name="product-name" value="${dataUsers[index].username}" class="input-edit-users"></center>
                </td>
                <td>
                    <center><input type="text" name="product-price" value="${dataUsers[index].email}" class="input-edit-users"></center>
                </td>
                <td>
                    <center><input type="text" name="product-stock" value="${dataUsers[index].role}" class="input-edit-users"></center>
                </td>
                <td>
                    <center>
                    <input type="button" name="button-edit" value="Save" onClick ="onSaveUsers(${index})">
                    <input type="button" name="button-delete" value="Cancel" onclick ="showDataUsers()">
                    </center>
                </td>
            </tr>
        `
        }else{
            tr += `
            <tr>
                <td>
                    <center>${i+1}</center>
                </td>
                <td>
                    <center>${dataUsers[i].username}</center>
                </td>
                <td>
                    <center>${dataUsers[i].email}</center>
                </td>
                <td>
                    <center>${dataUsers[i].role}</center>
                </td>
                <td>
                    <center>
                    <input type="button" name="button-edit" value="Edit" onClick="editUser(${i})">
                    <input type="button" name="button-delete" value="Delete" onClick="deleteUser(${i})">
                    </center>
            </tr>
            `
        }
    }
    getTbody.innerHTML = tr
}

showDataUsers()

function editUser(i){
    let confirmBox = confirm(`Are you sure want to edit ${dataUsers[i].username}`)

    if(confirmBox == true){
        showDataUsers(i)
    }
}

function onSaveUsers(index){
    let inputs = document.getElementsByClassName('input-edit-users')

    let user = inputs[0].value
    let email = inputs[1].value
    let role = inputs[2].value

   if(user && email && role){
       dataUsers[index].username = user
       dataUsers[index].email = email
       dataUsers[index].role = role

       alert('Edit data berhasil')

       showDataUsers()
   }

}

function addDataUser(){
    let inputs = document.getElementsByClassName('input-users')
    let selected = document.getElementById('pilih').value
    console.log(inputs)
  
    
    
    let user = inputs[0].value
    let email = inputs[1].value


    if(user && email){
        dataUsers.push({
            username: user,
            email: email,
            role: selected
        })

        showDataUsers()

        inputs[0].value = ''
        inputs[1].value = ''
    }
}

document.getElementById('tombol').addEventListener('click', addDataUser)

function deleteUser(i){
    let confirmBox = confirm(`Are you sure want to delete ${dataUser[i].name}?`)

    if(confirmBox){ //shortcut == true
        dataUsers.splice(i,1)
        alert ('Product successfully deleted')
    }

    showDataUsers()
}