import Link from 'next/link'
import PodcastListItem from './PodcastListItem'

const PodcastList = ({ audioClips, openPodcastModal }) => {
	return (
		<div className="podcastlist">
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
				.podcastlist {
					background: #222426;
					box-shadow: inset 7px 7px 14px #1b1c1e, inset -7px -7px 14px #292c2e;
					padding-top: 5px;
					border-radius: 20px 20px 0 0;
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
		</div>
	)
}

export default PodcastList
