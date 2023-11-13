import authorReference from "./reference/authorReference";
import categoriesReference from "./reference/categoriesReference";

export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            required: true
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            ...authorReference
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    "type": "block",
                },
                {
                    type: "image",
                },
                // {
                //     type: "Link",
                // }
            ]
        },
        {
            ...categoriesReference
        }
    ]
}