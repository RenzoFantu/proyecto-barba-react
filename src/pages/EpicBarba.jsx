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
                    <h1>Recortadora de barba Epic Barba </h1>
                    <h3>$ 39.990</h3>
                    <p>¡Transforma tu rutina de cuidado personal con nuestra Recortadora de Barba 4 en 1! Logra una barba perfecta en casa sin necesidad de ir al barbero. Incluye contorneadora, afeitadora de cuello, peine ajustable de 1 a 12 mm y rasuradora de vello nasal. Ahorra tiempo y dinero mientras mantienes un look impecable todos los días.</p>
                    <hr />
                    <Button className='boton-buy'>Comprar</Button>
                    
                </div>
            </div>

            <div className="first-img-container">
                <img src="https://res.cloudinary.com/da2aauwq2/image/upload/v1713234733/Beard-Store/poavr6kp7q95l2boh9me.png" alt="barba-store" />
            </div>
            <div className="first-img-container">
                <img src="https://res.cloudinary.com/da2aauwq2/image/upload/v1713237457/Beard-Store/rxsssp1nwbu3ipxqyyuf.png" alt="barba-store" />
            </div>
            

            
        </div>
    );
}

export default EpicBarba;
