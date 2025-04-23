
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

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<RequiredCommentData[]> => {
	const response = await fetch(url);
	if(!response.ok) {
		throw new Error('Could not find comments');
	}

	const data: FullCommentData[] = await response.json();
	return data.map((item: FullCommentData): RequiredCommentData => {
		return {
			ID: item.id,
			Email: item.email,
		}
	}).slice(0, 20);
}


getData(COMMENTS_URL)
	.then(data => console.log(data))
	.catch(error => console.log(error));
