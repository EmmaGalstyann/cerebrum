'use client';
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

export const Pagination = ({
	current,
	max,
	toQuestion,
}: {
	current: number;
	max: number;
	toQuestion: (val: number) => void;
}) => {
	const elementRefs = useRef<(HTMLAnchorElement | null)[]>([]);
	const paginationNumbers = [];

	for (let i = 0; i <= max; i++) {
		paginationNumbers.push(i);
	}

	useEffect(() => {
		elementRefs.current = elementRefs.current.slice(0, 30);
		const el = elementRefs?.current[current];
		if (el) {
			el.scrollIntoView({ block: 'nearest', inline: 'start', behavior: 'smooth' });
		}
	}, [current]);

	return (
		<div className={`f gap-2 ${styles.pagination}`}>
			{paginationNumbers.map((el, index) => {
				return (
					<a
						ref={el => (elementRefs.current[index] = el)}
						key={el}
						className={`${styles.pagination__item} ${
							current === el && styles['pagination__item--active']
						}`}
						onClick={() => toQuestion(el)}
					>
						{el + 1}
					</a>
				);
			})}
		</div>
	);
};
