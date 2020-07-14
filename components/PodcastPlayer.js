import { Link } from '../routes'
import slug from '../helpers/slug'

const PodcastPlayer = ({ audioClip, onClose }) => {
	return (
		<div>
			<nav>
				{onClose ? (
					<a onClick={onClose}>&lt; Back</a>
				) : (
					<Link
						route="channel"
						params={{
							slug: slug(audioClip.channel.title),
							id: audioClip.channel.id
						}}
					>
						<a>Volver</a>
					</Link>
				)}
			</nav>
			<div className="cover">
				<img src={audioClip.urls.image} alt="" />
			</div>

			<div className="info">
				<h1>{audioClip.title}</h1>
				<p>Duration: {Math.ceil(audioClip.duration / 60)} minutes</p>

				<audio controls autoPlay={false}>
					<source src={audioClip.urls.high_mp3} type="audio/mpeg" />
				</audio>
			</div>

			<style jsx>{`
				nav {
					position: absolute;
					display: inline-block;
					width: 40px;
					border-radius: 25%;
					background: #222426;
					box-shadow: 7px 7px 14px #1b1c1e, -7px -7px 14px #292c2e;
					padding: 8px;
					margin: 15px;
				}

				nav a {
					color: white;
					text-decoration: none;
					cursor: pointer;
				}

				.cover {
					width: 100vw;
					height: 60vh;
					text-align: center;
					background: #222426;
					box-shadow: inset 7px 7px 14px #1b1c1e, inset -7px -7px 14px #292c2e;
				}

				.cover img {
					max-height: 80%;
					max-width: 80%;
					margin: 80px auto;
					border-radius: 20px;
					box-shadow: 7px 7px 14px #1b1c1e, -7px -7px 14px #292c2e;
				}

				.info {
					height: 40vh;
					padding-top: 5vh;
					padding-bottom: 40px;
					text-align: center;
					background: #222426;
					box-shadow: 7px 7px 14px #1b1c1e, -7px -7px 14px #292c2e;
				}

				h1 {
					margin: 0;
					font-weight: 600;
					padding: 15px;
					text-transform: uppercase;
				}
				h2 {
					padding: 5px;
					font-size: 0.9em;
					font-weight: 600;
					margin: 0;
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
		</div>
	)
}

export default PodcastPlayer
