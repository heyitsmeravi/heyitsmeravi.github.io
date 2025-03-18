function skills(){
    let skill=document.getElementById('skills');
    skill.style.display='block';
    let education=document.getElementById('education');
    education.style.display='none'
}
function education(){
    let skills=document.getElementById("skills");
    skills.style.display='none';
    let education=document.getElementById("education");
    education.style.display="block" ;
}
function showdownloadbtn(){
    let showbtn=document.getElementById('resumedownloadbtn');
    if (showbtn.style.display==="none"){
        showbtn.style.display="block";
    }else{
        showbtn.style.display="none";
    }
}

function sendMsg(){
    document.querySelector("#msg").innerHTML=" ";
}
const form=document.forms['contactData'];
// const msg=document.getElementById("msg");
const scriptUrl="https://script.google.com/macros/s/AKfycbwbXPybo4m2nq23cMvIXP4r8tpOlc-nmX1mT-pcj_rYdCkG3RqghNYJBEYWlnim4tvq/exec"
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    document.querySelector(".sendMsg").value="submitting...";
    let data=new FormData(form);
    fetch(scriptUrl, {
        method:"POST", 
        body: data
    })
    .then(res=>res.text())
    .then(data=> {document.querySelector("#msg").innerHTML="Message sent successfully";
    document.querySelector(".sendMsg").value="Submit"
})
    .catch(error =>console.error('Error!',error.message))
    
})