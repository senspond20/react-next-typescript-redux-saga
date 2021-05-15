import {MultiTable} from "../utils/MultiTable";


export const categoryList =
[
   { id: 1, category_name: '일상', parent_id: 0},
   { id: 3, category_name: '개발', parent_id: 0 },
   { id: 4, category_name: '웹', parent_id: 3},
   { id: 6, category_name: '백엔드', parent_id: 4},
   { id: 7, category_name: '프론트엔드', parent_id: 4},
   { id: 8, category_name: '여행', parent_id: 0},
   { id: 9, category_name: '임베디드', parent_id: 3},
   { id: 10, category_name: '일기장', parent_id: 1},
   { id: 11, category_name: 'React', parent_id: 7 },
   { id: 12, category_name: 'Spring', parent_id: 6},
];


export function getCategorySampleData(): Array <MultiTable<String>> {
   const array = new Array<MultiTable<String>>();
   // table.
   array.push(new MultiTable<String>( 1,0,'개발'));
   array.push(new MultiTable<String>( 2,1,'웹'));
   array.push(new MultiTable<String>(13,1,'임베디드'));
   array.push(new MultiTable<String>(4,2, '프론트엔드'));
   array.push(new MultiTable<String>(14,4, 'React'));
   array.push(new MultiTable<String>(24,4, 'Vue'));
   array.push(new MultiTable<String>(3,5, 'Java'));
   array.push(new MultiTable<String>(18,5, 'NodeJs'));
   array.push(new MultiTable<String>(5,2,'백엔드'));
   array.push(new MultiTable<String>(6,0,'일상'));
   array.push(new MultiTable<String>(7,6, '일기장'));
   array.push(new MultiTable<String>(19,6, '생각의자유'));
   array.push(new MultiTable<String>(20,13, 'ARM-Cortex-M3'));
   return array;
}


