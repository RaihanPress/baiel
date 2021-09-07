(() => {
    window.addEventListener('scroll', function () {
        $('nav').classList.toggle('sticky', window.scrollY > 50)
    })
    $$('img').forEach(i => i.alt = 'Image Unavailable at ' + i.src)
    const date = new Date()
    if(date.getUTCFullYear() >= 2021 && date.getMonth() >= 8 && date.getDate() > 5){
        $('#offer').remove()
    }
    window.addEventListener('hashchange',function(e){
        if(this.location.hash !== "" && $(this.location.hash)){
            this.setTimeout(()=>{
                window.scrollTo(0,$(this.location.hash).offsetTop-60)
            },10)
        }
    })
    $$('a[href*="#"]').forEach(a=>{
        a.addEventListener('click',function(e){
            e.preventDefault()
            $$('.nav a').forEach(a=>a.classList.remove('active'))
            $(`.nav a[href="#${e.target.href.split('#')[1]}"]`).classList.add('active')
            window.scrollTo(0,$('#'+e.target.href.split('#')[1]).offsetTop-60)
        })
    })
    setTimeout(()=>{
    //$('body script').remove()
        $('style').remove()
        $('.load').remove()
    },1500)
})()
