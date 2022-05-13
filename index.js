
//로그인 폼
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const  HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//로그인 버튼 글릭 이벤트
function onLoginSubmit(event) {
  event.preventDefault();              //새로고침 막기
  const userName = loginInput.value;   //입력받은 값 저장
  localStorage.setItem(USERNAME_KEY , userName);    //local Storage에 저장
  loginForm.classList.add(HIDDEN_CLASSNAME);   //입력폼 숨기기
  //숨겨져 있던 h1으로 환영인사 하기
  paintGreeting(userName);
  
}

function paintGreeting(name) {
  greeting.innerHTML = `Hello ${name}`;   
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY );

if (savedUsername===null) {   
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);    //login form의 제출 이벤트 등록
}
else {
  //show the greeting
  paintGreeting(savedUsername);

}

