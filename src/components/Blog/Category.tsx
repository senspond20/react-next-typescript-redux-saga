import React from "react";
import MenuItem, {Item} from "@components/Convenience/MenuItem";
import MenuList from "@components/Convenience/MenuList";

const CategoryList : Item[]= [
    {link:"/web1", name:"web1"},
    {link:"/web2", name:"web2"},
    {link:"/web3", name:"web3"},
    {link:"/web4", name:"web4"},
]
const handle = () =>(<MenuList list={CategoryList} className={'aside+category'}/> )

export default handle;