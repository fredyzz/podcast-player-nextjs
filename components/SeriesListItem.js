import { Link } from '../routes'
import slug from '../helpers/slug'

const SeriesListItem = ({ serie }) => {
	return (
		<>
			<Link
				route="channel"
				params={{
					slug: slug(serie.title),
					id: serie.id
				}}
				key={serie.id}
			>
				<a className="channel">
					<img src={serie.urls.logo_image.original} alt="serie image" />
					<h3>{serie.title}</h3>
				</a>
			</Link>

			<style jsx>{`
				h2 {
					padding: 5px;
					font-size: 0.9em;
					font-weight: 600;
					margin: 20px auto 0px auto;
					text-align: center;
				}

				.channels {
					display: grid;
					grid-gap: 15px;
					padding: 15px;
					grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
				}
				a.channel {
					display: block;
					margin-bottom: 0.5em;
					color: #333;
					text-decoration: none;
				}
				.channel img {
					border-radius: 3px;
					box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
					width: 100%;
				}
			`}</style>
		</>
	)
}

export default SeriesListItem
