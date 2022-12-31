var h2 =document.querySelector('h2')
var dogru=document.querySelector('.dogru')
var sehv=document.querySelector('.yanlis')
var ynls=document.querySelector('.ynls')
var dgr=document.querySelector('.dgr')

var dSay=0;
var ySay=0;
var arr=[
  ['Azerbaycanin paytaxti Baki seheridirmi?','t'],
  ['Azerbaycan Avropada mi yerlesir?', 'f'],
  ['Azerbaycain en gozel seherlerinden biride Zaqataladirmi?', 't'],
  ['Azix Magarasi Fizuli seherindemi yerlesir?', 't'],
  ['Derbend seheri hal hazirda Azerbaycandami yerlesir?','f'],
  ['Azerbaycain en boyuk seheri Gencedirmi?','f'],
  ['Zaqatala da Xan sarayi yerlesir? ','f'],
  ['Azerbaycanin en qedim yasayis meskeni Mannadirmi?','t'],
  ['Azerbaycanin chox qedim tarixi vardirmi?','t'],
  ['Azerbaycan 100 il SSR in hakimiyyetide olubmu','f'],
  ['Azerbaycan oz musteqilliyini tam sekilde berpa edibmi?','t']

]
var index=Math.floor(Math.random()*arr.length)
h2.innerText=arr[index][0]
window.onkeypress=function(e){
  if(e.key=='t' || e.key=='f'){
    if(e.key==arr[index][1]){
       dSay++
       dogru.innerText=dSay
      
      
      
    }
    else{
      ySay++
      sehv.innerText=ySay
     
    }

  }
  else{
    alert('Zehmet olmasa t ve ya f herflerinden istifade edin')
  }
  
  index=Math.floor(Math.random()*arr.length)
h2.innerText=arr[index][0]
if(dSay==5){
  alert('Tebrikler Siz Qazandiniz')
}
else if(ySay==2){
  alert('Sansinizi bir daha sinayiniz,Siz uduzdunuz')
}
}
