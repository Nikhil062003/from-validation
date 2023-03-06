let error=document.getElementById("error");
let namm=document.getElementById("Name");
let age=document.getElementById("Age");
let email=document.getElementById("Email");


function validate(){
 if(namm.value==""){
  error.innerHTML="Error: Name must not be empty";
  return false;
 }



for(let i=0;i<namm.value.length;i++){
  let c=namm.value.charAt(i);
  if( !((c>='A'&& c<='Z')|| (c>='a'&& c<='z')||(c==' '))){
    error.innerHTML="Error:Not VALID you entered number in name";
    return false;
  }}
  
   if(namm.value.length<=4){
   error.innerHTML="Error:more than 4 character length"
   return false}

if(age.value<18||age.value>50){
   error.innerHTML="Error:Age must be b/t 18 and 50";
    return false;
}
if(isNaN(age.value)){
  error.innerHTML="Error:Not valid (Age can't be character)";
  return false;
}

      let t=email.value.indexOf("@");
      if(t<1){
        error.innerHTML="Error:@ should not on first position in email field";
        return false;
        }
let e=email.value.length;
let f=email.value.lastIndexOf(".");
let g=e-f;

if(g!=4&&g!=5){
  error.innerHTML="Error:Last 3/4 character must be `.`";
  return false;
}




}
