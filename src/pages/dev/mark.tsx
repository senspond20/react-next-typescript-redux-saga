import React from "react";
import CustomMarkRender from "@components/Organisms/Renderder/CustomMarkdownRendererV3";


const CONTENT = `A paragraph with *emphasis* and **strong importance**.
# h1
## h2
### h3
#### h4
##### h5

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| 1 | 2 |
| 3| 4 |

~~~js
function sum(a,b){
    return a+b;
}
console.log(5,7);
~~~

+ 다음 코드입니다

~~~java
class Test{
    string name;
}
~~~
&lt;div class="note">ggg</div&gt;
\<div class="note">ggg\</div>
`

const handle = () =>{
    return(
        <CustomMarkRender content={CONTENT} />
    )

}
export default handle;