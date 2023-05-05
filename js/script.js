let button = document.querySelector("button");


button.addEventListener("click", (e) => {
  console.log('button clicked');
  let pwd = document.querySelector('#pwd');
  let confirmPwd = document.querySelector('#confirmpwd');
  console.log(`${pwd.value} = ${confirmPwd.value}?`)
  if(pwd.value===confirmPwd.value){
    console.log("match")
    document.querySelector('form').submit();
    return;
  }

  console.log("no match");
  pwd.classList.add('error');
  confirmPwd.classList.add('error');
  document.querySelector('.match').textContent = "Passwords Must Match."
})