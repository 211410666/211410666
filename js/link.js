function change(index) {
    const p = document.querySelector('.portfolio_c-center');
    
    switch (index) {
        case 1:
            p.innerHTML=`<iframe src="./portfolio/c_1.html" 
            width="100%" height="100%" frameborder="0" border="0" cellspacing="0" />`
            break;
    }
    switch (index) {
        case 2:
            p.innerHTML=`<iframe src="./portfolio/c_2.html" 
            width="100%" height="100%" frameborder="0" border="0" cellspacing="0" />`
            break;
    }
    switch (index) {
        case 3:
            p.innerHTML=`<iframe src="./portfolio/c_3.html" 
            width="100%" height="100%" frameborder="0" border="0" cellspacing="0" />`
            break;
    }
}