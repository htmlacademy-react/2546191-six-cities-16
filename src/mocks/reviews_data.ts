import { Review } from '../types/review';

export const REVIEWS:Review[] =
[
  {
    id: 'b03ffa88-c915-4397-aae3-ae88d08d040f',
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2024-07-10T22:00:00.424Z',
    rating: 1,
    user: {
      name: 'Jack',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/9.jpg',
      isPro: false
    }
  },
  {
    id: '58603fd2-4f22-4c43-92d0-7b6528c0786d',
    comment: 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2024-07-10T21:00:00.424Z',
    rating: 4,
    user: {
      name: 'Christina',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: true
    }
  },
  {
    id: '58603fd2-4f22-4c43-92d0-7b6528c0786d',
    comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2024-07-10T23:00:00.424Z',
    rating: 1,
    user: {
      name: 'Corey',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: false
    }
  }
];
