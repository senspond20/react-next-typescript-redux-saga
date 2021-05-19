import React from "react";
// import Layout from "@components/Layouts"
import PostDetail from "@components/Templates/Layouts/PostDetail"

const handle = () =>{
    return(
        <PostDetail>
            <h1>H1 Heading</h1>
            <h2>h2 Heading</h2>
            <h3>h3 Heading</h3>
            <h4>h4 Heading</h4>
            <h5>h5 Heading</h5>
            <h6>h6 Heading</h6>
            <h2>Horizontal Rules</h2>

            <h2>Typographic replacements</h2>
            <p>Enable typographer option to see result.</p>
            <p>(c) (C) (r) (R) (tm) (TM) (p) (P) +-</p>
            <p>test.. test... test..... test?..... test!....</p>
            <p>!!!!!! ???? ,, -- ---</p>
            <p>"Smartypants, double quotes" and 'single quotes'</p>
            <h2>Emphasis</h2>
            <p><strong>This is bold text</strong></p>
            <p><strong>This is bold text</strong></p>
            <p><em>This is italic text</em></p>
            <p><em>This is italic text</em></p>
        </PostDetail>
    )
}
export default handle;