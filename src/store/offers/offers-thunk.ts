import { OFFERS_SLICE_NAME } from '.';
import { OfferPreview } from '../../types/offerPreview';
import { createAppAsyncThunk } from '../hook/createAppAsyncThunk';

export const fetchOffersAction = createAppAsyncThunk<OfferPreview[], void>(
  `${OFFERS_SLICE_NAME}/fetchOffers`,
  async (_, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>('/offers');
    return data;
  }
);


