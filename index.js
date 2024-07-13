let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
let btn4=document.getElementById("btn4")
let btn5=document.getElementById("btn5")
let btn6=document.getElementById("btn6")
let btn7=document.getElementById("btn7")
let btn8=document.getElementById("btn8")
let btn9=document.getElementById("btn9")
let msg=document.getElementById("player-turn")

let count=1

//boolean array to check if that button is already clicked
let checkedBtn=[false,false,false,false,false,false,false,false,false]

//let buttonClick=[btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9]
function clickedBtn1()
{
  
  if(checkedBtn[0]===false)
    {
      if(count%2===0)
      {
        count++
        checkedBtn[0]=true
        btn1.textContent="O"
        msg.textContent="It's X Turn"
      }
      else{
        count++
        checkedBtn[0]=true
        btn1.textContent="X"
        msg.textContent="It's O Turn"
      }
      //calling the btnTrue function to check if the click is legit
    }
}
function clickedBtn2()
{
  if(checkedBtn[1]===false)
    {
      if(count%2===0)
        {
          count++
          checkedBtn[1]=true
         btn2.textContent="O"
         msg.textContent="It's X Turn"
        }
        else{
          count++
          checkedBtn[1]=true
         btn2.textContent="X"
         msg.textContent="It's O Turn"
        }
    }
}
function clickedBtn3()
{
  if(checkedBtn[2]===false)
    {
      if(count%2===0)
        {
          count++
          checkedBtn[2]=true
         btn3.textContent="O"
         msg.textContent="It's X Turn"
        }
        else{
          count++
          checkedBtn[2]=true
         btn3.textContent="X"
         msg.textContent="It's O Turn"
        }
    }
}
function clickedBtn4()
{
  if(checkedBtn[3]===false)
    {
      if(count%2===0)
        {
          count++
          checkedBtn[3]=true
         btn4.textContent="O"
         msg.textContent="It's X Turn"
        }
        else{
          count++
          checkedBtn[3]=true
         btn4.textContent="X"
         msg.textContent="It's O Turn"
        }
    }
}
function clickedBtn5()
{
  if(checkedBtn[4]===false)
    {
      if(count%2===0)
        {
          count++
          checkedBtn[4]=true
         btn5.textContent="O"
         msg.textContent="It's X Turn"
        }
        else{
          count++
          checkedBtn[4]=true
         btn5.textContent="X"
         msg.textContent="It's O Turn"
        }
    }
}
function clickedBtn6()
{
  if(checkedBtn[5]===false)
    {
      if(count%2===0)
        {
          count++
          checkedBtn[5]=true
         btn6.textContent="O"
         msg.textContent="It's X Turn"
        }
        else{
          count++
          checkedBtn[5]=true
         btn6.textContent="X"
         msg.textContent="It's O Turn"
        }
    }
}
function clickedBtn7()
{ 
  if(checkedBtn[6]===false)
    {
      if(count%2===0)
        {
          count++
          checkedBtn[6]=true
         btn7.textContent="O"
         msg.textContent="It's X Turn"
        }
        else{
          count++
          checkedBtn[6]=true
         btn7.textContent="X"
         msg.textContent="It's O Turn"
        }
    }
}
function clickedBtn8()
{
  if(checkedBtn[7]===false)
    {
      if(count%2===0)
        {
          count++
          checkedBtn[7]=true
         btn8.textContent="O"
         msg.textContent="It's X Turn"
        }
        else{
          count++
          checkedBtn[7]=true
         btn8.textContent="X"
         msg.textContent="It's O Turn"
        }
    }
}
function clickedBtn9()
{
  if(checkedBtn[8]===false)
    {
      if(count%2===0)
        {
          count++
          checkedBtn[8]=true
         btn9.textContent="O"
         msg.textContent="It's X Turn"
        }
        else{
          count++
          checkedBtn[8]=true
         btn9.textContent="X"
         msg.textContent="It's O Turn"
        }
    }
}

// function assign(parameter1)
// {
  
// }


// function btnTrue()
// {
//   for(let i=0;i<10<i++)
//   {
//     
//   }
// }

function restartFunction()
{
  count=1
  checkedBtn=[false,false,false,false,false,false,false,false,false]
  msg.textContent="It's X Turn"
  btn1.textContent=""
  btn2.textContent=""
  btn3.textContent=""
  btn4.textContent=""
  btn5.textContent=""
  btn6.textContent=""
  btn7.textContent=""
  btn8.textContent=""
  btn9.textContent=""

}
// function assignValue(num)
// {
//   if(count%2===0)
//     {
//       count++
//       checkedBtn[num-1]=true
//      btn2.textContent="O"
//     }
//     else{
//       count++
//       checkedBtn[1]=true
//      btn2.textContent="X"
//     }
// }