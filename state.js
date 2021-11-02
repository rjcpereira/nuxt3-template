import { reactive } from 'vue'

export const title = 'Nuxt3 Template';

export const description = '';

export const keywords = '';

export const url = 'https://nuxt3-template.com/';

export const author = 'Novex Farmer - novex-farmer@outlook.com';

let state = {
    title,
    description,
    keywords,
    url,
    author,
    search: ''
};

export default reactive(state);