import React from 'react';

export default props => (
    <html>
        <head>
            <title>{props.title}</title>
        </head>
        <body>
            <div id="root" dangerouslySetInnerHTML={{__html: props.content}}></div>
        </body>
    </html>
)