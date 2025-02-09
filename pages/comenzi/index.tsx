import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../App.css";

const Comenzi = () => {
    const [orders, setOrders] = useState<any>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/orders');
                setOrders(response.data.result);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="p-12">
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            {orders.length > 0 ? (
                <ul>
                    {orders.map((order: any, index: any) => (
                        <li key={index} className="mb-2">
                            <p><strong>Telefon:</strong> {order?.phone}</p>
                            <p><strong>Invitati:</strong> {order?.invites}</p>
                            <p><strong>Pahar:</strong> {order?.glassType}</p>
                            <p><strong>Ore:</strong> {order?.presence}</p>
                            <p><strong>Created At:</strong> {new Date(order?.createdAt).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default Comenzi;