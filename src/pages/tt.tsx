import React from "react";
import Layout from "@components/Layouts"
import BlogTemplate from "@components/Blog/blogTemplate"
import TocWrap from "@components/Blog/tableOfContents"
const handle = () =>{
    return(
        <Layout>
            <BlogTemplate toc={<TocWrap/>}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti distinctio dolores dolorum eligendi eum exercitationem facere harum minus natus nisi obcaecati possimus provident quae qui, quos recusandae vero voluptates.
                    lorem*40
                </div>

            </BlogTemplate>
        </Layout>
    )
}
export default handle;