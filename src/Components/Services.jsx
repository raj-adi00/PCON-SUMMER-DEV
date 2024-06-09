import React, { useState, useEffect } from 'react';
import './MemoryGame.css'; // Import the CSS file for additional styling
import { Link } from 'react-router-dom';

const emojiPairs = ['😀', '🎉', '🍕', '🐱', '🚀', '🌟', '🌈', '⚽'];
const generateShuffledCards = () => {
    const cards = [...emojiPairs, ...emojiPairs].map((emoji, index) => ({
        id: index,
        emoji,
        matched: false,
    }));
    return cards.sort(() => Math.random() - 0.5);
};

const Services = () => {
    const [cards, setCards] = useState(generateShuffledCards());
    const [selectedCards, setSelectedCards] = useState([]);
    const [steps, setSteps] = useState(0);
    const [matchedPairs, setMatchedPairs] = useState(0);

    useEffect(() => {
        if (selectedCards.length === 2) {
            setSteps(steps + 1);
            const [first, second] = selectedCards;
            if (first.emoji === second.emoji) {
                setMatchedPairs(matchedPairs + 1);
                setCards(prevCards =>
                    prevCards.map(card =>
                        card.emoji === first.emoji ? { ...card, matched: true } : card
                    )
                );
            }
            setTimeout(() => setSelectedCards([]), 1000);
        }
    }, [selectedCards]);

    const handleCardClick = card => {
        if (
            selectedCards.length < 2 &&
            !selectedCards.includes(card) &&
            !card.matched
        ) {
            setSelectedCards([...selectedCards, card]);
        }
    };

    const handleReplay = () => {
        setCards(generateShuffledCards());
        setSelectedCards([]);
        setSteps(0);
        setMatchedPairs(0);
    };

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col items-center p-4">
            <Link to='/home'><button className='text-xl font-semibold text-black bg-white px-2 py-1 rounded-md fixed right-1 top-2 hover:bg-gray-500 hover:text-white duration-100'>Back to home</button></Link>
            <h1 className="text-white text-5xl font-extrabold mb-6 font-sans">Memory Game</h1>
            <p className="text-white text-xl mb-4">Match all pairs with the fewest steps possible!</p>
            <div className="grid grid-cols-4 gap-4">
                {cards.map(card => (
                    <div
                        key={card.id}
                        className={`card ${selectedCards.includes(card) || card.matched ? 'flipped' : ''}`}
                        onClick={() => handleCardClick(card)}
                    >
                        <div className="card-inner">
                            <div className="card-front">
                                <span className="text-3xl">{card.emoji}</span>
                            </div>
                            <div className="card-back bg-white"></div>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-white text-xl mt-8">Steps: {steps}</p>
            {matchedPairs === emojiPairs.length && (
                <div className="text-center mt-4">
                    <p className="text-white text-2xl mb-4">Congratulations! You completed the game in {steps} steps.</p>
                    <button
                        className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-700 transition duration-300 ease-in-out text-lg font-semibold"
                        onClick={handleReplay}
                    >
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default Services;
