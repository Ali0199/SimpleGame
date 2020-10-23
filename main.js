var a = [1,2,3,4,5,6,7," ",8];
var h=0,m=0,s=0,outputDiv = document.getElementById('output'),bos=0,begin=0,startg=0;

function pattern1(){
    var a=document.getElementById('username').value;
    if(a==""){
        document.getElementById('username').classList.add('erroruser');
        document.getElementById('userp').classList.add('userNameHover');
    }
    else{
        document.getElementById('username').classList.remove('erroruser');
        document.getElementById('userp').classList.remove('userNameHover');
    }
}
function start (){
    bos=0,m=0,s=0,h=0;
    begin=1;
    document.getElementById('winner').style.display="none";
    var username=document.getElementById('username').value;
    if(username!=""){
        document.getElementById('beginner').style.display="none";
        document.getElementById('gamer').innerHTML="Player: "+username;
    }
    else{
        begin=0;
        startg=0;
        pattern1();
    }
  
    if(startg>0){
        a.sort( function(){return.8-Math.random();}); kub();
        startg=1;
    }
    startg=startg+1;
}
function kub(){
for(var i=0; i<=8; i++){var q='kub'+(i+1);  document.getElementById(q).innerHTML=a[i]; }
}
kub();
function win(){
bos=bos+1;
begin=0;
if(a[0]<a[1] && a[1]<a[2] && a[2]<a[3] && a[3]<a[4] && a[4]<a[5] && a[5]<a[6] && a[6]<a[7] && a[8]==" "){
document.getElementById('winner').style.display="flex"; 
var vaqt="Tugatish vaqti:"+h+":"+m+":"+s+".";
bos="Yurishlar soni:"+bos+".";
document.getElementById('vaqt').innerHTML=vaqt;
document.getElementById('bos').innerHTML=bos;
} 
}


function kub1(){
if(a[0]!==" " && a[1]===" " && a[3]!==" ")
{ var c=a[0]; a[0]=a[1]; a[1]=c; document.getElementById('kub1').innerHTML=a[0]; document.getElementById('kub2').innerHTML=a[1]; } 
if(a[0]!==" " && a[1]!=" " && a[3]==" ")
{ var c=a[0]; a[0]=a[3]; a[3]=c; document.getElementById('kub1').innerHTML=a[0]; document.getElementById('kub4').innerHTML=a[3]; }win();}

function kub2(){
    if(a[1]!==" " && a[0]==" " && a[2]!==" " && a[4]!==" ")
    { var c=a[1]; a[1]=a[0]; a[0]=c; document.getElementById('kub2').innerHTML=a[1]; document.getElementById('kub1').innerHTML=a[0]; } 
    if(a[1]!==" " && a[0]!==" " && a[2]==" " && a[4]!==" ")
    { var c=a[1]; a[1]=a[2]; a[2]=c; document.getElementById('kub2').innerHTML=a[1]; document.getElementById('kub3').innerHTML=a[2]; } 
    if(a[1]!==" " && a[0]!==" " && a[2]!==" " && a[4]==" ")
    { var c=a[1]; a[1]=a[4]; a[4]=c; document.getElementById('kub2').innerHTML=a[1]; document.getElementById('kub5').innerHTML=a[4]; }win();} 

function kub3(){
    if(a[2]!==" " && a[1]==" " && a[5]!==" ")
    { var c=a[2]; a[2]=a[1]; a[1]=c; document.getElementById('kub3').innerHTML=a[2]; document.getElementById('kub2').innerHTML=a[1]; } 
    if(a[2]!==" " && a[1]!==" " && a[5]==" ")
    { var c=a[2]; a[2]=a[5]; a[5]=c; document.getElementById('kub3').innerHTML=a[2]; document.getElementById('kub6').innerHTML=a[5]; }win();}

function kub4(){
    if(a[3]!==" " && a[0]==" " && a[4]!==" " && a[6]!==" ")
    { var c=a[3]; a[3]=a[0]; a[0]=c; document.getElementById('kub4').innerHTML=a[3]; document.getElementById('kub1').innerHTML=a[0]; } 
    if(a[3]!==" " && a[0]!==" " && a[4]==" " && a[6]!==" ")
    { var c=a[3]; a[3]=a[4]; a[4]=c; document.getElementById('kub4').innerHTML=a[3]; document.getElementById('kub5').innerHTML=a[4]; }
    if(a[3]!==" " && a[0]!==" " && a[4]!==" " && a[6]==" ")
    { var c=a[3]; a[3]=a[6]; a[6]=c; document.getElementById('kub4').innerHTML=a[3]; document.getElementById('kub7').innerHTML=a[6]; }win();}  

