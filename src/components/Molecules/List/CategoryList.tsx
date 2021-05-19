import React from "react";
import MenuItem, {Item} from "@components/Atom/Utils/MenuItem";
import MenuList from "@components/Atom/Utils/MenuList";

const list : Item[]= [
    {link:"/web1", name:"web1"},
    {link:"/web2", name:"web2"},
    {link:"/web3", name:"web3"},
    {link:"/web4", name:"web4"},
]
const CategoryList = () =>(<MenuList list={list} className={'aside-category'}/> )

export default CategoryList;