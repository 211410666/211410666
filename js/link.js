function change(index) {
    const p = document.querySelector('.portfolio_c-center');
    
    switch (index) {
        case 1:
            p.innerHTML = `<iframe src="./c_1.html" name="mainframe" width="100%" marginwidth="0" marginheight="0" onload="Javascript:SetCwinHeight()"  scrolling="No" frameborder="0" id="mainframe"  ></iframe>`
            break;
        case 2:
            p.innerHTML = `<iframe src="./c_2.html" name="mainframe" width="100%" marginwidth="0" marginheight="0" onload="Javascript:SetCwinHeight()"  scrolling="No" frameborder="0" id="mainframe"  ></iframe>`
            break;
        case 3:
            p.innerHTML = `<iframe src="./c_3.html" name="mainframe" width="100%" marginwidth="0" marginheight="0" onload="Javascript:SetCwinHeight()"  scrolling="No" frameborder="0" id="mainframe"  ></iframe>`
            break;
        case 4:
            p.innerHTML = `<iframe src="./c_4.html" name="mainframe" width="100%" marginwidth="0" marginheight="0" onload="Javascript:SetCwinHeight()"  scrolling="No" frameborder="0" id="mainframe"  ></iframe>`
            break;
        case 5:
            p.innerHTML = `<iframe src="./c_5.html" name="mainframe" width="100%" marginwidth="0" marginheight="0" onload="Javascript:SetCwinHeight()"  scrolling="No" frameborder="0" id="mainframe"  ></iframe>`
          break;
        case 6:
            p.innerHTML = `<iframe src="./c_6.html" name="mainframe" width="100%" marginwidth="0" marginheight="0" onload="Javascript:SetCwinHeight()"  scrolling="No" frameborder="0" id="mainframe"  ></iframe>`
          break;
        case 7:
            p.innerHTML = `<iframe src="./c_7.html" name="mainframe" width="100%" marginwidth="0" marginheight="0" onload="Javascript:SetCwinHeight()"  scrolling="No" frameborder="0" id="mainframe"  ></iframe>`
            break;
    }
}
function SetCwinHeight()
{
var iframeid=document.getElementById("mainframe"); //iframe id
  if (document.getElementById)
  {  
   if (iframeid && !window.opera)
   {  
    if (iframeid.contentDocument && iframeid.contentDocument.body.offsetHeight)
     {  
       iframeid.height = iframeid.contentDocument.body.offsetHeight;  
     }else if(iframeid.Document && iframeid.Document.body.scrollHeight)
     {  
       iframeid.height = iframeid.Document.body.scrollHeight;  
      }  
    }
   }
}