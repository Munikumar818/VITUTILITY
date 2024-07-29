import React, { useState } from 'react';

export default function Search ({  data,setData }) {
    console.log("cam here")
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(searchTerm)
    console.log(data)
    onSearch(searchTerm);
  };
//   const onSeacrh=(value)=>{
//    let checkData =value.toLowerCase();
//    let finalResult=data.filter((curValue)=>{
//     if(curValue.fullName.toLowerCase().startsWith(checkData)){
//         return curValue
//     }
//     setData(finalResult);
//    })
//   }
const onSearch = (value) => {
    let checkData = value.toLowerCase();
    let finalResult = data.filter((curValue) => {
      return curValue.fullName.toLowerCase().startsWith(checkData);
    });
    setData(finalResult);
  };
  
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

