import { useParams } from "react-router";
import { useImageFetching } from "./useImageFetching.js";

export function ImageDetails() {
    const { imageId } = useParams();
    const { isLoading, fetchedImages } = useImageFetching(imageId, 500);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    const imageData = fetchedImages[0];
    
    if (!imageData) {
        return <h2>Image not found</h2>;
    }

    return (
        <div>
            <h2>{imageData.name}</h2>
            <img className="ImageDetails-img" src={imageData.src} alt={imageData.name} />
        </div>
    );
}
