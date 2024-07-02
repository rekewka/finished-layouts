window.addEventListener('click', function(){
    
    if(this.event.target.className == "btn add")
    {
        const parent = event.target.closest('.counter');

        const cnt = parent.querySelector('.cnt');

        if(parseInt(cnt.innerText) < 6)
        {
            cnt.innerText++;
        }
    }
    else if(this.event.target.className == "btn minus")
    {
        const parent = event.target.closest('.counter');

        const cnt = parent.querySelector('.cnt');

        if(parseInt(cnt.innerText) > 1)
        {
            cnt.innerText--;
        }
    }

    if(this.event.target.className == "in-cart")
    {
        const cart = this.event.target.closest(".cart");

        const info = {
            imgSrc : cart.querySelector('img').getAttribute('src'),
            title : cart.querySelector('.cart-name').innerText,
            max_count : cart.querySelector('.max-count').innerText,
            weight : cart.querySelector('.weight').innerText,
            price : cart.querySelector('.price').innerText,
            counter : cart.querySelector('.cnt').innerText,
        };

        console.log(info);
    }
})


