function mydemo(){
    let a=document.getElementById("height").value;
    let b=document.getElementById("weight").value;
    let result=b/Math.pow(a,2);
    console.log(result);
    if(result<16){
        alert("Gầy độ III")
    }
    else if(result<17){
        alert("Gầy độ II");
    }
     else if(result<18.5){
        alert("Gầy độ I")
     }
     else if(result<25){
        alert("Bình Thường")
     }
     else if(result<30){
        alert("Thừa cân")
     }
     else if (result<35){
        alert("Béo phì độ I")
     }
     else if (result<=40){
        alert("Béo phì độ II")
     }
     else if (result>40){
        alert("Béo phì độ III")
     }}