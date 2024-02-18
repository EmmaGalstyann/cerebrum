import { ChangeEvent } from 'react';
import Image from 'next/image';

import { IUserAnswer, tAnswerId } from '@/types';
import styles from './style.module.scss';
import IconArrow from '../../assets/icons/btn-arrow.svg';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';

export const Question = ({
	question,
	current,
	max,
	selectAnswer,
	next
}: {
	question: IUserAnswer;
	current: number;
	max: number;
	selectAnswer: (question: IUserAnswer) => void;
	next: () => void;
}) => {
	const navigate = useRouter();
	const changeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
		selectAnswer({ ...question, userAnswerID: e.target.value as tAnswerId });
	};
	return (
		<div className={`f flex-wrap justify-between ${styles.question}`}>
			<div className={styles.question__main}>
				<Image fill src={`/images/question${question.id}.png`} alt="question" />
			</div>
			<div className={styles.question__content}>
				<h6 className={`text-center ${styles.question__content_title}`}>
					Choose your answer:
				</h6>
				<div className={`f flex-wrap gap-1 ${styles.question__content_answers}`}>
					{['A', 'B', 'C', 'D', 'E', 'F'].map((answer, index) => {
						return (
							<label
								key={`question${question.id}-answer${index + 1}`}
								className={`f align-center justify-between gap-1 ${
									styles.question__content_answers_item
								} ${
									question.userAnswerID &&
									styles['question__content_answers_item--disabled']
								} ${
									question.userAnswerID === answer &&
									styles['question__content_answers_item--active']
								}`}
							>
								<h2 className="text-center">{answer}</h2>
								<input
									type="radio"
									value={answer}
									name={`question${question.id}`}
									checked={question.userAnswerID === answer}
									onChange={changeAnswer}
									// disabled={question.userAnswerID ? true : false}
								/>

								<Image
									src={`/images/question${question.id}_answer${index + 1}.png`}
									alt="answer"
									width={56}
									height={42}
								/>
							</label>
						);
					})}
				</div>
			</div>
			{current === max && (
				<div className="f column gap-3">
					<div className="f justify-center">
						<button className="btn" onClick={next}>
							Get my results <IconArrow />
						</button>
					</div>
					<p className="light" style={{ marginBottom: '10px' }}>
						Do you want to confirm your answers? You will not be able to edit them after
						validation.
					</p>
				</div>
			)}
		</div>
	);
};
