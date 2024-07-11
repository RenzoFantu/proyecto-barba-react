import './EpicBarba.css';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import axios from "axios";

const EpicBarba = () => {
    const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/products`
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(BASE_URL);
            console.log('Productos:', response.data);
            const {data} = response
            return data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const images = [
        {
            original: "https://res.cloudinary.com/da2aauwq2/image/upload/v1720491218/3_l1c1v9.png",
            thumbnail: "https://res.cloudinary.com/da2aauwq2/image/upload/v1720491218/3_l1c1v9.png",
        },
        {
            original: "https://res.cloudinary.com/da2aauwq2/image/upload/v1720491501/9_mytmi5.png",
            thumbnail: "https://res.cloudinary.com/da2aauwq2/image/upload/v1720491501/9_mytmi5.png",
        },
        {
            original: "https://res.cloudinary.com/da2aauwq2/image/upload/v1713222498/Beard-Store/zw77rxcfyehctnoj2aab.png",
            thumbnail: "https://res.cloudinary.com/da2aauwq2/image/upload/v1713222498/Beard-Store/zw77rxcfyehctnoj2aab.png",
        },
    ];

    return (
        <div>
            <div className="gallery-container">
                <div className='gallery-img'>
                    <ImageGallery items={images} />
                </div>

                <div className="description-gallery">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                    <h3>$ 39.990</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae incidunt deleniti pariatur i laborum.</p>
                    <hr />
                    <Button className='boton-buy'>Comprar</Button>
                    
                </div>
            </div>

            <div className="first-img-container">
                <img src="https://res.cloudinary.com/da2aauwq2/image/upload/v1713234733/Beard-Store/poavr6kp7q95l2boh9me.png" alt="barba-store" />
            </div>
            {/* Agrega más elementos de imagen según sea necesario */}

            <p>
                ¿Qué hace a Epic Barba tan único y esencial para tu rutina de cuidado de la barba? Déjame llevarte a un viaje por sus características increíbles:
                {/* Aquí puedes incluir más contenido */}
            </p>
        </div>
    );
}

export default EpicBarba;
