import './DiscDetailsModal.css'
const DiscDetailsModal = ({data}) => {
    return (
        <div className="flight-data-container">
            <div className="name-and-nums">
                <p className="flight-name">{data.name}</p>
                <p className="flight-nums">{data.numbers}</p>
            </div>
            <p className="flight-sum">{data.summary}</p>
        </div>
    )
}
export default DiscDetailsModal