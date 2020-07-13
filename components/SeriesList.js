import Link from 'next/link'
import SeriesListItem from './SeriesListItem'

const SeriesList = ({ series }) => {
	return (
		<>
			{series.length > 0 && (
				<div>
					<h2>Series</h2>
					<div className="channels">
						{series.map((serie, key) => (
							<SeriesListItem serie={serie} key={key} />
						))}
					</div>
				</div>
			)}

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

export default SeriesList
