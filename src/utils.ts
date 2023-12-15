export const rewriteImageUrl = (
  url: string,
  width: number,
  height: number,
): string => {
  const imageKitBaseUrl: string = 'https://ik.imagekit.io/3zvdo2d3a/';
  const xboxStoreBaseUrl: string = 'https://store-images.s-microsoft.com/';
  return `${url.replace(
    xboxStoreBaseUrl,
    imageKitBaseUrl,
  )}?tr=w-${width},h-${height}`;
};
