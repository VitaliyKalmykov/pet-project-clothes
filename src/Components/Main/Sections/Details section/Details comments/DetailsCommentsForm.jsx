import React, { useState } from 'react';
import TextInput from "../../../../UI/TextInput";
import TextareaInput from "../../../../UI/TextareaInput";

const DetailsCommentsForm = ({ addComment }) => {
    const [username, setUsername] = useState('');
    const [stars, setStars] = useState(5);
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('username:', username);
        console.log('stars:', stars);
        console.log('comment:', comment);


        if (!username || !comment) {
            setError('Please fill in all fields.');
            return;
        }

        const newComment = {
            id: Date.now(),
            username: username,
            stars: stars,
            comment: comment,
        };

        addComment(newComment);
        setUsername('');
        setStars(5);
        setComment('');
        setError('');
    };

    return (
        <form className="details-comments-form" onSubmit={handleSubmit}>
            <select value={stars} onChange={(e) => setStars(Number(e.target.value))}>
                {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{'⭐'.repeat(num)}</option>
                ))}
            </select>
            {error && <p className="error">{error}</p>}
           <div>
               <TextInput
                   label={'Name'}
                   type="text"
                   placeholder="Your name"
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
               />
           </div>
                <TextareaInput
                    title={'Write your comment...'}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    maxLength={300}
                />
            <button type="submit">Submit</button>
        </form>
    );
};

export default DetailsCommentsForm;
