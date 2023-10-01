import React from "react";
import { useHistory } from 'react-router-dom';
import Navbar from "./navbar";
import image from "./Image/wallpaperflare.com_wallpaper.jpg";
import image1 from "./Image/img_5terre.jpg";
import image2  from "./Image/7_4.jpg";
import image3 from "./Image/240_F_524438877_PZFzwc5OWJ3MTWQVFfHKwu1DRVMaSgPx.jpg";

function dashboard() {
    const history = useHistory();
    function tableData() {
        history.push('/data');



    }
return(
    <div>

        <Navbar  />
        <h1>welcome to dashboard page</h1>
        <img src={image}style={{ width: '200px', height: '150px' }}
        />
         <img src={image1}style={{ width: '200px', height: '150px' }}
        /> <img src={image2}style={{ width: '200px', height: '150px' }}
        /> <img src={image3}style={{ width: '200px', height: '150px' }}
        /><br></br>
        <button onClick={tableData}>data</button>
    

    </div>

)    

}

export default dashboard;