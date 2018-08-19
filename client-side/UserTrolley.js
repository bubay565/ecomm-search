import React from 'react'

const UserTrolley = ({ trolley, onAddToTrolley, closeTrolley }) => {
    const trows = trolley.map((item) => {
        return <ItemRow 
            key={item.id}
            item={item}
            onAddToTrolley={onAddToTrolley}
        />
    }); 

    return (
        <div className="displayTrolley">
            <h2>My Trolley</h2>
            <table className="trolley">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {trows}
                </tbody>
            </table>
            <div className="closeTrolley">
                <button type="button" onClick={() => closeTrolley()}>Close Trolley</button>
            </div>
        </div>
    )
}

const ItemRow = ({ item, onAddToTrolley }) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.quantity}
                <button onClick={() => onAddToTrolley(item, true)}>+</button>
                <button onClick={() => onAddToTrolley(item, false)}>-</button>
            </td>
            <td>{parseFloat(parseFloat(item.price) * +(item.quantity)).toFixed(2)}</td>
        </tr>
    )
} 

export default UserTrolley