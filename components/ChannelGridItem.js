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
					border-radius: 10px;
					box-shadow: 7px 7px 14px #1b1c1e, -7px -7px 14px #292c2e;
					margin-bottom: 0.5em;
				}
				a.channel {
					display: block;
					margin-bottom: 0.5em;
					color: white;
					text-decoration: none;
				}
				.channel img {
					width: 100%;
					border-radius: 10px;
				}

				h3 {
					font-size: 12px;
					padding: 5px;
					text-align: center;
				}
			`}</style>
		</>
	)
}

export default ChannelGridItem
