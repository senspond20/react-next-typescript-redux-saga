import React, {ReactNode} from "react";
import Layout from "@components/Templates/Layouts/MainTemplate"
import BlogTemplate from "./BlogTemplate"
import TocWrap from "@components/Templates/Layouts/TableOfContents"
import NewComment from "@components/Atom/Items/NewComment";
import CommentList from "@components/Molecules/List/CommentList";

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