function kub5(){
    if(a[4]!==" " && a[1]==" " && a[3]!==" " && a[5]!=" " && a[7]!=" ")
    { var c=a[4]; a[4]=a[1]; a[1]=c; document.getElementById('kub5').innerHTML=a[4]; document.getElementById('kub2').innerHTML=a[1]; } 
    if(a[4]!==" " && a[1]!=" " && a[3]==" " && a[5]!=" " && a[7]!=" ")
    { var c=a[4]; a[4]=a[3]; a[3]=c; document.getElementById('kub5').innerHTML=a[4]; document.getElementById('kub4').innerHTML=a[3]; }
    if(a[4]!==" " && a[1]!==" " && a[3]!==" " && a[5]==" " && a[7]!==" ")
    { var c=a[4]; a[4]=a[5]; a[5]=c; document.getElementById('kub5').innerHTML=a[4]; document.getElementById('kub6').innerHTML=a[5]; } 
    if(a[4]!==" " && a[1]!==" " && a[3]!==" " && a[5]!==" " && a[7]==" ")
    { var c=a[4]; a[4]=a[7]; a[7]=c; document.getElementById('kub5').innerHTML=a[4]; document.getElementById('kub8').innerHTML=a[7]; }win();} 

function kub6(){
    if(a[5]!==" " && a[2]==" " && a[4]!==" " && a[8]!=" ")
    { var c=a[5]; a[5]=a[2]; a[2]=c; document.getElementById('kub6').innerHTML=a[5]; document.getElementById('kub3').innerHTML=a[2]; } 
    if(a[5]!==" " && a[2]!=" " && a[4]==" " && a[8]!=" ")
    { var c=a[5]; a[5]=a[4]; a[4]=c; document.getElementById('kub6').innerHTML=a[5]; document.getElementById('kub5').innerHTML=a[4]; }
    if(a[5]!==" " && a[2]!==" " && a[4]!==" " && a[8]==" ")
    { var c=a[5]; a[5]=a[8]; a[8]=c; document.getElementById('kub6').innerHTML=a[5]; document.getElementById('kub9').innerHTML=a[8]; } win(); }

    
function kub7(){
    if(a[6]!==" " && a[7]==" " && a[3]!==" ")
    { var c=a[6]; a[6]=a[7]; a[7]=c; document.getElementById('kub8').innerHTML=a[7]; document.getElementById('kub7').innerHTML=a[6]; } 
    if(a[6]!==" " && a[7]!=" " && a[3]==" ")
    { var c=a[6]; a[6]=a[3]; a[3]=c; document.getElementById('kub7').innerHTML=a[6]; document.getElementById('kub4').innerHTML=a[3]; }win();}  

function kub8(){
    if(a[7]!==" " && a[8]==" " && a[4]!==" " && a[6]!=" ")
    { var c=a[7]; a[7]=a[8]; a[8]=c; document.getElementById('kub8').innerHTML=a[7]; document.getElementById('kub9').innerHTML=a[8]; } 
    if(a[7]!==" " && a[8]!=" " && a[4]==" " && a[6]!=" ")
    { var c=a[7]; a[7]=a[4]; a[4]=c; document.getElementById('kub5').innerHTML=a[4]; document.getElementById('kub8').innerHTML=a[7]; }
    if(a[7]!==" " && a[8]!=" " && a[4]!=" " && a[6]==" ")
    { var c=a[7]; a[7]=a[6]; a[6]=c; document.getElementById('kub7').innerHTML=a[6]; document.getElementById('kub8').innerHTML=a[7]; }win();}
function kub9(){
        if(a[8]!==" " && a[7]==" " && a[5]!==" ")
        { var c=a[8]; a[8]=a[7]; a[7]=c; document.getElementById('kub8').innerHTML=a[7]; document.getElementById('kub9').innerHTML=a[8]; } 
        if(a[7]!==" " && a[8]!=" " && a[5]==" ")
        { var c=a[8]; a[8]=a[5]; a[5]=c; document.getElementById('kub6').innerHTML=a[5]; document.getElementById('kub9').innerHTML=a[8]; }win(); }    


setInterval(function () {
    
    if(begin==1){
        s=s+1; 
        if(s<60){
            outputDiv.innerHTML = "Boshlash vaqti:"+h+":"+m+":"+s;
        }
        if(s==60 && m<60){
            m=m+1;
            s=0;
        }
        if(m==60){
            h=h+1;
            m=0;
        }
    }

    }, 1000);