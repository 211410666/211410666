function change(index){

    const p = document.querySelector('.show-classdemo');
    console.log('p',p)

    switch(index){
        case 1:
            p.innerHTML = `<iframe src="./demo/w01_66/" 
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
            p.innerHTML = `<iframe src="./demo/w08_66/cards/landing_66.html" 
            width="100%" height="100%" />`
            break;
        case 6:
            p.innerHTML = `<iframe src="./demo/w09_66/resume_66.html" 
            width="100%" height="100%" />`
            break;
    }
}