import React, {useState} from 'react';
import Button from "../../../../UI/Button";
import DetailsCommentsForm from "./DetailsCommentsForm";

const commentsData = [
    { id: 1, username: 'EmmaL', stars: 5, comment: 'Absolutely love the quality! The fabric feels premium, and the stitching is flawless. Ordered twice already, and each time the delivery was lightning fast. Definitely my go-to store for stylish outfits!' },
    { id: 2, username: 'Mike23', stars: 4, comment: 'Amazing service! I was skeptical at first, but the product exceeded my expectations. The colors are vibrant, the fit is perfect, and the material is breathable. Highly recommended for anyone looking for trendy fashion!' },
    { id: 3, username: 'SophiaW', stars: 3, comment: 'Five stars! ⭐⭐⭐⭐⭐ The shipping was quick, the packaging was neat, and the clothes fit like a dream. Wore my new hoodie today, and I already got compliments. Will be shopping here again for sure!' },
    { id: 4, username: 'DanielK', stars: 4, comment: 'Impressive quality! The prices are fair, considering the excellent craftsmanship. I appreciate the attention to detail, from the seams to the overall comfort. Finally found a store I can trust!' },
    { id: 5, username: 'OliviaP', stars: 4, comment: 'Ordered a jacket, and I’m blown away. The material feels luxurious, and it’s super warm. Customer service was also great—they answered all my questions promptly. Will recommend to friends!' },
    { id: 6, username: 'ChrisM', stars: 4, comment: 'Super satisfied with my purchase. The T-shirt fits just right, and the print hasn’t faded after multiple washes. Great value for money. It’s refreshing to find a store with such high standards!' },
    { id: 7, username: 'LaraJ', stars: 4, comment: 'Finally found a store with stylish and affordable options. The jeans I bought fit like a glove, and they’re incredibly comfortable. Fast shipping was a bonus. 10/10 shopping experience!' },
    { id: 8, username: 'TomB', stars: 4, comment: 'Best online clothing store I’ve tried. The quality is consistent across different products. I’ve purchased hoodies, shirts, and pants—all fantastic. Keep up the great work!' },
    { id: 9, username: 'SophiaR', stars: 4, comment: 'Great collection! The variety of styles is impressive. I got a sweatshirt that’s now my favorite. So soft and cozy! The fabric holds up well even after several washes.' },
    { id: 10, username: 'JakeC', stars: 5, comment: 'Perfect fit! Finding the right size online can be tricky, but this store makes it easy. The size guide was accurate, and the shirt I bought fits me perfectly. Will be back for more!' },
    { id: 11, username: 'EmmaT', stars: 5, comment: 'Customer service is top-notch. Had an issue with my order, and they resolved it in no time. Plus, the clothes are just amazing. The quality speaks for itself!' },
    { id: 12, username: 'BrianH', stars: 5, comment: 'Loved my new hoodie! The fabric is thick and warm, perfect for chilly days. The color didn’t fade after washing. Definitely worth every penny!' },
    { id: 13, username: 'AnnaM', stars: 5, comment: 'Super comfy clothes! Ordered a loungewear set, and I practically live in it now. The material is soft, and the fit is just right. Can’t wait to order more!' },
    { id: 14, username: 'DavidR', stars: 5, comment: 'Exceptional quality at a reasonable price. The jacket I ordered looks exactly like the pictures, and the material is durable. A must-have for fashion lovers!' },
    { id: 15, username: 'LucyK', stars: 5, comment: 'Fast shipping and excellent quality. What more could you ask for? The T-shirt I bought is lightweight yet sturdy. It’s become my favorite casual wear!' }
];

const DetailsComments = () => {

    const [comments, setComments] = useState(commentsData);
    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 5;

    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

    const totalPages = Math.ceil(comments.length / commentsPerPage);

    const addComment = (newComment) => {
        setComments(prevComments => {
            const updatedComments = [newComment, ...prevComments];
            setCurrentPage(1);  // Reset to first page after adding a comment
            return updatedComments;
        });
    };

    return (
        <div className="details-comments">
            <DetailsCommentsForm addComment={addComment}  />
            {currentComments.map(({ id, username, stars, comment }) => (
                <div key={id} className="details-comments__item">
                    <h3 className="details-comments__username">{username}</h3>
                    <p className="details-comments__stars">{'⭐'.repeat(stars)}</p>
                    <p className="details-comments__text">{comment}</p>
                </div>
            ))}
            <div className="details-comments__pagination">
                <Button
                    type={'button'}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Prev
                </Button>
                <span> Page {currentPage} of {totalPages} </span>
                <Button
                    type={'button'}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default DetailsComments;
