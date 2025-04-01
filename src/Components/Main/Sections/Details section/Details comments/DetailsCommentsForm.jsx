import React, { useState } from 'react';
import TextInput from "../../../../UI/TextInput";
import TextareaInput from "../../../../UI/TextareaInput";
import Button from "../../../../UI/Button";

const DetailsCommentsForm = ({ addComment }) => {
    const [username, setUsername] = useState('');
    const [stars, setStars] = useState(5);  // Початкове значення зірок 0
    const [hover, setHover] = useState(0);  // Початкове значення hover
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !comment) {
            setError('Please fill in all fields.');
            return;
        }

        const newComment = {
            id: Date.now(),
            username,
            stars,
            comment,
        };

        addComment(newComment);
        setUsername('');
        setStars(0);  // Скидаємо зірки після відправки
        setComment('');
        setError('');
    };

    return (
        <form className="details-comments-form" onSubmit={handleSubmit}>


            <div className="details-comments-form__star-rating">
                {[1, 2, 3, 4, 5].map(num => (
                    <Button
                        type={'button'}
                        key={num}
                        className={
                            "details-comments-form__star" +
                            (num <= (hover || stars) ? " details-comments-form__star--filled" : "")  // Клас для заповненої зірки
                        }
                        onMouseEnter={() => setHover(num)}   // При наведенні на зірку зберігаємо її номер в hover
                        onMouseLeave={() => setHover(0)}     // При відведенні мишки скидаємо hover
                        onClick={() => setStars(num)}        // При кліку зберігаємо вибрану кількість зірок
                    >
                        <svg className="star-icon" width="24" height="24">
                            <use href="/assets/symbol-defs.svg#icon-star" />
                        </svg>
                    </Button>
                ))}
            </div>


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
                maxLength={1000}
            />
            <button className={'details-comments-form__button'} type="submit">Submit</button>
        </form>
    );
};

export default DetailsCommentsForm;