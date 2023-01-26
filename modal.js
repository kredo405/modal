class Modal {
    constructor(text) {
        this.text = text,
        this.init()
    }

    init() {
        this.createModal();
        this.modal = document.querySelector('.modal');
        this.close = document.querySelector('.close');
        this.atachEvents();
    }

    createModal() {
        const body = document.querySelector('body');
        const div = document.createElement('div');
        div.setAttribute('id', this.id);
        div.setAttribute('class', 'modal');
        div.innerHTML = `
            <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>${this.text}</p>
                </div>
       `;
        body.append(div);
    }

    atachEvents() {
        this.closeModal = this.closeModal.bind(this);
        this.close.addEventListener('click', this.closeModal);
    }


    closeModal() {
        this.modal.remove();
    }
}

