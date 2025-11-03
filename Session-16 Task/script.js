var list = document.querySelector("#list-id");
var Item = document.querySelectorAll("#item");
var form = document.querySelector("#form-id");
var firstName = document.querySelector("#first-name");
var lastName = document.querySelector("#last-name");
var tBodyId = document.querySelector("#t-body-id");
var submitBtn = document.querySelector("#submit-btn");
var updateBtn = document.querySelector("#update-btn");
var allData = [];


Item.forEach(function(item) {
    item.addEventListener("click", function(e) {
        Item.forEach(function(item) {
            item.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})

// function setActiveItem(e) {
//   Item.forEach(function (item) {
//     item.classList.remove("active");
//   });
//   e.classList.add("active");
// }

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    firstName: firstName.value,
    lastName: lastName.value,
  };
  allData.push(obj);
  console.log(allData);
  clearInpts();
  displayData();
});

function displayData() {
  var tempData = "";
  allData.forEach(function (data, index) {
    tempData += `
        <tr class="py-3 align-items-baseline">
            <td class="fw-bold fs-6">${data.firstName}</td>
            <td class="fw-bold fs-6">${data.lastName}</td>
            <td class="d-flex gap-2 justify-content-center align-items-baseline">
                <button class="btn btn-danger px-3 py-2" onclick="deleteData(${index})">Delete</button>
                <button class="btn btn-primary px-3 py-2" onclick="editData(${index})">Edit</button>
            </td>
        </tr>
        `;
  });
  tBodyId.innerHTML = tempData;
}

function clearInpts(){
    firstName.value="";
    lastName.value="";
}

function deleteData(index) {
  allData.splice(index, 1);
  displayData();
}

var currentIndex = null;
function editData(index) {
  currentIndex = index;
  firstName.value = allData[index].firstName;
  lastName.value = allData[index].lastName;
  submitBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");
}

function updateData() {
    allData[currentIndex].firstName = firstName.value;
    allData[currentIndex].lastName = lastName.value;
    submitBtn.classList.remove("d-none");
    updateBtn.classList.add("d-none");
    clearInpts()
    displayData(allData);

}