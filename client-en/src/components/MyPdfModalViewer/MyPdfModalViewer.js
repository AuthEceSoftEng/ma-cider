import React from 'react';
import './styles.css';


const closeModal = () => {
    document.getElementById('my-pdf-modal').style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflow = '';
    // To prevent the flickering when opening the next pdf (showing still the old)
    Array.from(document.getElementsByTagName('embed')).forEach(el => {
        if (el.className === 'pdfobject') {
            try {
                el.parentNode.removeChild(el)
            } catch (error) {

            }
        }
    })
}

window.addEventListener('click', event => {
    if (event.target.id === 'my-pdf-modal') {
        closeModal();
    }
})

const MyPdfModalViewer = props => {
    return (
        <div id='my-pdf-modal' className='my-pdf-modal'>
            <div className='my-pdf-modal-content'>
                <span class="my-pdf-modal-close" onClick={closeModal}>&times;</span>
                <div id="my-pdf-modal-container"></div>
            </div>
        </div>
    )
}

export default MyPdfModalViewer;
