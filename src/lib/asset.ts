/** Prefix a /public path with the GitHub Pages base path (set in next.config.ts). Use for plain <img>/<video>. */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
