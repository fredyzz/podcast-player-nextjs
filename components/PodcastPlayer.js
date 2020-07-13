import { Link } from '../routes'
import slug from '../helpers/slug'

const PodcastPlayer = ({ audioClip, onClose }) => {
	return (
		<div>
			<nav>
				{onClose ? (
					<a onClick={onClose}>&lt; Volver</a>
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
					border-radius: 25%;
					background: #ffffff;
					box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
					padding: 8px;
					margin: 10px;
				}

				nav a {
					color: black;
					text-decoration: none;
				}

				.cover {
					width: 100vw;
					height: 60vh;
					text-align: center;
					background: #ffffff;
				}

				.cover img {
					max-height: 80%;
					margin: 50px auto;
					border-radius: 3px;
					box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
				}

				.info {
					height: 40vh;
					padding-top: 5vh;
					padding-bottom: 40px;
					text-align: center;
					background: #ffffff;
					box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
					color: black;
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

			<style jsx global>{`
				body {
					margin: 0;
					font-family: system-ui;
					background: #ffffff;
				}
			`}</style>
		</div>
	)
}

// Podcast.getInitialProps = async ({ query }) => {
// 	let idAudioClip = query.id

// 	// getting audio clip
// 	let reqAudioClip = await fetch(
// 		`https://api.audioboom.com/audio_clips/${idAudioClip}.mp3`
// 	)
// 	let dataAudioClip = await reqAudioClip.json()
// 	let audioClip = dataAudioClip.body.audio_clip

// 	return { audioClip }
// }

export default PodcastPlayer
