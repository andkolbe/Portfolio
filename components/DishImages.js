import Lightbox from 'react-image-lightbox';
import React from 'react';
import Image from 'next/image';
import SimpleReactLightbox from "simple-react-lightbox"; 

export default function DishImages() {

    const images = [
        '/Register-Page.png',
        '/Smores.png',
        'https://ak-portfolio.s3.amazonaws.com/New+Dish+Page.png'
    ];

    const [isOpen, setOpen] = React.useState(false);
    const [photoIndex, setPhotoIndex] = React.useState(0);

    const handleClick = () => {
        setOpen(!isOpen)
    }

    const handleNext = () => {
        setPhotoIndex((photoIndex + 1) % images.length)
    }

    const handlePrev = () => {
        setPhotoIndex((photoIndex + images.length - 1) % images.length)
    }

    return (
        <>
            <div>
                <div onClick={handleClick}>
                    <div role='button'>View Screen Shots</div>
                </div>

                {isOpen && (
                    <>
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={handleClick}
                        onMovePrevRequest={handlePrev}
                        onMoveNextRequest={handleNext}
                    </>
                )}
            </div>
        </>
    )
}