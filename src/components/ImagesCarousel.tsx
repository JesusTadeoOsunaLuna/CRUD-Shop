import { LoadingSpinner } from './LoadingSpinner'
import { Carousel } from '@material-tailwind/react'

interface ImagesCarouselProps {
    images: string[]
}

export const ImagesCarousel = (props: ImagesCarouselProps) => {
    console.log(props.images)

    return (
        <>
            {props.images ? (
                <Carousel
                    autoplay
                    transition={{ duration: 0.5 }}
                    className="rounded-xl"
                >
                    {props.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className="h-full w-full object-cover"
                        />
                    ))}
                </Carousel>
            ) : (
                <LoadingSpinner />
            )}
        </>
    )
}
