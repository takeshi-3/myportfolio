"use strict";

const contentful = require("contentful-management");

module.exports = (req, res) => {
    const main = async () => {
        const ID = await req.query.ID;
        let postComments = [];
        const client = contentful.createClient({
            space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        });

        client.getEntry(ID)
        .then(entry => {
            if (entry.fields.comments === undefined) {
                entry.fields.comments = {
                    "en-US": {
                        comments: []
                    }
                };
    
                return entry.update();
            } else {
                entry.fields.comments["en-US"].comments.forEach(comment => {
                    postComments.push(comment);
                });
            }
        }).then(() => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    comments: postComments
                })
            });
        });
    };
    main().catch(console.error);
}