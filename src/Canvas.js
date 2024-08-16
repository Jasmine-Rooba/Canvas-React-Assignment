import React, { useState } from 'react';
import DraggableCard from './DraggableCard';

const Canvas = () => {
    const [cards, setCards] = useState([]);

    const addCard = () => {
        const cardCount = cards.length + 1; 
        const newCard = {
            id: `card${Date.now()}`,
            text: `Card ${cardCount}`,
            position: { x: 100, y: 100 },
        };
        setCards([...cards, newCard]);
    };

    return (
        <div style={styles.canvasContainer}>
            <button style={styles.addButton} onClick={addCard}>
                Add Card
            </button>
            {cards.map((card) => (
                <DraggableCard key={card.id} card={card} />
            ))}
        </div>
    );
};

const styles = {
    canvasContainer: {
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'scroll',
        border: '1px solid black',
        backgroundColor: '#f0f0f0', // Subtle background color for contrast
    },
    addButton: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: 10, // Ensure button stays above other elements
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default Canvas;
