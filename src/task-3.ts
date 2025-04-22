
interface FullCommentData {
	id: number;
	email: string;
	postId: number;
	name: string;
	body: string;
}

interface RequiredCommentData {
	ID: number;
	Email: string;
}

const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<void> => {
	const response = await fetch(url);
	const data: FullCommentData[] = await response.json();
	const result: RequiredCommentData[] = data.map((item: FullCommentData): RequiredCommentData => {
		return {
			ID: item.id,
			Email: item.email,
		}
	}).slice(0, 20)

	if(!response.ok) {
		throw new Error('Could not find comments');
	}
	console.log(result)

}

getData(COMMENTS_URL).catch(error => console.log(error));
