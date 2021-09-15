import React, { useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import SignIn from './SignIn';

function monModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Veuillez vous connectez
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Connection</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <input type="text" name="username" placeholder="Votre Identifiant" required />
                </div>
                <div className="text-center pt-3">
                    <input type="password" name="password" placeholder="Votre Password" required/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Fermer
                </Button>
                <SignIn/>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default monModal