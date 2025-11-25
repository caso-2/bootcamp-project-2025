import {IComment} from '../database/blogSchema';
import style from './comment.module.css'

// type IComment = {
//     user: string;
//     comment: string;
//     date: Date;
// };

{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
	/*
		Implementation up to you...
	*/
    return (<div>
            <p>
                {new Date(time).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit',})}
            </p>
    </div>
)
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={style.card}>
            <h4 className={style.title}>{comment.user}</h4>
            <span>{parseCommentTime(comment.date)}</span>
            <p>{comment.comment}</p>
        </div>
    );
}

export default Comment;