import React, {useRef, useState} from "react";
import {workbookToJsonArray, readExcelFile,getExtensionOfFilename} from "components/Atom/Utils/ExcelUtils";
import DataBoard from "@components/Molecules/Board/DataBoard";

const handle = () =>{
    const INIT = [{데이터테이블:'데이터가 존재하지 않습니다, 엑셀 파일 불러와주세요'}];
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [data,setData] = useState<Array<any>>(INIT);
    
    const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.item(0)){
            const file = e.target.files[0]
            if(!getExtensionOfFilename(file)){
                alert('엑셀 파일이 아닙니다. .xlsx 확장자만 가능');
                clear();
                return;
            }
            readExcelFile(file, function (workBook){
                // console.log(workBook)
                const json = workbookToJsonArray(workBook)
                // console.log(json)
                setData(json);
            })
        }
    }
    const clear = () =>{
        if(inputFileRef.current)
            inputFileRef.current.value = ''
        setData(INIT)
    }

    return (
        <div>
            <input type={'file'} onChange={upload} ref={inputFileRef}/>
            <button onClick={clear}>Clear</button>
            <DataBoard data={data}/>

        </div>
    )
}

export default handle;