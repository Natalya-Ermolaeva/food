function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

const modal = (triggerSelector, modalSelector, modalTimerId) => {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modalElem = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    modalElem.addEventListener('click', (e) => {
        if (e.target === modalElem  || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalElem.classList.contains('show')) { 
            closeModal(modalSelector);
        }
    });
}

export default modal;
export {closeModal};
export {openModal};
    