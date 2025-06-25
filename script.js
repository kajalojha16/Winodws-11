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
      settingMenu.style.transition = "all 0.3 ease"
     
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
    });
    

 









