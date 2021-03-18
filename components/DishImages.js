import Lightbox from 'react-image-lightbox';
import * as React from 'react';

export default function DishImages() {

    const images = [
        'https://ak-portfolio.s3.amazonaws.com/Register+Page.png',
        'https://ak-portfolio.s3.amazonaws.com/Smores.png',
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
                    <h4 role='button'>View Screen Shots</h4>
                    </div>
    
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={handleClick}
                            onMovePrevRequest={handlePrev}
                            onMoveNextRequest={handleNext}
                        />
                    )}
                </div>
            </>
        )
  }