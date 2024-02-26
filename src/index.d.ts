declare module "*.mp4";
declare module "https://cdn.skypack.dev/*";
declare module "https://ruucm.github.io/*";

declare module "*.vert" {
  const content: string;
  export default content;
}

declare module "*.frag" {
  const content: string;
  export default content;
}
