export interface Assignee {
	profileImageUrl: string;
	nickname: string;
	id: number;
}

export interface Card {
	id: number;
	title: string;
	description: string;
	tags: string[];
	dueDate: string;
	assignee: Assignee;
	imageUrl: string;
	teamId: string;
	columnId: number;
	createdAt: string;
	updatedAt: string;
}
export interface CardListData {
	card: Card;
	cursorId: number | null;
	totalCount: number;
}
