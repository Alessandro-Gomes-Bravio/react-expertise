import './Delivery.css';
const Delivery = ({ name, orderID, delivered }) => {
    return (
        <>
        <ul className='Delivery'>
            <h2 className='DeliveryName'>{name}</h2>
            <h3 className='DeliveryID'>{orderID}</h3>
            <p className='DeliveryStatus'>{delivered}</p>
        </ul>

        </>
    );
}

export default Delivery;
