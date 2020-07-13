import Link from 'next/link'
import ChannelGridItem from './ChannelGridItem'

const ChannelGrid = (props) => {
	const { channels } = props
	return (
		<>
			<div className="channels">
				{channels.map((channel, key) => (
					<ChannelGridItem channel={channel} key={key} />
				))}
			</div>
			<style jsx>{`
				.channels {
					display: grid;
					grid-gap: 15px;
					padding: 15px;
					grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
				}
			`}</style>
		</>
	)
}

export default ChannelGrid
