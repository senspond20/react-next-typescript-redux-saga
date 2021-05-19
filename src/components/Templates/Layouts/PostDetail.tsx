import React, {ReactNode} from "react";
import Layout from "@components/Templates/Layouts/MainTemplate"
import BlogTemplate from "./BlogTemplate"
import TocWrap from "@components/Templates/Layouts/TableOfContents"
import SideBar from "@components/Templates/Layouts/SideBar"
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