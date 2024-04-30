var ac=document.getElementById('clear')
var d=document.getElementById('divide')
var mul=document.getElementById('mul')
var sub=document.getElementById('subs')
var seven=document.getElementById('7')
var eight=document.getElementById('8')
var nine=document.getElementById('9')
var add=document.getElementById('add')
var four=document.getElementById('4')
var five=document.getElementById('5')
var six=document.getElementById('6')
var sqrt=document.getElementById('sqrt')
var cbrt=document.getElementById('cbrt')
var one=document.getElementById('1')
var two=document.getElementById('2')
var three=document.getElementById('3')
var equals=document.getElementById('equals')
var zero=document.getElementById('0')
var dz=document.getElementById('00')
var decimal=document.getElementById('decimal')
var screen =document.getElementById('screen')


one.addEventListener('click', ()=>
{
    var k1=one.innerText
    screen.innerText=Number(`${screen.innerText}${k1}`)
})
two.addEventListener('click', ()=>
{
    var k2=two.innerText
    screen.innerText=Number(`${screen.innerText}${k2}`)
})
three.addEventListener('click', ()=>
{
    var k3=three.innerText
    screen.innerText=Number(`${screen.innerText}${k3}`)
})
four.addEventListener('click', ()=>
{
    var k4=four.innerText
    screen.innerText=Number(`${screen.innerText}${k4}`)
})
five.addEventListener('click', ()=>
{
    var k5=five.innerText
    screen.innerText=Number(`${screen.innerText}${k5}`)
})
six.addEventListener('click', ()=>
{
    var k6=six.innerText
    screen.innerText=Number(`${screen.innerText}${k6}`)
})
seven.addEventListener('click', ()=>
{
    var k7=seven.innerText
    screen.innerText=Number(`${screen.innerText}${k7}`)
})
eight.addEventListener('click', ()=>
{
    var k8=eight.innerText
    screen.innerText=Number(`${screen.innerText}${k8}`)
})
nine.addEventListener('click', ()=>
{
    var k9=nine.innerText
    screen.innerText=Number(`${screen.innerText}${k9}`)
})
zero.addEventListener('click', ()=>
{
    var k0=zero.innerText
    screen.innerText=Number(`${screen.innerText}${k0}`)
})
dz.addEventListener('click', ()=>
{
    var k00=dz.innerText
    screen.innerText=Number(`${screen.innerText}${k00}`)
})
decimal.addEventListener('click', ()=>
{
    var dec=decimal.innerText
    screen.innerText=Number(`${screen.innerText}${dec}`)
})
ac.addEventListener('click', ()=>
{
    var kc=ac.innerText
    screen.innerText=``
    v1=0
    v2=1
    v3=0
})
var v1=0
var v3=0
var v2=1
var v4
addition=false
substraction=false
multiply=false
divide=false
d.addEventListener('click', ()=>
{
    v4=screen.innerText
    

    screen.innerText=``
    divide=true
})
mul.addEventListener('click', ()=>
{
    var km=screen.innerText
    v2=Number(`${v2}`)*Number(`${km}`)
    console.log(v2);
    screen.innerText=``
    multiply=true
})
sub.addEventListener('click', ()=>
{
    var ks=screen.innerText
    console.log(ks);
    v3=Math.abs(Number(`${v3}`))-Number(`${ks}`)
    console.log(v3);
    substraction=true
    screen.innerText=``
})


add.addEventListener('click', ()=>
{
    var ka=screen.innerText
    v1=Number(`${v1}`)+Number(`${ka}`)
    console.log(v1);
    addition=true
    screen.innerText=``
    
})
equals.addEventListener('click', ()=>
{
    if(addition==true){
        screen.innerText=Number(`${screen.innerText}`)+Number(`${v1}`)
        v1=0
    }
    else if(substraction==true){
        v3=Math.abs(Number(`${v3}`))-Number(`${screen.innerText}`)
        screen.innerText=`${v3}`
        v3=0
    }
    else if(multiply==true){
        screen.innerText=Number(`${screen.innerText}`)*Number(`${v2}`)
        console.log(`${screen.innerText}`)
        v2=1
    }
    else if(divide==true){
        screen.innerText=Number(v4)/screen.innerText
        
    }
    
    // screen.innerText=Number(`${v3}`)-Number(`${screen.innerText}`)
    

})

sqrt.addEventListener('click',()=>
{
    var sq=screen.innerText
    console.log(`${sq}`);
    screen.innerText=Math.sqrt(`${sq}`)
    console.log(Math.sqrt(`${screen.innerText}`));
    
})
cbrt.addEventListener('click',()=>
{
    var cbq=screen.innerText
    console.log(`${cbq}`);
    screen.innerText=Math.cbrt(`${cbq}`)
    console.log(Math.cbrt(`${screen.innerText}`));

})