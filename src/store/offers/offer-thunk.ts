import { OfferPreview } from '../../types/offerPreview';
import { createAppAsyncThunk } from '../hook/createAppAsyncThunk';

const OFFERS_SLICE_NAME = 'offers';

export const fetchOffersAction = createAppAsyncThunk<OfferPreview[], void>(
  `${OFFERS_SLICE_NAME}/fetchOffers`,
  async (_, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>('/offers');
    return data;
  }
);


