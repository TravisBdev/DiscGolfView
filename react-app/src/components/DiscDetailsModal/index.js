
const DiscDetailsModal = ({data}) => {
    return (
        <div className="flight-data-container">
            <p className="flight-name">{data.name}</p>
            <p className="flight-nums">{data.numbers}</p>
            <p className="flight-sum">{data.summary}</p>
        </div>
    )
}
export default DiscDetailsModal