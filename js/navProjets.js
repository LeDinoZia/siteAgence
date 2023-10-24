
const lis = document.querySelectorAll(".projetItem");


lis.forEach(li => {
    

    li.dataset.originalContent = li.innerHTML;


    li.addEventListener('mouseenter', function() {

        li.classList.add('liImage');
        document.querySelector('.imageProjets').classList.add('rotate');
        li.innerHTML = '<img src="public/deep-blue-sea_shutterstock_1512728810.jpg" alt="Apperçu de notre projet">';
    });

    li.addEventListener('mouseleave', function() {

        document.querySelector('.imageProjets').classList.remove('rotate');
    
        li.classList.remove('liImage');
        
        li.innerHTML = li.dataset.originalContent;

        
    });
});
