import XLSX from 'xlsx';

/**
 * 콜백함수 인터페이스
 */
interface WorkBookCallBack {
    (workbook: XLSX.WorkBook): void;
}

/**
 *  UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환
 * @param data
 */
const fixdata = (data : any) => {
    let o : string = "", l = 0, w = 10240;
    for (; l < data.byteLength / w; ++l) {
        // @ts-ignore
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
    }
    // @ts-ignore
    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
    return o;
};

/**
 * @param file
 * @param callback
 */
export const readExcelFile = (file : File, callback : WorkBookCallBack ) =>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function (e: ProgressEvent<FileReader>){
        const data = e.target?.result;
        const arr = fixdata(data);
        const workbook = XLSX.read(btoa(arr), { type: 'base64' });
        callback(workbook);
    }
};

/**
 * 엑셀 파일 확장자 체크
 * @param filename
 */
export const getExtensionOfFilename = (file : File)=>{
    const filename = file.name;
    const _lastDot = filename.lastIndexOf('.');
    const _fileExt = filename.substring(_lastDot, filename.length).toLowerCase();
    console.log(_fileExt)
    let result = (_fileExt === '.xlsx') ? true : false;
    return result;
}

/**
 * workbookToJsonArray
 * @param workbook
 */
export const workbookToJsonArray = (workbook : XLSX.WorkBook)=> {
    let jArray = new Array();
    workbook.SheetNames.forEach(function (sheetName) {
        const roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {});
        if (roa.length > 0)  jArray.push(roa)
    });
    return jArray[0];
};

export const workbookToJson = (workbook : XLSX.WorkBook)=> {
     let result : any = {};
    workbook.SheetNames.forEach(function (sheetName) {
        const roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {});
        if (roa.length > 0)  {
            result[sheetName] = roa;
        }
    });
    return result;
};
/**
 * @param arr
 */
export const autoBind = (keyList : []) =>{
    const field : any = [];
    keyList.forEach((item) => {
        field.push({
            fieldName: item,
            dataType: typeof (item)
        });
    });
    const columns : any = [];
    keyList.forEach((item) => {
        columns.push({
            name: item,
            fieldName: item,
        });
    });
    return{
        field,
        columns
    }
};

