setInterval(function Time(){
    let a= new Date().toLocaleTimeString();
    document.querySelector(".Time").innerHTML="Current Time:"+a;
},1000);
setInterval(function tarikh(){
    let a=new Date().toLocaleDateString();
    let b= document.getElementById("Dae");
    b.innerHTML="Date:"+a;


},1000);
setInterval(function Dayy(){
    let a=new Date().getDay();
    let b=document.getElementById("Dayy");
    switch(a){
        case 0:
            day="Sunday";
            break
        case 1:
            day="Monday";
            break    
         case 2:
             day="Tuesday";
              break  
        case 3:
            day="Wednesday";
            break
        case 4:
            day="Thusday";
            break
        case 5:
            day="Friday";
            break
        case 6:
            day="Saturday";
            

    }
    b.innerHTML="Day:"+" "+day;
},1000);
function tanvir(){
    document.querySelector(".change").innerHTML="";
    document.querySelector("#source").src="tanvir.jpg";
    let img=document.querySelector("#source");
    img.style.visibility="visible";
    let name= document.querySelector("#name");
    name.style.visibility="visible";
    name.innerHTML="Mohammad Tanvir Ahmed";
    document.querySelector("#post").innerHTML="  Cheif Instructor (AIDT)";
    document.querySelector("#phone").innerHTML="Phone:  "
    document.querySelector("#edu").innerHTML="Educational Qualification: BSc in Architechture Engineering";
    document.querySelector("#email").innerHTML="E-mail:" +' '+ "tanvira416@gmail.com";
    document.querySelector("#blood").innerHTML="Blood Group:O+ ";
    let all=document.querySelector(".all");
    all.style.height="1200px"; 
      document.querySelector(".intro").style.visibility="visible"
}
function ershad(){
    document.querySelector(".change").innerHTML="";
    document.querySelector("#source").src="ershad.jpg";
    let img=document.querySelector("#source");
    img.style.visibility="visible";
    let name= document.querySelector("#name");
    name.style.visibility="visible";
    name.innerHTML="Md. Ershadul Barii";
    document.querySelector("#post").innerHTML="  Instructor (Architecture)";
    document.querySelector("#phone").innerHTML="Phone:01754389432  "
    document.querySelector("#edu").innerHTML="Educational Qualification: Bsc in Engineering (Civil)";
    document.querySelector("#email").innerHTML="E-mail:" +' '+ "ershad1985.duet@gmail.com";
    document.querySelector("#blood").innerHTML="Blood Group:B+ ";
    let all=document.querySelector(".all");
    all.style.height="1200px"; 
      document.querySelector(".intro").style.visibility="visible"
}
function nadira(){
    document.querySelector(".change").innerHTML="";
    document.querySelector("#source").src="nadira.jpg";
    let img=document.querySelector("#source");
    img.style.visibility="visible";
    let name= document.querySelector("#name");
    name.style.visibility="visible";
    name.innerHTML="Most. Nadira Khatun";
    document.querySelector("#post").innerHTML="  Junior Instructor (Architecture)";
    document.querySelector("#phone").innerHTML="Phone:01796979363  "
    document.querySelector("#edu").innerHTML="Educational Qualification: Bsc in Architecture Engineering";
    document.querySelector("#email").innerHTML="E-mail:" +' '+ "nadira@gmail.com";
    document.querySelector("#blood").innerHTML="Blood Group:A+ ";
    let all=document.querySelector(".all");
    all.style.height="1200px"; 
      document.querySelector(".intro").style.visibility="visible"
}
function tahmina(){
    document.querySelector(".change").innerHTML="";
    document.querySelector("#source").src="tahmina.jpg";
    let img=document.querySelector("#source");
    img.style.visibility="visible";
    let name= document.querySelector("#name");
    name.style.visibility="visible";
    name.innerHTML="Tahmina Akter";
    document.querySelector("#post").innerHTML="  Junior Instructor (Architecture)";
    document.querySelector("#phone").innerHTML="Phone:01816333065  "
    document.querySelector("#edu").innerHTML="Educational Qualification: Bsc in Architecture Engineering";
    document.querySelector("#email").innerHTML="E-mail:" +' '+ "tahmina@gmail.com";
    document.querySelector("#blood").innerHTML="Blood Group:A+ ";
    let all=document.querySelector(".all");
    all.style.height="1200px"; 
      document.querySelector(".intro").style.visibility="visible"
}
function moktadir(){
    document.querySelector(".change").innerHTML="";
    document.querySelector("#source").src="moktadir.jpg";
    let img=document.querySelector("#source");
    img.style.visibility="visible";
    let name= document.querySelector("#name");
    name.style.visibility="visible";
    name.innerHTML="Md. Moktadir Rahman";
    document.querySelector("#post").innerHTML="  Junior Instructor (Architecture)";
    document.querySelector("#phone").innerHTML="Phone:01719857651  "
    document.querySelector("#edu").innerHTML="Educational Qualification: Bsc in Architecture Engineering";
    document.querySelector("#email").innerHTML="E-mail:" +' '+ "muktadir@gmail.com";
    document.querySelector("#blood").innerHTML="Blood Group: ";
    let all=document.querySelector(".all");
    all.style.height="1200px"; 
      document.querySelector(".intro").style.visibility="visible"
}