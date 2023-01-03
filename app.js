const li1 = document.getElementsByClassName('faqs')[0]
const li2 = document.getElementsByClassName('faqs')[1]
const li3 = document.getElementsByClassName('faqs')[2]
const li4 = document.getElementsByClassName('faqs')[3]
const li5 = document.getElementsByClassName('faqs')[4]

const pFaq1 = document.getElementsByClassName('pFaqs')[0]
const pFaq2 = document.getElementsByClassName('pFaqs')[1]
const pFaq3 = document.getElementsByClassName('pFaqs')[2]
const pFaq4 = document.getElementsByClassName('pFaqs')[3]
const pFaq5 = document.getElementsByClassName('pFaqs')[4]

const container = document.getElementById('container')


li1.addEventListener('click', (e) => { 
    if(pFaq1.style.display == 'none'){
        pFaq1.style.display = 'block'
    }else{
        pFaq1.style.display = 'none'
    }
});

li2.addEventListener('click', (e) => { 
    if(pFaq2.style.display == 'none'){
        pFaq2.style.display = 'block'
    }else{
        pFaq2.style.display = 'none'
    }
});

li3.addEventListener('click', (e) => { 
    if(pFaq3.style.display == 'none'){
        pFaq3.style.display = 'block'
    }else{
        pFaq3.style.display = 'none'
    }
});

li4.addEventListener('click', (e) => { 
    if(pFaq4.style.display == 'none'){
        pFaq4.style.display = 'block'
    }else{
        pFaq4.style.display = 'none'
    }
});

li5.addEventListener('click', (e) => { 
    if(pFaq5.style.display == 'none'){
        pFaq5.style.display = 'block'
    }else{
        pFaq5.style.display = 'none'
    }
});