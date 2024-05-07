export const GET_INFO_QUERY = `*[_type == "info"]{name, description}[0]`;

export const GET_POSTS_QUERY = `*[_type == 'post']{_id, _createdAt, title, description, "slug":slug.current,"categories": categories[]->{_id, name}} | order(_createdAt asc)`;

export const GET_POST_ALL_QUERY = `*[_type == "post"]{_id,title,description,"image": image.asset->url,slug,"categories":categories[]->{name, "slug":slug.current},_createdAt} | order(_createdAt asc)`;

export const GET_CATEGORIES = `*[_type == "category"]{_id, name, "slug": slug.current, "image": image.asset->url}`;

export const GET_POST_BY_CATEGORY_QUERY = (category: string) => `*[_type=="post" && references(categories, *[_type == 'category' && slug.current == "${category}"][0]._id)]{_id,title,description,"image": image.asset->url,slug,"categories":categories[]->{name, "slug":slug.current},_createdAt} | order(_createdAt asc)`;

export const GET_CATEGORY = (slug: string) => `*[_type == "category" && slug.current == "${slug}"][0]{_id, name, "slug": slug.current, "image": image.asset->url, keywords}`;

export const GET_POST_QUERY = (slug: string) => `*[_type == 'post' && slug.current == "${slug}"][0]{_id, _createdAt, title, description, slug, content,"categories": categories[]->{_id, name},keywords}`;