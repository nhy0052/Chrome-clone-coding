
//로그인 폼
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

//로그인 버튼 글릭 이벤트
function LoginBtnClick() {
  const userName = loginInput.value;
  console.log(userName);
}

loginButton.addEventListener("click", LoginBtnClick);