import Layout from '../components/Layout';
import Content from '../components/Content';
import Header from '../components/Header';
import Card from '../components/Card'
import Quote from '../components/Quote'

import {getQuote} from '../lib/quotes-api'

const HELP_TEXT = {
	fetch: 'With an external fetch',
	'api-routes': 'With API routes'
}

const Index=({quotes})=>(
	<Layout>
		<Content>
			<Header>"Kanye Quotes"</Header>
			{quotes.map(({id,quote})=>(
			<Card key={id}>
				<Quote text={quote} helpText={HELP_TEXT[id]}></Quote>
			</Card>
			))}
		</Content>
	</Layout>
)

Index.getInitialProps =async()=>{
	const quotes = [
		{...(await getQuote('https://api.kanye.rest')),id:'fetch'},
		{...(await getQuote('https://localhost:3000/api/quote')),id:'api-routes'}
	];

	return { quotes }
}

export default Index;
