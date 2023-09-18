import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material"; 

import {Videos,ChannelCard} from './';
import { fetchFromAPIe } from "../utils/fetchFromAPIe";


const ChannelDetail = () => {
    const [channelDetail,setChannelDetail] = useState()
    const [videos,setVideos]= useState([])

    const {id} = useParams();

    


    useEffect(()=>{
        const fetchResults = async () => {
            const data = await fetchFromAPIe(`channels?part=snippet&id=${id}`);
      
            setChannelDetail(data?.items[0]);
      
            const videosData = await fetchFromAPIe(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      
            setVideos(videosData?.items);
          };
      
          fetchResults();
        }, [id]);



    return (
        <Box minHeight='95vh'>
            <Box>
                <div style={{
                    background:'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                    zIndex:10,
                    height:'300px'
                }}/>
                {channelDetail?.snippet?.country&&
                (<ChannelCard channelDetail={channelDetail} marginTop="-110px"/>)
                }
            <Box display='flex' p='2'>
                <Box sx={{mr:{sm:'120px'}}}/>
                <Videos videos={videos}/>
     
            </Box>
            </Box>
        </Box>
    )
}

export default ChannelDetail