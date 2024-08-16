import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import Modal from 'react-modal';

const DraggableCard = ({ card }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <Draggable defaultPosition={card.position}>
            <ResizableBox 
                width={200} 
                height={150} 
                minConstraints={[100, 100]} 
                maxConstraints={[400, 300]}
                handle={<span className="custom-handle" />}
                draggableOpts={{ grid: [25, 25] }} 
            >
                <div style={styles.cardContainer}>
                    <p>{card.text.length > 20 ? card.text.substring(0, 20) + '...' : card.text}</p>
                    <button style={styles.button} onClick={openModal}>
                        Show More
                    </button>
                    <Modal 
                        isOpen={isModalOpen} 
                        onRequestClose={closeModal} 
                        style={styles.modalStyle}
                    >
                        <h2>Card Details</h2>
                        <p>{card.text}</p>
                        <button onClick={closeModal}>Close</button>
                    </Modal>
                </div>
            </ResizableBox>
        </Draggable>
    );
};

const styles = {
    cardContainer: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
        cursor: 'move',  
        position: 'relative'
    },
    button: {
        marginTop: '10px',
        padding: '5px 10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer'
    },
    modalStyle: {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: '1px solid #ccc'
        },
    }
};

export default DraggableCard;
