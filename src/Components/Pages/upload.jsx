import "./Dashboardexisting.css";

import Rect from "../../../src/assets/Image_02.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Path from "../../../src/assets/mingcute_upload-line.png";
import { useRef } from "react";
import axios from "../../Api/auth";
import close from "../../../src/assets/Close_LG.svg";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";


export default function Upload() {
  const Navigation = useNavigate();
  const imageRef = useRef(null);
  const [imageUpload, setImageUpload] = useState(false);
  const [detailsUpload, setDetailsUpload] = useState(false);
  //
  const [descrUpload, setDescrUpload] = useState(false);
  const [finalUpload, setFinalUpload] = useState(false);
  const [itemPhoto, setItemPhoto] = useState("");
  const [fullItemDetails, setFullItemDetails] = useState({
    name: "",
    itemname: "",
    category: "Daily Basis",
    image_field: null,
    description: "",
  });
  //
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFullItemDetails((prevData) => ({
      ...prevData,
      image_field: file,
    }));
    setImageUpload(true);
    console.log('ff')
  };
  const songDataHandler = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setFullItemDetails((prevData) => ({
        ...prevData,
        name: value,
      }));
    } else if (name === "itemName") {
      setFullItemDetails((prevData) => ({
        ...prevData,
        itemname: value,
      }));
    } else if (name === "description") {
      setFullItemDetails((prevData) => ({
        ...prevData,
        description: value,
      }));
    }
  };
  const uploadHandler = async()=>{
    const formData = new FormData();
    formData.append('name', fullItemDetails.name);
    formData.append('itemname', fullItemDetails.itemname);
    formData.append('category',fullItemDetails.category );
    formData.append('image_field', fullItemDetails.image_field);
    formData.append('description', fullItemDetails.description);
   
     try{
const response = await axios.post("https://auth-api-jexl.onrender.com/category/upload-image/",formData)
       if(response.data){
        toast("Successfully Added product")
        Navigation("/home")
       }
     }
     catch(error){
 console.log(error)
     }
  }
  const handleCategoryChange = (e)=>{
    setFullItemDetails((prevData) => ({
      ...prevData,
      category: e.target.value,
    }));
  }

  return (
    <div className="artistDashboard">
      <div className="inside bg-olivedrab">
        <div className="artistNavPlaceholder"></div>
        <div className="artistNavBar">
          <div>
            Unity<span>Share</span>
          </div>
          <div>
            Unleash <span> Sharing</span>
          </div>
          <div className="btn" onClick={() => Navigation("/upload")}>
            <img></img>Upload
          </div>
        </div>
        <div className="yourListening">Your Items</div>
        <div id="listeningSongs"></div>

        {!imageUpload ? (
          <div className="upload">
            <div className="uploadUpper">
              <div>
                <img src={Path}></img>
                <div>Upload your Products Images</div>
              </div>
              <div className="btn">
                <div onClick={() => imageRef.current.click()}>
                  <input
                    type="file"
                    placeholder="Choose file"
                  
                    onChange={handleFileChange}
                    ref={imageRef}
                  />
                  Choose file
                </div>
                <div>
                  Maximum size of 7MB can be uploaded
                  <div>
                    .png, .svg, .acc, .flac, .wma, .aiff, .pcm and many more
                    formats supported.
                  </div>
                </div>
              </div>
            </div>
            <div className="uploadLower btn">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <img
              className="btn"
              onClick={() => Navigation("/userSection")}
              src={close}
            />
          </div>
        ) : null}
        {imageUpload && !detailsUpload ? (
          <div className="upload1">
            <div>Enter some details of your Item</div>
            <div>
              <input
                placeholder="Enter Item name"
                onChange={songDataHandler}
                name="itemName"
              ></input>
              <input
                placeholder="Enter Your Name"
                onChange={songDataHandler}
                name="name"
              ></input>
              <div
                className="btn"
                onClick={() => {
                  setDetailsUpload(true);
                }}
              >
                Next
              </div>
            </div>
            <div className="uploadLower btn">
              <div onClick={() => {}} style={{ background: "#C76B98" }}></div>
              <div style={{ background: "#95D14A" }}></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : null}
        {detailsUpload && !descrUpload ? (
          <div className="upload1">
            <div className=" flex flex-col gap-[10px]"><div>Enter description and choose Category.</div>
            <div><select
            className="bg-white p-2 rounded-md"
            onChange={handleCategoryChange}
          >
            
            <option value="Education">Education</option>
            <option value="Daily Basis">Daily Basis</option>
            <option value="Decoration">Decoration</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Furniture">Furniture</option>
            <option value="Footwear">Footwear</option>
          </select></div> 
            </div>
            
            <div>
              <input
                placeholder="Enter Description"
                onChange={songDataHandler}
                name="description"
              ></input>
              <div
                className="btn"
                onClick={() => {
                  setDescrUpload(true);
                }}
              >
                Next
              </div>
            </div>
            <div className="uploadLower btn">
              <div></div>
              <div onClick={() => {}} style={{ background: "#C76B98" }}></div>
              <div style={{ background: "#95D14A" }}></div>
              <div></div>
            </div>
          </div>
        ) : null}
        {/* {songUploaded && !finalUpload ? (
          <div
            style={{
              height: "73.7vh",
            }}
            className="upload1"
          >
            <div>Enter some details of your song</div>
            <div>
              <input
                placeholder="Enter Genre"
                value={songGenre}
                onChange={songDataHandler}
                name="songGenre"
              ></input>
              <input
                placeholder="Enter Language"
                value={songLanguage}
                onChange={songDataHandler}
                name="songLanguage"
              ></input>
              <input
                placeholder="Enter Mood"
                value={songMood}
                onChange={songDataHandler}
                name="songMood"
              ></input>
              <div className="btn" onClick={songDetailsUpdated2}>
                Next
              </div>
            </div>
            <div className="uploadLower btn">
              <div
                onClick={() => {
                  setAudioUploaded(false);
                  setSongUploaded(false);
                }}
              ></div>
              <div
                onClick={() => {
                  setPosterUploaded(false);
                  setSongUploaded(false);
                }}
                style={{ background: "#95D14A" }}
              ></div>
              <div
                onClick={() => {
                  setSongUploaded(false);
                }}
                style={{ background: "#fff" }}
              ></div>
              <div style={{ background: "#95D14A" }}></div>
            </div>
          </div>
        ) : null} */}
        {!finalUpload&&descrUpload ? (
          <div
            style={{
              height: "49.6386vh",
              width: "37.2vw",
            }}
            className="upload2"
          >
            <div>A step ahead to serve millions</div>
            <div className="btn">
              <div onClick={uploadHandler} className="same">
                <div>Continue Adding</div>
                <div>"Continue"</div>
              </div>
              <div onClick={() => Navigation("/userSection")} className="same">
                <div>Cancel</div>
                <div style={{ background: "#CF2121" }}>"Cancel"</div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
