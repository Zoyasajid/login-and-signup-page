const inputs = document.querySelectorAll("input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
function btn(){
	var email =document.getElementById("mail").value
	var pswd1 =document.getElementById("pswd").value
}

function btn2(){
	var email2 =document.getElementById("email").value
	var pswd2 =document.getElementById("pswd2").value
	var user  = document.getElementById("mail2").value
}
let link = document.getElementById("block");
	let hideShow = document.getElementById("loginform");
	let signupContent = document.getElementById("other");
	link.addEventListener("click" , function(){
		
		if(hideShow.style.display === "block"){
			hideShow.style.display = "none"
			signupContent.style.display = "block"
		}else{
			hideShow.style.display === "block"
			signupContent.style.display = "none"

		}
	})
	let link2 = document.getElementById("none");
	let hideShow2 = document.getElementById("other");
	let loginContent = document.getElementById("loginform");

	link2.addEventListener("click" , function(){
		if(hideShow2.style.display === "block"){
			hideShow2.style.display = "none"
			loginContent.style.display = "block"

		}else{
			hideShow2.style.display === "none"
			loginContent.style.display = "block"
		}
	})


var users=[]

	function btn2(){
            var email = document.getElementById('email').value;
            var password = document.getElementById('pswd2').value;
			var name = document.getElementById("mail2").value
            var user = {
                emails: email,
                password: password,
				name:name

            }; 
			if(user){
				users.push(user);
				console.log(users)
			}
		
			else if(users){
			window.localStorage.setItem('userData', JSON.stringify(users));
						console.log(localStorage.getItem('userData'))
			}
			users.filter((value)=>{
				if(value.emails == user.emails){
					isExist= true
							}
			if(isExist){
				alert ("This Email is already exist" );

			}
		})
				}
		

		function btn(e){
			var email = document.getElementById('mail').value;
			var password = document.getElementById('pswd').value;
			const userData = JSON.parse(localStorage.getItem('userData'));

			userData.map((value)=>{
		   if(value.password == password && value.emails == email){
// window.location.href='/home.html'
passcode = true
		   }
		if(passcode){
			alert("Success")
		}
		}		
		)
	    }

	