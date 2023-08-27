function getFirstName(){
    var firstnameValue = document.getElementById("firstname").value;
    localStorage.setItem("passValue",firstnameValue);
}