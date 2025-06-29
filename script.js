// sbse phele dono arrow or us bde div ko slecte krenge mtlb target krnege

let arrow = document.querySelector(".arrow");
let Roptions = document.querySelector(".Roptions");

let isTrue = true;

arrow.addEventListener("click",()=>{
    if(isTrue==true){
    Roptions.style.display = "initial";
    isTrue=false;
    }else{
        Roptions.style.display = "none";
        isTrue= true;
    }
})

let wifi = document.querySelectorAll(".wifi");

wifi.forEach((val)=>{
    let isOn = true;
    val.addEventListener(("click") ,()=>{
        if(isOn){
            val.style.backgroundColor = val.dataset.color;
            isOn = false
        }
        else{
            val.style.backgroundColor ="rgba(62, 57, 57, 0.564)" ;
          isOn = true;
        }
    })
})

let camera = document.querySelector(".camera");

let openCameraBtn = document.getElementById("openCamera");
let openCamcBtn = document.querySelector(".openCamcBtn");

let yehaflag = true;

openCameraBtn.addEventListener("click", async () => {

// agar falg true hoga  tbhi hum display flex krenge 

// ab humne ek condtion bnali open wali
// ab flag ko false krdenge kuki agli conditon hume elase wali challani
if(yehaflag==true){
  camera.style.display = "flex";
  yehaflag = false;

    }

else{
   camera.style.display = "none";
  yehaflag = true;

}
// smj aaya terkohn   confirm bta hn 100% hn kl bhi yehi kra tha na same hn bjake click krke dekh vhi h 



  try {
    // Camera access lene ki request
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    // Video tag me stream dikhana
    cameraFeed.srcObject = stream;
  } catch (error) {
    console.error("Camera access denied:", error);
    alert("Camera access allow karo");
  }
})


// chatgpt se kam likhwayay kr codejs mujhe aati jo usse likhwaugi?  get elemnt by id kese lgadiya ? js meri sari tune h
// bs itna sa kaam tha
openCamcBtn.addEventListener("click", async () => {

// agar falg true hoga  tbhi hum display flex krenge 

// ab humne ek condtion bnali open wali
// ab flag ko false krdenge kuki agli conditon hume elase wali challani
if(yehaflag==true){
  camera.style.display = "flex";
  yehaflag = false;

    }

else{
   camera.style.display = "none";
  yehaflag = true;

}
// smj aaya terkohn   confirm bta hn 100% hn kl bhi yehi kra tha na same hn bjake click krke dekh vhi h 



  try {
    // Camera access lene ki request
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    // Video tag me stream dikhana
    cameraFeed.srcObject = stream;
  } catch (error) {
    console.error("Camera access denied:", error);
    alert("Camera access allow karo");
  }
})







  let aeroplain = document.querySelector(".aeroplain")
   let onAeroplain = true;
   aeroplain .addEventListener("click", () =>{
    if(onAeroplain==true){
      aeroplain.style.backgroundColor = "blue";
      onAeroplain = false;
    }
    else{
      aeroplain.style.backgroundColor ="rgba(128, 128, 128, 0.468);";
      onAeroplain=true;
    }
   }
  )

  let battery = document.querySelector(".battery")
  let onBattery = true;
  battery .addEventListener("click", () =>{
    if(onBattery==true){
      battery.style.backgroundColor = "orange";
      
      onBattery = false;
    }
    else{
      battery.style.backgroundColor = "rgba(128, 128, 128, 0.468);"
      onBattery = true;
    }
  })

  let windows = document.querySelector(".windows")
  let windowsbtn = document.querySelector(".windowsbtn")
  let onWindows = true;
  windows.addEventListener("click", ()=> {
    if(onWindows == true){
      windowsbtn.style.display = "initial";
      onWindows = false;
    }
    else{
      windowsbtn.style.display = "none";
      onWindows = true;
    }
    }
  )
  
  let batterybtn = document.querySelector(".batterybtn")
  let batteryDisplay = document.querySelector(".batteryDisplay")
  let onbattery = true;
  batterybtn.addEventListener("click", ()=> {
    if(onbattery == true){
      batteryDisplay.style.scale = "1";
      batteryDisplay.style.transition = "all 0.3s ease"
      onbattery = false;
    
    }
    else{
      batteryDisplay.style.scale = "0";
       batteryDisplay.style.transition = "all 0.3s ease"
      onbattery = true;
    }
   
  })

  let settingBtn = document.querySelector(".settingBtn")
  let settingMenu = document.querySelector(".settingMenu")
  let onSettingBtn=true;
  settingBtn.addEventListener("click", ()=>{
    if(onSettingBtn == true){
      settingMenu.style.scale = "1";
      settingMenu.style.transition = "all 0.3s ease"
     
      onSettingBtn = false;
    }
    else{
      settingMenu.style.scale = "0";
      settingMenu.style.transition = "all 0.3s ease"
      
      onSettingBtn = true;
    }
  })
  
 var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
  loop: true 
});

  let setdate = document.querySelector(".date");

    
  setInterval(()=>{

    let date = new Date().toLocaleDateString("en-CA");
    let time = new Date().toLocaleTimeString("en-GB");
    let clutter = `<h5>${time}<br> ${date}</h5>`;
    
    setdate.innerHTML = clutter;
  },1000)

  let microsoftBtn = document.querySelector(".microsoftBtn")
  let MicrosoftStore = document.querySelector(".MicrosoftStore")
  let onMicrosoftBtn = true;
  microsoftBtn.addEventListener("click", ()=>{
    if(onMicrosoftBtn == true){
      MicrosoftStore.style.scale = "1";
      MicrosoftStore.style.transition = "all 0.7s ease-in"
      onMicrosoftBtn = false;
    }
    else{
      MicrosoftStore.style.scale = "0";
      MicrosoftStore.style.transition = "all 0.3s ease-out"

      onMicrosoftBtn = true;
// isse kuch na hota js me mrxi hoti lga mt lga mekro cpp ki aadat hai isiliye lgata ok
    }
  })

let calculatorBtn = document.querySelector(".calculatorBtn")
let calculator = document.querySelector(".calculator")
let onCalculatorBtn = true;
calculatorBtn.addEventListener("click", ()=>{
  if(onCalculatorBtn==true){
    calculator.style.scale = "1"
    calculator.style.transition = "all 0.3s ease"
    onCalculatorBtn = false;
  }
  else{
    calculator.style.scale = "0"
    calculator.style.transition = "all 0.3s ease"
    onCalculatorBtn = true;

  }
})

const openCalcBtn = document.querySelector(".openCalcBtn");

openCalcBtn.addEventListener("click" , function(){
      if(onCalculatorBtn==true){
    calculator.style.scale = "1"
    calculator.style.transition = "all 0.3s ease"
    onCalculatorBtn = false;
  }
  else{
    calculator.style.scale = "0"
    calculator.style.transition = "all 0.3s ease"
    onCalculatorBtn = true;

  }
});










