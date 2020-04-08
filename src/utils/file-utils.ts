export const isVideoFile = (filename: string | undefined) => {
    if (!filename) {
        return false;
    }
    const extensions = ['MP4', 'AVI', 'MOV', 'FLV', 'WMV'];
    var lastIndex = filename.lastIndexOf('.');

    const extension = filename.substr(lastIndex + 1).toUpperCase();

    return extensions.indexOf(extension) > -1;
};

export const isPdfFile = (filename: string | undefined) => {
    if (!filename) {
        return false;
    }
    var lastIndex = filename.lastIndexOf('.');

    const extension = filename.substr(lastIndex + 1).toUpperCase();

    return extension === 'PDF';
};
