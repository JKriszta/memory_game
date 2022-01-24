export default function init(nr) {
	const cards = [];
	let url;
	let id = 0;

	for (let i = 0; i < nr*nr / 2; i++) {
		// előbb jöjjön létre az url és utána tudjuk vizsgáléni, tehát hátul
		do{
		url = `https://picsum.photos/id/${Math.floor(Math.random()*200)}/300`;
		}while(!checkImage(url)) // addig ism. amíg false
		cards.push(url)
	}

	// duplázás
	const cardsDupla = cards.reduce((acc, url) => {
		// acc.push({id: id++, url})
			acc.push({id: id++, url:url})
			acc.push({id: id++, url:url})
			return acc
	},[]);
	// véletlenszeű keverés
	cardsDupla.sort(()=>Math.random() - 0.5);
	return cardsDupla;

}

async function checkImage(url){
	const response = await fetch(url)
	const blob = await response.blob()
	console.log(blob.type)
	return blob.type.startsWith('image/')
}