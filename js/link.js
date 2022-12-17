function change(index) {
    const p = document.querySelector('.index');
    
    switch (index) {
        case 'portfolio_c':
            console.log('123');
            p.innerHTML=`<iframe src="./portfolio/portfolio_c.html" 
            width="100%" height="100%" />`
            break;
    }
}