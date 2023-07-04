
const userName = JSON.parse(localStorage.getItem('userData'));
console.log(userName)
var greetingElement = document.getElementById("wlc");
userName.map(value => {
    greetingElement.textContent = "Welcome, " + value.name + "!";
})
const logoutButton = document.getElementById('nav-btn');
function logout(){
  window.location = 'index.html';
  // localStorage.clear()
}



