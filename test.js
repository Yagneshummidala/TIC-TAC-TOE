let button=document.querySelectorAll(".btn");
let reset=document.querySelector("#reset");
let restart=document.querySelector("#restart");
let msg=document.querySelector("#msg");
let cnt=document.querySelector(".winner");
let turn =true;
let winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
//reset button
reset.addEventListener("click",()=>{
    turn=true;
    resetbtn();
});
//restart button
restart.addEventListener("click",()=>{
    turn=true;
    resetbtn();
});
//clearing function
const resetbtn=()=>{
    cnt.classList.add("hide");
    button.forEach((btn)=>{
        btn.disabled=false;
        btn.innerText="";
    });
}
let count= 9;
//x - o selection
button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turn ===true)
        {
        btn.innerText="O";
        turn =false;
        }
        else
        {
            btn.innerText="X";
            turn=true;
        }
        btn.disabled=true;
        checkwin();
        count--;
        if(count==0){
            msg.innerText='Draw Match';
            cnt.classList.remove("hide");
        }
    });
});
// check win function
const checkwin=()=>{
    for(let pattern of winpatterns){
        let v1=button[pattern[0]].innerText;
        let v2=button[pattern[1]].innerText;
        let v3=button[pattern[2]].innerText;
        if(v1!=""&&v2!=""&&v3!=""){
            if(v1===v2&&v2===v3){
                btndisable();
                showwinner(v1);
            }  
        }
               
    }
}
const showwinner=(v)=>{
    if(turn===false)
    msg.innerText=`Congratulations, winner is O `;
    else
    msg.innerText='Congratulations, winner is X ';
    cnt.classList.remove("hide");
}
//disabling all buttons
const btndisable=()=>{
    button.forEach((btn)=>{
        btn.disabled=true;
    });
}