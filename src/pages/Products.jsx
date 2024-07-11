import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, Button } from 'react-bootstrap';
import './Products.css'
import { Link } from 'react-router-dom';

const Products = () => {
    const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/products`;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(BASE_URL);
            console.log('Productos:', response.data);
            setProducts(response.data.detail); // Actualizamos el estado con los productos obtenidos
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <div className='container-card'>
                {products.map(product => (
                    <Card as ={Link} to = '/products' className='card1' key={product._id} style={{ width: '18rem', margin: '10px' }}>
                        <Card.Img variant='top' src={product.url} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.price}</Card.Text>
                            <Button variant="primary">Ver Detalles</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Products;

