export type OfferPreview = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location:Location;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
}
