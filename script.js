document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        
        
        document.querySelectorAll('.nav-link').forEach(i => {
            i.classList.remove('active');
        });
        
        
        this.classList.add('active');
        
        
        document.querySelectorAll('.content-page').forEach(page => {
            page.classList.remove('active');
        });
        
        
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.classList.add('active');
        }
    });
});


function configurarDragAndDrop() {
    let draggableCards = document.querySelectorAll('.card');
    let grid = document.querySelector('.grid');  // Alterado para .grid
    let draggedCard = null;
    
    draggableCards.forEach(card => {
        card.addEventListener('dragstart', function(e) {
            draggedCard = this;
            setTimeout(() => {
                this.style.opacity = '0.4';
            }, 0);
        });
        
        card.addEventListener('dragend', function() {
            this.style.opacity = '1';
            draggedCard = null;
        });
        
        card.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        
        card.addEventListener('dragenter', function(e) {
            e.preventDefault();
            if (this !== draggedCard) {
                this.style.backgroundColor = '#f0f0f0';
            }
        });
        
        card.addEventListener('dragleave', function() {
            if (this !== draggedCard) {
                this.style.backgroundColor = 'white';
            }
        });
        
        card.addEventListener('drop', function(e) {
            e.preventDefault();
            if (this !== draggedCard) {
                this.style.backgroundColor = 'white';
                
                
                const allCards = Array.from(grid.children);  // Alterado para .grid
                const indexDragged = allCards.indexOf(draggedCard);
                const indexTarget = allCards.indexOf(this);
                
                if (indexDragged < indexTarget) {
                    grid.insertBefore(draggedCard, this.nextSibling);  // Alterado para .grid
                } else {
                    grid.insertBefore(draggedCard, this);  // Alterado para .grid
                }
            }
        });
    });
}


configurarDragAndDrop();


document.querySelectorAll('.calendar-day').forEach(day => {
    day.addEventListener('click', function() {
        document.querySelectorAll('.calendar-day').forEach(d => {
            d.classList.remove('active');
        });
        this.classList.add('active');
        if (this.classList.contains('has-event')) {
            alert('Eventos para o dia ' + this.textContent + ' de Março: \n- Início do Semestre Letivo\n- Reunião do Colegiado');
        }
    });
});


document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active');
        });
        this.classList.add('active');
    });
});


document.querySelectorAll('.chat-item').forEach(chat => {
    chat.addEventListener('click', function() {
        document.querySelectorAll('.chat-item').forEach(c => {
            c.classList.remove('active');
        });
        this.classList.add('active');
        if (this.querySelector('.chat-badge')) {
            this.querySelector('.chat-badge').style.display = 'none';
        }
    });
});

// Simulação de funcionalidades de botão
document.querySelectorAll('.card-action').forEach(action => {
    action.addEventListener('click', function() {
        if (this.querySelector('.fa-plus')) {
            alert('Funcionalidade de adição será implementada aqui.');
        } else if (this.querySelector('.fa-sync')) {
            alert('Atualizando dados...');
        } else if (this.querySelector('.fa-ellipsis-h')) {
            alert('Menu de opções será implementado aqui.');
        }
    });
});

