function validateform(){
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const zipcode = document.getElementById("zipcode").value;

    let fullname = firstname + " " + lastname;
    let fullzip = zipcode + "";
    let lengthname = fullname.length;
    let lengthzip = fullzip.length;

    if (lengthname > 20 && lengthzip == 5) {

        alert(" good for you I guess");
    } else{
        alert("i think you messed up")
    }
}