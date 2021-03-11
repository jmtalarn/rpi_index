export const kebabCase = (value) => {
    return value
        ? value
              .replace(/([a-z])([A-Z])/g, '$1-$2')
              .replace(/\s+/g, '-')
              .toLowerCase()
        : '';
};
