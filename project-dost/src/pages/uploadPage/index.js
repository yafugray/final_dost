import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Profile from 'comps/profile';
import Timeline from 'comps/timeline';
import OButton from 'comps/button/Orange';
import GButton from 'comps/button/Grey';
import Input from 'comps/input';
import Description from 'comps/description';
import Logout from 'comps/logout';
import NavBar from 'comps/navBar';
import FeedPost from 'comps/feedPost';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

require ("./upload.css");

  
const MainBox = styled.div`
    margin:0;
    overflow:hidden;
    height:100%;
`;

const Feed = styled.div`
    height:79vh;
    margin-top:13vh;
    display:flex;
    max-width:100%;
    scroll:none;
`;

const FormBox = styled.form`
    flex-direction:column;
    justify-content:center;
    position:fixed;
    bottom: 10vh;
`;

const TextArea = styled.textarea`
  width:93vw;
  height:auto;
  min-height:9vh;
  background-color:#E5E5E5;
  border:none;
  border-radius:10px;
  margin-left:2vw;
  padding:5px;
`;

const UploadPage = () => {
    // State to store uploaded file
    const [file, setFile] = React.useState("");

    // Handles file upload event and updates state
    function handleUpload(event) {
        setFile(event.target.files[0]);

        // Add code here to upload file to server
        // ...
    }

    return <MainBox>
            <NavBar />
            <Feed>
                <div id="upload-box">
                {file && <ImageThumb image={file} />}
                <hr />
                    <FormBox>
                        <TextArea placeholder="Add a caption to your photo!" name="image_description"></TextArea>
                        <input type="file" id="image_file" name="image_file" accept="image/png, image/jpeg" onChange={handleUpload} />  
                        
                        <input type="submit" />
                    </FormBox>  
                </div>
            </Feed>
    </MainBox>
};

const ImageThumb = ({ image }) => {
  return <img id="imagePreview" src={URL.createObjectURL(image)} alt={image.name} />;
};


export default UploadPage;



// import React, {useState, useEffect} from 'react';
// import styled from 'styled-components';
// import NavBar from 'comps/navBar';

// require ("./upload.css");

// const MainBox = styled.div`
//  margin:0;
//  overflow:hidden;
//  height:100%;
// `;

// const Feed = styled.div`
//   height:79vh;
//   margin-top:13vh;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   max-width:100%;
//   scroll:none;
// `;


// /**
//  * Component to handle file upload. Works for image
//  * uploads, but can be edited to work for any file.
//  */
// function FileUpload() {
//   // State to store uploaded file
//   const [file, setFile] = React.useState("");

//   // Handles file upload event and updates state
//   function handleUpload(event) {
//     setFile(event.target.files[0]);

//     // Add code here to upload file to server
//     // ...
//   }

//   return <MainBox>
//         <NavBar />
//         <Feed>
//             <div id="upload-box">
//                 <form>
//                     {file && <ImageThumb image={file} />}
//                     <input type="file" id="image_file" name="image_file" accept="image/png, image/jpeg" onChange={handleUpload} />  
                    
//                 </form>  
//             </div>
//         </Feed>
//   </MainBox>
// };

// /**
//  * Component to display thumbnail of image.
//  */
// const ImageThumb = ({ image }) => {
//   return <img id="imagePreview" src={URL.createObjectURL(image)} alt={image.name} />;
// };


// export default function App() {
//   return <FileUpload />;
// }
