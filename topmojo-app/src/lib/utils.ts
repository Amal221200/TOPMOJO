export const getTitle: (postSlug: string) => string = (postSlug: string) => {
    return postSlug.split('-').map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
}