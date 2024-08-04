import { Review } from '../../types/review';

export function getOfferReviews(reviews: Review[], offerId:string):Review[] {
  return reviews.filter((item) => item.id === offerId);
}
