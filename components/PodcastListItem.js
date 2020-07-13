import { Link } from '../routes'
import slug from '../helpers/slug'

const PodcastListItem = ({ audioClip, openPodcastModal }) => {
	return (
		<>
			<Link
				route="podcast"
				params={{
					slugChannel: slug(audioClip.channel.title),
					idChannel: audioClip.channel.id,
					slug: slug(audioClip.title),
					id: audioClip.id
				}}
				key={audioClip.id}
			>
				<a className="podcast" onClick={(e) => openPodcastModal(e, audioClip)}>
					<h3>{audioClip.title}</h3>
					<div className="meta">
						{Math.ceil(audioClip.duration / 60)} minutes
					</div>
				</a>
			</Link>

			<style jsx>{`
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

export default PodcastListItem
