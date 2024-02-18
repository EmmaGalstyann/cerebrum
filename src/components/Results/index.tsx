import { IUserAnswer } from '@/types';
import styles from './style.module.scss';
export const Results = ({
	questions,
	time,
	startAgain,
}: {
	questions: IUserAnswer[];
	time: number;
	startAgain: () => void;
}) => {
	return (
		<div className={styles.result}>
			<div className={styles.result__content}>
				<h2>
					Calculation your
					<span>IQ score</span>...
				</h2>
				<p>
					Hang tight while our AI brain analyses your answers against the 5 key measures
					of intelligence...
				</p>
				<div className={styles.result__content_checkboxs}>
					<div>
						<span></span>
						<p>Memory</p>
					</div>
					<div>
						<span></span>
						<p>Speed</p>
					</div>
					<div>
						<span></span>
						<p>Reaction</p>
					</div>
					<div>
						<span></span>
						<p>Concentration</p>
					</div>
					<div>
						<span></span>
						<p>Logic</p>
					</div>
				</div>
			</div>
		</div>
	);
};
