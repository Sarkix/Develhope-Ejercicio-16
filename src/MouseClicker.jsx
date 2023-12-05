import React from 'react';
import styles from './MouseClicker.module.css';

function MouseClicker({ name, imageSrc }) {
	const handleClick = () => {
		console.log(`Button clicked: ${name}`);
	};

	const handleImageClick = event => {
		console.log(`Image clicked: ${event.target.src}`);
		event.stopPropagation();
	};

	return (
		<button className={styles.button} name={name} onClick={handleClick}>
			Click me!
			<img
				className={styles.image}
				src={imageSrc}
				alt={`Button Image: ${name}`}
				onClick={handleImageClick}
			/>
		</button>
	);
}

export default MouseClicker;
