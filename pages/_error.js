const { default: Layout } = require('../components/Layout')
import Link from 'next/link'

function Error({ statusCode }) {
	return (
		<Layout title="Error 🤯">
			{statusCode === 404 ? (
				<div className="message">
					<h1>This page doesn't exist</h1>
					<Link href="/">
						<a>Go to Homepage</a>
					</Link>
				</div>
			) : (
				<div className="message">
					<h1>Something wrong happended</h1>
					<p>Try again in a few seconds</p>
				</div>
			)}

			<style jsx>
				{`
					.message {
						padding: 100px 30px;
						text-align: center;
					}
					h1 {
						margin-bottom: 2em;
					}
					a {
						text-decoration: none;
						color: black;
					}
				`}
			</style>
		</Layout>
	)
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

export default Error
