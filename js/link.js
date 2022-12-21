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
        case 8:
            p.innerHTML = `<iframe src="./c_8.html" name="mainframe" width="100%" marginwidth="0" marginheight="0" onload="Javascript:SetCwinHeight()"  scrolling="No" frameborder="0" id="mainframe"  ></iframe>`
            break;
        case 9:
            p.innerHTML = `<iframe src="./c_9.html" name="mainframe" width="100%" marginwidth="0" marginheight="0" onload="Javascript:SetCwinHeight()"  scrolling="No" frameborder="0" id="mainframe"  ></iframe>`
            break;
        case 10:
            p.innerHTML = `<iframe src="./c_10.html" name="mainframe" width="100%" marginwidth="0" marginheight="0" onload="Javascript:SetCwinHeight()"  scrolling="No" frameborder="0" id="mainframe"  ></iframe>`
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

function demo(index)
{
    const p = document.querySelector(".content-section");
    const i = document.getElementById("index");
    i.style.display = "block";
    i.style.paddingLeft = "0";
    i.style.paddingTop = "0";
    const check_f = document.getElementById("drop");
    console.log(check_f)
    if (check_f!=null) {
        check_f.style.display = "none";
    }
    console.log('h', p);
    switch (index) {
        case 1:
            p.innerHTML = `<iframe src="https://1111-sweb-1-n-demo-211410666-nizt.vercel.app/demo/w02_66/card_66.html" 
            width="100%" height="100%" frameborder="0"/>`
            break;
        case 2:
            p.innerHTML = `<iframe src="https://1111-sweb-1-n-demo-211410666-nizt.vercel.app/demo/w06_66/blog_66.html" 
            width="100%" height="100%" frameborder="0"/>`
            break;
        case 3:
            p.innerHTML = `<iframe src="https://1111-sweb-1-n-demo-211410666-nizt.vercel.app/demo/w09_66/multipage_66.html" 
            width="100%" height="100%" frameborder="0"/>`
            break;
        case 4:
            p.innerHTML = `<iframe src="https://1111-sweb-1-n-demo-211410666-nizt.vercel.app/demo/w15_66_portfolio/portfolio/index.html" 
            width="100%" height="100%" frameborder="0"/>`
            break;
        
    }
}

function demo_c(index)
{
    const p = document.querySelector(".content-section");
    const i = document.getElementById("portfolio_c");
    i.style.display = "block";
    i.style.paddingLeft = "0";
    i.style.paddingTop = "0";
    console.log('h', p);
    switch (index) {
        case 1:
            p.innerHTML = `<iframe src="https://1111-sweb-1-n-demo-211410666-nizt.vercel.app/demo/w02_66/card_66.html" 
            width="100%" height="100%" frameborder="0"/>`
            break;
        case 2:
            p.innerHTML = `<iframe src="https://1111-sweb-1-n-demo-211410666-nizt.vercel.app/demo/w06_66/blog_66.html" 
            width="100%" height="100%" frameborder="0"/>`
            break;
        case 3:
            p.innerHTML = `<iframe src="https://1111-sweb-1-n-demo-211410666-nizt.vercel.app/demo/w09_66/multipage_66.html" 
            width="100%" height="100%" frameborder="0"/>`
            break;
        case 4:
            p.innerHTML = `<iframe src="https://1111-sweb-1-n-demo-211410666-nizt.vercel.app/demo/w15_66_portfolio/portfolio/index.html" 
            width="100%" height="100%" frameborder="0"/>`
            break;
        
    }
}
