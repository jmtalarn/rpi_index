export const isObjectEmpty = (object: any) => {
    return !object || Object.keys(object).length === 0;
};
