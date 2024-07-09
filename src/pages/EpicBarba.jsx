import './EpicBarba.css'
import React from 'react'
import { Button } from 'react-bootstrap';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

const EpicBarba = () => {

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

                <div className='gallery-img' >
                    <ImageGallery items={images} />
                </div>

                <div className="description-gallery">

                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                    <h3>$ 39.990</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae incidunt deleniti pariatur i laborum.</p>
                    <hr />
                    <Button>Hola</Button>
                    <Button>Chao</Button>

                </div>
                {/* <div className="description-gallery">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                    <h3>$ 39.990</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae incidunt deleniti pariatur i laborum.</p>
                    <hr />
                    <Button>Agregar Carrito</Button>
                    <Button>Comprar Ahora</Button>
                </div> */}

            </div>
            <div className="first-img-container">
                <img src="https://res.cloudinary.com/da2aauwq2/image/upload/v1713234733/Beard-Store/poavr6kp7q95l2boh9me.png" alt="barba-store" />
            </div>
            <div className="first-img-container">
                <img src="https://res.cloudinary.com/da2aauwq2/image/upload/v1713237457/Beard-Store/rxsssp1nwbu3ipxqyyuf.png" alt="barba-store" />
            </div>
            <div className="first-img-container">
                <img src="https://res.cloudinary.com/da2aauwq2/image/upload/v1713234733/Beard-Store/poavr6kp7q95l2boh9me.png" alt="barba-store" />
            </div>
            <div className="first-img-container">
                <img src="https://res.cloudinary.com/da2aauwq2/image/upload/v1713234733/Beard-Store/poavr6kp7q95l2boh9me.png" alt="barba-store" />
            </div>
            
            
            <p>
¿Qué hace a Epic Barba tan único y esencial para tu rutina de cuidado de la barba? Déjame llevarte a un viaje por sus características increíbles:
https://res.cloudinary.com/da2aauwq2/image/upload/v1713237457/Beard-Store/rxsssp1nwbu3ipxqyyuf.png
Versatilidad incomparable: Epic Barba no es solo una recortadora de barba, ¡es una recortadora completa! Con su peine ajustable con rueda en 12 niveles, cada uno representando 1mm y sus medios milímetros respectivos, puedes personalizar tu estilo de barba exactamente como lo desees. Desde una barba tupida hasta un diseño de precisión, Epic Barba lo hace posible.

Resistencia sin igual: ¿Preocupado por los accidentes en el baño? ¡No más! Epic Barba cuenta con certificación IPX5, lo que significa que es resistente al agua y está diseñado para soportar incluso las condiciones más húmedas. ¡Dale a tu barba el cuidado que se merece, donde sea que estés!

Cuatro en uno: ¿Te gustaría tener cuatro recortadoras en una sola? Con Epic Barba, eso es exactamente lo que obtienes. Sus cabezales intercambiables incluyen una afeitadora micro, un recortador de tamaño completo, un recortador nasal y un recortador de precisión para delinear. ¡Todo lo que necesitas para mantener tu barba en su mejor forma en un solo dispositivo!

Calidad impecable: ¿Qué es una recortadora sin cuchillas de calidad? Con Epic Barba, no tienes que preocuparte por eso. Sus cuchillas de acero de precisión son afiladas, duraderas y garantizan un corte rápido y limpio en todo momento. Además, con el peine de límite ajustable de 1mm a 12mm y los 4 limit combs de 3 a 12 milímetros, puedes lograr cualquier longitud con facilidad y precisión.

Tecnología moderna: ¿Harto de los cables desordenados? Epic Barba viene equipado con un conector tipo C para una carga rápida y conveniente. ¡Adiós a los tiempos de espera largos y hola a la eficiencia!

En resumen, Epic Barba no es solo una recortadora de barba; es tu compañero definitivo en el viaje hacia una barba verdaderamente épica. Desde su versatilidad incomparable hasta su resistencia impecable y su diseño intuitivo, ¡no podrás resistirte a los encantos de Epic Barba!

¡No pierdas más tiempo y hazte con tu Epic Barba hoy mismo para descubrir la verdadera grandeza en el cuidado de la barba!</p>
        </div>
    )
}

export default EpicBarba
