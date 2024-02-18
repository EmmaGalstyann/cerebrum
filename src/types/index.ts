export interface IQuestion {
	id: number;
	correctAnswerID: tAnswerId;
}

export interface IUserAnswer extends IQuestion {
	userAnswerID?: tAnswerId;
}

export type tAnswerId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
