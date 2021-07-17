/**
 * @param {number} [len] - time to wait in ms.
 */
export function waitfor(len?: number): any;
/**
 * @param {File} [file] - An image file.
 */
export function getFileAsDataUrl(file?: File): Promise<any>;
/**
 * @param {string} [dataUrl] - An image dataURI.
 * @param {number} [width] - The desired width to scale the image to
 * @param {string} [filename] - Name of the file e.g. myimage.jpg.
 */
export function getDataUrlAsJpegFile(dataUrl?: string, width?: number, filename?: string): Promise<any>;
/**
 * @param {string} [dataURI] - An image dataURI.
 * @param {string} [filename] - Name of the file e.g. myimage.gif.
 */
export function getDataUrlAsGifFile(dataURI?: string, filename?: string): File;
export function getMonths(): string[];
