declare module "*.png" {
  const value: import("next/dist/shared/lib/image-external").StaticImageData;
  export default value;
}