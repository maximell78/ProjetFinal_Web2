import React, { useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalList from './ModalList';
import articles from '../services/BoutiqueData';

function monModalDetail() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <Button variant="primary" onClick={handleShow} className="m-2">
            Plus de détail
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Titre</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <ModalList boutiqueItems={articles}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default monModalDetail