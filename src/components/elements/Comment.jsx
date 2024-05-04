import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Comment = ({comments}) => {
    const { register, handleSubmit, reset } = useForm();
    const [currentComments, setCurrentComments] = useState(comments);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (data) => {
        if (data.comment.trim() !== '') {
            const updatedComments = [...currentComments, `Анонимный пользователь: ${data.comment}`];
            setCurrentComments(updatedComments);
            reset();
            setErrorMessage('');
        } else {
            setErrorMessage('Пожалуйста, введите комментарий перед его добавлением!');
        }
    };

    return (
        <>
            <div className="cardComment">
                <h4>Комментарии</h4>
                <div className="cardCommentContent">
                {errorMessage && <p>{errorMessage}</p>}
                <ul>
                    {currentComments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))}
                </ul>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Оставить комментарий</p>
                    <input type="text" {...register("comment")} />
                    <button className='addBtn' type="submit">Добавить комментарий</button>
                </form>
                </div>
            </div>
        </>
    )
}

export default Comment