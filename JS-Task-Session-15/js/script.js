var users = [];
var numOfUsers;
function numOfUsers() {
  numOfUsers = prompt("Enter the number of users");
  console.log("Number :" + numOfUsers);
  addUser();
}
function addUser() {
  for (var i = 0; i < numOfUsers; i++) {
    var ID = prompt("Enter ID User: " + (i + 1));
    var name = prompt("Enter Name User: " + (i + 1));
    var balance = prompt("Enter balance User: " + (i + 1));
    users.push({
      ID: ID,
      name: name,
      balance: balance,
    });
    console.log(users);
    console.log("User added successfully");
  }

  editUseBalanceByID();
}
function editUseBalanceByID() {
  var ID = prompt("Enter the ID of the user (Edit)");
  var user = users.find((item) => item.ID == ID);
  if (user) {
    var newBalance = prompt("Ubdate balance of user: " + user.name);
    user.balance = newBalance;
    console.log("User : " + user.name + " updated balance successfully");
  }
  deleteUserByID();
}

function deleteUserByID() {
  var ID = prompt("Enter the ID of the user (Delete)");
  var index = users.findIndex((item) => item.ID == ID);
  console.log(index)
  if (index) {
    users.splice(index, 1);
    console.log("User deleted successfully");
  }
}

numOfUsers();
console.log(users);
