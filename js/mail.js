const uname = document.getElementById('username');
const email = document.getElementById('useremail');
const project = document.getElementById('userproject');
const submit = document.getElementsByClassName('cform')[0];


submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let ebody = `
    <b>Name : </b>${uname.value}
    <br>
    <b>Email : </b>${email.value}
    <br>
    <b>Project : </b>${project.value}
    `

    Email.send({
        SecureToken : "d21b3f93-6d0b-4f7e-888b-3eeeb782b488",
        To : "harshit8377@gmail.com",
        From : 'nikunj9180@gmail.com',
        Subject : "Query from " + uname.value + " : " +email.value,
        Body : ebody
    }).then(
        message => {
            if(message=='OK'){
                alert('Thanks for submitting details.We will contact you soon.');
                location.reload();
            }
            else{
                alert(message);
            }
        }
    );

});


