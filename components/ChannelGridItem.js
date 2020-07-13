import { Link } from '../routes'
import slug from '../helpers/slug'

const ChannelGridItem = (props) => {
	const { channel } = props
	return (
		<>
			<Link
				route="channel"
				params={{
					slug: slug(channel.title),
					id: channel.id
				}}
				key={channel.id}
			>
				<a className="channel">
					<img src={channel.urls.logo_image.original} alt="channel image" />
					<h3>{channel.title}</h3>
				</a>
			</Link>

			<style jsx>{`
				.channel {
					display: block;
					border-radius: 3px;
					background: #ffffff;
					box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
					margin-bottom: 0.5em;
				}
				a.channel {
					display: block;
					margin-bottom: 0.5em;
					color: #333;
					text-decoration: none;
				}
				.channel img {
					width: 100%;
					border-radius: 3px;
				}

				h3 {
					padding: 5px;
					text-align: center;
				}
			`}</style>
		</>
	)
}

export default ChannelGridItem
