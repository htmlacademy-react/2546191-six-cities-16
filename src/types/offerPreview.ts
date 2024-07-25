export type OfferPreview = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location:{
        latitude: number;
        longitude: number;
        zoom: number;
    };
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
}
