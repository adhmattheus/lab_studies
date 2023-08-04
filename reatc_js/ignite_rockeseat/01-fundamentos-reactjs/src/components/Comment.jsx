import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeletComment }) {

	const [likeCount, setLikeCount] = useState(0);

	function handleDeletComment() {
		onDeletComment(content);
	}

	function handleLikeComment() {
		setLikeCount((state) => {
			return state + 1
		});
	}

	return (
		<div className={styles.comment}>

			<Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

			<div className={styles.commentBox}>

				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Mayk Brito</strong>
							<time title='04 de Maio às 09:20:30' dateTime='2023-04-05 09:20:30'>Cerca de 1h atrás</time>
						</div>

						<button
							onClick={handleDeletComment}
							title='Deletar comentário'>
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}