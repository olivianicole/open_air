import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { TextForm } from './TextForm';

function TextFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>text</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <TextForm />
                </Modal>
            )}
        </>
    )
}

export default TextFormModal;