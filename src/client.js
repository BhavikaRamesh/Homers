import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'rcrulgfe',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'skEO795oR3Y48djxIercPLnXlbzdzQC7ZVty1yKda2xb83jaYzUJv1qxEoIdu6dGV4JpACNgGG4zNgu2ydbDuH5WgJmEP0D6MQpeOCcQETHoSGlTkkk3uwKnAcT7cA0e57FrXKT921T6M7bZCzARMXtBLO8W4JtqmipVJ5ccFh8Hsvfy1liY',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)