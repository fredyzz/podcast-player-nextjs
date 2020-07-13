import Link from 'next/link'
import PodcastListItem from './PodcastListItem'

const PodcastList = ({ audioClips, openPodcastModal }) => {
	return (
		<>
			<h2>Ultimos podcast</h2>
			{audioClips.map((audioClip, key) => (
				<PodcastListItem
					audioClip={audioClip}
					key={key}
					openPodcastModal={openPodcastModal}
				/>
			))}

			<style jsx>{`
				h2 {
					padding: 5px;
					font-size: 0.9em;
					font-weight: 600;
					margin: 20px auto 0px auto;
					text-align: center;
				}

				.podcast {
					display: block;
					text-decoration: none;
					color: #333;
					padding: 15px;
					border-bottom: 1px solid rgba(0, 0, 0, 0.2);
					cursor: pointer;
				}
				.podcast:hover {
					color: #000;
				}
				.podcast h3 {
					margin: 0;
				}
				.podcast .meta {
					color: #666;
					margin-top: 0.5em;
					font-size: 0.8em;
				}
			`}</style>
		</>
	)
}

export default PodcastList
