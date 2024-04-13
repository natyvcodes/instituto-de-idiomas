(function() {
    const titleQuestions = document.querySelectorAll('.questions__title');
    const questionContainers = document.querySelectorAll('.questions__padding');
    
    titleQuestions.forEach((question, index) => {
        question.addEventListener('click', () => {
            const container = questionContainers[index];
            const computedStyles = window.getComputedStyle(container);
            const currentOverflow = computedStyles.overflow;
            container.style.height = '120px';
            // Cambiar el valor del overflow basado en su estado actual
            if (currentOverflow === "hidden") {
               
                container.style.overflow = "visible"; 
                container.style.height = '290px';
            } else {
                container.style.overflow = "hidden";
                container.style.height = '120px';
            }
        });
    });
})();