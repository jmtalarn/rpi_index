/**
 * Format file size in metric prefix
 * @param fileSize
 * @returns {string}
 */
export const formatFileSizeMetric = (fileSize: number) => {
    let size = Math.abs(fileSize);

    if (Number.isNaN(size)) {
        return 'Invalid file size';
    }

    if (size === 0) {
        return '0 bytes';
    }

    const units = ['bytes', 'kB', 'MB', 'GB', 'TB'];
    let quotient = Math.floor(Math.log10(size) / 3);
    quotient = quotient < units.length ? quotient : units.length - 1;
    size /= 1000 ** quotient;

    return `${+size.toFixed(2)} ${units[quotient]}`;
};

/**
 * Format file size in binary prefix
 * @param fileSize
 * @returns {string}
 */
export const formatFileSizeBinary = (fileSize: number) => {
    let size = Math.abs(fileSize);

    if (Number.isNaN(size)) {
        return 'Invalid file size';
    }

    if (size === 0) {
        return '0 bytes';
    }

    const units = ['bytes', 'kiB', 'MiB', 'GiB', 'TiB'];
    let quotient = Math.floor(Math.log2(size) / 10);
    quotient = quotient < units.length ? quotient : units.length - 1;
    size /= 1024 ** quotient;

    return `${+size.toFixed(2)} ${units[quotient]}`;
};

export const formatTimestampToDateString = (date: number) => new Date(date).toISOString().split('T')[0];

export const formatDateToShortDateString = (date: any) => new Date(date).toLocaleDateString();
