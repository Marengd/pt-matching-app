   
   
   
   
   document.addEventListener('DOMContentLoaded', () => {

      const selecteer_land = document.querySelector('#landen');

      fetch(`https://restcountries.com/v3.1/all`).then(res => {
      return res.json();
      }).then(data => {
         let output = "";
         data.forEach(country => {
            output += `<option value="${country.name.common}">${country.flag} ${country.name.common}</option>`;
         })

         selecteer_land.innerHTML = output;
      }).catch(err => {
         console.log(err);
      })
      

   });


   const qrcode = window.qrcode;
   const video = document.createElement("video");
   const canvasElement = document.getElementById("qr-canvas");
   const canvas = canvasElement.getContext("2d");
   const qrResult = document.getElementById("qr-result");
   const outputData = document.getElementById("outputData");
   const btnScanQR = document.getElementById("btn-scan-qr");
   let scanning = false;

   qrcode.callback = (res) => {
      if (res) {
        outputData.innerText = res;
        scanning = false;
        video.srcObject.getTracks().forEach(track => {
          track.stop();
        });
        qrResult.hidden = false;
        btnScanQR.hidden = false;
        canvasElement.hidden = true;
      }
    };

    btnScanQR.onclick = () =>
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then(function(stream) {
      scanning = true;
      qrResult.hidden = true;
      btnScanQR.hidden = true;
      canvasElement.hidden = false;
      video.setAttribute("playsinline", true); 
      video.srcObject = stream;
      video.play();
      tick();
      scan();
    });


function tick() {
   canvasElement.height = video.videoHeight;
   canvasElement.width = video.videoWidth;
   canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
   scanning && requestAnimationFrame(tick);
 }

 function scan() {
   try {
     qrcode.decode();
   } catch (e) {
     setTimeout(scan, 300);
   }
 }