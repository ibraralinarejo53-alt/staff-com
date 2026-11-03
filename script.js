let staff = JSON.parse(localStorage.getItem("staff")) || {};

function showSection(id){
    document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

function addStaff(){
    let id = document.getElementById("staffId").value.trim();
    let name = document.getElementById("staffName").value.trim();
    let area = document.getElementById("supportArea").value.trim();
    let msg = document.getElementById("addMsg");

    if(id == ""){
        msg.innerText = "Staff ID can not be empty!";
        msg.style.color = "red";
        return;
    }
    if(staff[id]){
        msg.innerText = "This Staff ID already exist!";
        msg.style.color = "red";
        return;
    }
    if(name == "" || area == ""){
        msg.innerText = "Please fill all fields";
        msg.style.color = "red";
        return;
    }

    staff[id] = [name, area];
    localStorage.setItem("staff", JSON.stringify(staff));
    msg.innerText = "Registered Staff Successfully!";
    msg.style.color = "green";
    
    document.getElementById("staffId").value = "";
    document.getElementById("staffName").value = "";
    document.getElementById("supportArea").value = "";
}

function viewStaff(){
    let list = document.getElementById("staffList");
    list.innerHTML = "";
    if(Object.keys(staff).length == 0){
        list.innerHTML = "<p>No staff yet</p>";
        return;
    }
    for(let id in staff){
        list.innerHTML += `<div class="staff-card"><b>ID:</b> ${id} | <b>Name:</b> ${staff[id][0]} | <b>Area:</b> ${staff[id][1]}</div>`;
    }
}

function searchStaff(){
    let id = document.getElementById("searchId").value.trim();
    let res = document.getElementById("searchResult");
    if(staff[id]){
        res.innerHTML = `Staff ID: ${id} <br> Name: ${staff[id][0]} <br> Support Area: ${staff[id][1]}`;
        res.style.color = "black";
    } else {
        res.innerText = "Staff not found";
        res.style.color = "red";
    }
}