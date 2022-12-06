function change(index){

    const p = document.querySelector('.show-page');
    console.log('p',p)

    switch(index){
        case 1:
            const demo_s = document.getElementById('demo-section');
            const demo = document.getElementById('demo');
            const demo_link = document.getElementById('demo-link');
            if (demo_s.style.display == "none") {
                demo_s.style.display = "block";
                demo.style.border = "1px solid #3e4579";
                demo.style.borderRadius = "8px";
                demo.style.backgroundColor = "#d0d4ec";
                demo_link.style.color = "red";
            }
            else {
                demo_s.style.display = "none";
                demo.style.border = "1px solid transparent";
                demo.style.backgroundColor = "#f1f2fa";
                demo_link.style.color = "#616794";
            }
            break;
        case 2:
            p.innerHTML = `<iframe src="./demo/w02_66/card_66.html" 
            width="100%" height="100%" />`
            break;
        case 3:
            p.innerHTML = `<iframe src="./demo/w04_66/blog_66.html" 
            width="100%" height="100%" />`
            break;
        case 4:
            p.innerHTML = `<iframe src="./demo/w06_66/blog_66.html" 
            width="100%" height="100%" />`
            break;
        case 5:
            p.innerHTML = `<iframe src="./teach_66/teach_66.html" 
            width="100%" height="100%" />`
            break;
        case 6:
            p.innerHTML = `<iframe src="./demo/w09_66/resume_66.html" 
            width="100%" height="100%" />`
            break;
    }
}


function linkto(index){

    const p = document.querySelector('.show-page');
    console.log('p',p)

    switch(index){
        case 'a':
            p.innerHTML = `<iframe src="./class_demo/demo/w01_66/" 
            width="100%" height="100%" />`
            break;
        case 2:
            p.innerHTML = `<iframe src="./demo/w02_66/card_66.html" 
            width="100%" height="100%" />`
            break;
        case 3:
            p.innerHTML = `<iframe src="./demo/w04_66/blog_66.html" 
            width="100%" height="100%" />`
            break;
        case 4:
            p.innerHTML = `<iframe src="./demo/w06_66/blog_66.html" 
            width="100%" height="100%" />`
            break;
        case 5:
            p.innerHTML = `<iframe src="./teach_66/teach_66.html" 
            width="100%" height="100%" />`
            break;
        case 6:
            p.innerHTML = `<iframe src="./demo/w09_66/resume_66.html" 
            width="100%" height="100%" />`
            break;
    }
}