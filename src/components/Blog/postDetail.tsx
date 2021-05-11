import React, {ReactNode} from "react";
import Layout from "@components/Layouts"
import BlogTemplate from "@components/Blog/blogTemplate"
import TocWrap from "@components/Blog/tableOfContents"
import SideBar from "@components/Blog/sideBar"
import NewComment from "@components/Blog/NewComment";
import CommentList from "@components/Blog/CommentList";

type Props = {
    children : ReactNode
}
const handle = ({children} :  Props) =>{
    return(
        <Layout>
            <BlogTemplate toc={<TocWrap/>} sideBar={<div/>}>
                <div>
                    {children}
                </div>
                <NewComment/>
                <CommentList/>

            </BlogTemplate>
        </Layout>
    )
}
export default handle;