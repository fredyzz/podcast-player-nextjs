import { useState } from 'react'
import Link from 'next/link'
import Error from './_error'
import PodcastList from '../components/PodcastList'
import SeriesList from '../components/SeriesList'
import Layout from '../components/Layout'
import PodcastPlayer from '../components/PodcastPlayer'

const Channel = ({ channel, audioClips, series, statusCode }) => {
	const [openPodcast, setOpenPodcast] = useState(null)

	const openPodcastModal = (e, podcast) => {
		e.preventDefault()
		setOpenPodcast(podcast)
	}

	const onClose = (e) => {
		e.preventDefault()
		setOpenPodcast(null)
	}

	if (statusCode !== 200) {
		return <Error statusCode={statusCode} />
	}

	return (
		<Layout title="Podcast">
			<nav>
				<Link href="/">
					<a>&lt; Back</a>
				</Link>
			</nav>
			<div
				className="banner"
				style={{
					backgroundImage: `url(${channel.urls.banner_image.original})`
				}}
			></div>

			{openPodcast && (
				<div className="modal">
					<PodcastPlayer audioClip={openPodcast} onClose={onClose} />
				</div>
			)}

			<h1>{channel.title}</h1>
			<SeriesList series={series} />
			<PodcastList
				audioClips={audioClips}
				openPodcastModal={openPodcastModal}
			/>

			<style jsx>{`
				nav {
					position: absolute;
					display: inline-block;
					width: 40px;
					border-radius: 25%;
					background: #222426;
					box-shadow: 7px 7px 14px #1b1c1e, -7px -7px 14px #292c2e;
					padding: 8px;
					margin: -24px 0 0 30px;
				}

				nav a {
					color: white;
					text-decoration: none;
				}

				.banner {
					width: 100%;
					padding-bottom: 25%;
					background-position: 50% 50%;
					background-size: cover;
					background: #222426;
					box-shadow: 7px 7px 14px #1b1c1e, -7px -7px 14px #292c2e;
				}

				h1 {
					color: white;
					font-weight: 600;
					text-shadow: 0 0 11px #222426;
					padding: 5px;
					text-align: center;
				}

				.modal {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					z-index: 99999;
					background: black;
				}
			`}</style>
		</Layout>
	)
}

Channel.getInitialProps = async ({ query, res }) => {
	try {
		let idChannel = query.id

		let [reqChannel, reqSeries, reqAudios] = await Promise.all([
			fetch(`https://api.audioboom.com/channels/${idChannel}`),
			fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
			fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
		])

		if (reqChannel.status >= 404) {
			res.statusCode = reqChannel.status
			return {
				channel: null,
				audioClips: null,
				series: null,
				statusCode: reqChannel.status
			}
		}

		// getting channel data
		let dataChannel = await reqChannel.json()
		let channel = dataChannel.body.channel
		// getting audios data
		let dataAudios = await reqAudios.json()
		let audioClips = dataAudios.body.audio_clips
		// getting chiled channels data
		let dataSeries = await reqSeries.json()
		let series = dataSeries.body.channels

		return { channel, audioClips, series, statusCode: 200 }
	} catch (err) {
		res.statusCode = 503
		return { channel: null, audioClips: null, series: null, statusCode: 503 }
	}
}

export default Channel
