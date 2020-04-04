import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Append the \`ele\` element to the end of the \`target\` element:

~~~ javascript
target.appendChild(ele);
~~~
`}
/>
    
<Markdown
    content={`
Append a new \`li\` to the end of a \`ul\`:

~~~ javascript
let newLi = document.createElement('li');
newLi.appendChild(document.createTextNode('text node inside li'));
document.querySelector('#myList').appendChild(newLi);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'calculate-the-size-of-scrollbar',
        'copy-text-to-the-clipboard',
        'download-a-file',
        'insert-an-element-after-or-before-other-element',
        'insert-given-html-after-or-before-an-element',
        'prepend-to-an-element',
        'resize-columns-of-a-table',
        'show-a-ghost-element-when-dragging-an-element',
        'sort-a-table-by-clicking-its-headers',
    ]}
/>
</>
    );
};
