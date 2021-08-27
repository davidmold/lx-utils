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
/**
 *
 * @returns {string[]} short month names, all lower case
 */
export function getMonths(): string[];
/**
 *
 * @returns {string[]} the full month names starting with caps
 */
export function getLongMonths(): string[];
/**
 *
 * @param {function} fn function to keep calling
 * @param {number} [times] number of times to try before giving up - default 3 if zero or not present.
 * @param {waitduration} [waitduration] how long to wait before retry in ms. Default 5000 if zero or not present.
 * @returns
 */
export function keepTrying(fn: Function, times?: number, waitduration?: any): Promise<any>;
/**
 *
 * @param {string} email
 * @returns {boolean} if the email address is valid
 */
export function validEmail(email: string): boolean;
