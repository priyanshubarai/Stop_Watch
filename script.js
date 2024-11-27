const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let TimerID;
let isRunning = false;
let ElaspedTime = 0;


start.onclick = () => {
    if(!isRunning){
        let startTime = Date.now() - ElaspedTime;
    
        isRunning = true;
        TimerID = setInterval(()=>{
            let currentTime = Date.now() ;
            ElaspedTime = currentTime - startTime;
            Update(ElaspedTime);
        },10)
    }
}

function Update(ElaspedTime) {
    //calculating hours mins sec ms
    let milisec = Math.floor((ElaspedTime % 1000)/10);
    let sec = Math.floor(ElaspedTime/1000 % 60 );
    let min = Math.floor(ElaspedTime/(1000 * 60) % 60);
    
    let hour = Math.floor(ElaspedTime/(1000 * 60 * 60) % 24);
    
    console.log(String(sec).padStart(2,'0'));
    document.querySelector(".digits").textContent = `${String(hour).padStart(2,'0')} : ${String(min).padStart(2,'0')} : ${String(sec).padStart(2,'0')}`;
}
    


stop.onclick = () => {
    if(isRunning){
        clearInterval(TimerID);
        isRunning = false;
        ElaspedTime = Date.now() - startTime;
    }
}


reset.onclick = () => {
    clearInterval(TimerID);
    document.querySelector(".digits").textContent = '00 : 00 : 00';
    isRunning = false;
    startTime = 0;
    ElaspedTime = 0;
}


