 
// import sofaa from "../../assets/sofaa.svg";
// import Logo from "../Authentication/LogoIcon";
// import axios from "axios";
// import { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const ListPage = () => {
// const [getItem,setGetItem] = useState([])
// const navigation = useNavigate()
//     useEffect(()=>{
//     const getHandler =async()=>{
// try{
//     const response = await axios.get("https://auth-api-jexl.onrender.com/category/your-model")
//     if(response.data){
//         console.log("dd")
//        console.log(response)
//         setGetItem(response.data)
//     }
// }
//   catch(error){
    
//   }  
//     }
//     getHandler();
//     },[])
//     const descriptionHandler = (item) => {
//       console.log(item)
//       navigation("/item", {
//         state: {
//           items:item,
//         },
//       });
//     };
    
//   return (
//     <div className=" flex flex-col">
//       <div className="w-[100vw] h-[80px] bg-[#E8F6D1] pl-[161px] flex justify-start pt-[10px] gap-[11.04vw]">
//         <Logo />
//         <div className=" h-[54px] w-[39.16vw] bg-[#BFE68C] rounded-[50px]">
//           <input
//             className=" bg-transparent h-[100%] w-[100%] text-[24px] text-[#a7d56b] px-[15px] "
//             placeholder="Search here"
//           />
//         </div>
//       </div>
//       <div className="to w-[100vw] h-[66px] px-[160px] flex justify-between py-[20px] ">
//         <div className=" cursor-pointer " onClick={()=>navigation("/home")}>Back</div>
//         <div>
//             <select className="bg-white p-2 rounded-md">
//               <option value="Education">Education</option>
//               <option value="Daily Basis">Daily Basis</option>
//               <option value="Decoration">Decoration</option>
//               <option value="Kitchen">Kitchen</option>
             
//               <option value="Furniture">Furniture</option>
             
//               <option value="Footwear">Footwear</option>
             
             
//             </select>
//           </div>
//       </div>
//       <div className=" mt-[10px] mx-auto flex flex-col gap-[26.92px]">
//         <div className=" flex gap-[24.62px]">
//         {getItem?getItem.map((item,index)=>(
//             index <= 3?
//             <div className="to h-[283px] w-[18.15vw] flex flex-col justify-between px-[10px] py-[10px] pb-[20px] cursor-pointer" onClick={()=>descriptionHandler(item)}>
//             <img src={item.image_field} className="w-[100%] h-[205px]" />
//             <div className=" text-[#98c361] text-[1.5rem]"><p>{item.itemname}</p></div>
//           </div>:null
//         )):null}
          
         
//         </div>
//         <div className=" flex gap-[24.62px]">
//         {getItem?getItem.map((item,index)=>(
//             index >= 3 && index<=6?
//             <div className="to h-[283px] w-[18.15vw] flex flex-col justify-between px-[10px] py-[10px] pb-[20px] cursor-pointer"  onClick={()=>descriptionHandler(item)}>
//             <img src={item.image_field} className="w-[100%] h-[205px]" />
//             <div className=" text-[#98c361] text-[1.5rem]">{item.itemname}</div>
//           </div>:null
//         )):null}
          
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListPage;

import React, { useState, useEffect } from "react";
import Logo from "../Authentication/LogoIcon";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListPage = () => {
  const [getItem, setGetItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigation = useNavigate();

  useEffect(() => {
    fetchData("All");
  }, []);

  const fetchData = async (category) => {
    try {
      const response = await axios.get(
        category=="All"? `https://auth-api-jexl.onrender.com/category/your-model` : `https://auth-api-jexl.onrender.com/category/your-model/?search=${category}`
        
      );
      if (response.data) {
        setGetItem(response.data);
      }
    } catch (error) {}
  };

  const descriptionHandler = (item) => {
    navigation("/item", {
      state: {
        items: item,
      },
    });
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    fetchData(newCategory);
  };

  return (
    <div className="flex flex-col">
      <div className="w-[100vw] h-[80px] bg-[#E8F6D1] pl-[161px] flex justify-start pt-[10px] gap-[11.04vw]">
        <Logo />
        <div className=" h-[54px] w-[39.16vw] bg-[#BFE68C] rounded-[50px]">
           <input
            className=" bg-transparent h-[100%] w-[100%] text-[24px] text-[#a7d56b] px-[15px] "
            placeholder="Search here"
          />
        </div>
      </div>
      <div className="to w-[100vw] h-[66px] px-[160px] flex justify-between py-[20px] ">
        <div className="cursor-pointer" onClick={() => navigation("/home")}>
          Back
        </div>
        <div>
          <select
            className="bg-white p-2 rounded-md"
            onChange={handleCategoryChange}
          >
            <option value="All">All Categories</option>
            <option value="Education">Education</option>
            <option value="Daily Basis">Daily Basis</option>
            <option value="Decoration">Decoration</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Furniture">Furniture</option>
            <option value="Footwear">Footwear</option>
          </select>
        </div>
      </div>
      <div className="mt-[10px] mx-auto flex flex-col gap-[26.92px]">
        <div className="flex gap-[24.62px]">
          {getItem.map((item, index) => (
            index <= 3 ? (
              <div
                className="to h-[283px] w-[18.15vw] flex flex-col justify-between px-[10px] py-[10px] pb-[20px] cursor-pointer"
                onClick={() => descriptionHandler(item)}
                key={index}
              >
                <img src={item.image_field} className="w-[100%] h-[205px]" alt={item.itemname} />
                <div className="text-[#98c361] text-[1.5rem]">
                  <p>{item.itemname}</p>
                </div>
              </div>
            ) : null
          ))}
        </div>
        <div className="flex gap-[24.62px]">
          {getItem.map((item, index) => (
            index >= 3 && index <= 6 ? (
              <div
                className="to h-[283px] w-[18.15vw] flex flex-col justify-between px-[10px] py-[10px] pb-[20px] cursor-pointer"
                onClick={() => descriptionHandler(item)}
                key={index}
              >
                <img src={item.image_field} className="w-[100%] h-[205px]" alt={item.itemname} />
                <div className="text-[#98c361] text-[1.5rem]">
                  <p>{item.itemname}</p>
                </div>
              </div>
            ) : null
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPage;

