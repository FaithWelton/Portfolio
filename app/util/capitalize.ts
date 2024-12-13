export const capitalize = (word: string) => {
    return word.replace(/\b\w/g, (char) => char.toUpperCase());
};