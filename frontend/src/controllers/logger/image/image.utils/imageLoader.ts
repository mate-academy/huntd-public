import { ImageLoaderProps } from 'next/image';
import getConfig from 'next/config';

export const imageLoader = ({ src, width }: ImageLoaderProps) => {
  const { publicRuntimeConfig = {} } = getConfig() || {};
  const {
    IMAGE_HANDLER_ENDPOINT: endpoint,
  } = publicRuntimeConfig;

  const url = src.split('/').slice(3).join('/');

  return `${endpoint}/fit-in/${width}x${width}/${url}`;
};
