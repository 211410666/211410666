function change(index) {
    const p = document.querySelector('.portfolio_c-center');
    
    switch (index) {
        case 1:
            console.log(p);
            p.innerHTML=`<iframe src="./portfolio/c_1.html" 
            width="100%" height="100%" frameborder="0" border="0" cellspacing="0" />`
            break;
    }
}