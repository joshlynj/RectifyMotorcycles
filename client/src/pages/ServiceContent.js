export default function ServiceContent({service, cost}) {
    return (
    <div className='service-item'>
        <h2> {service} </h2>
        <img src="https://carpyscaferacers.com/wp-content/uploads/2014/02/vapor5.jpg" alt="Engine Case Vapor Blasting"></img>
        <h3> Cost: {cost} </h3>
        <a href="http://localhost:3000/order-form">
            <button>Add Service</button>
        </a>
    </div>
    )};

