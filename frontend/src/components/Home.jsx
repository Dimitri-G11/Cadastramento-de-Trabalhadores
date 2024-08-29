import AxiosInstance from './axiosinstances';
import {Box} from '@mui/material'
import { useState, useEffect,React, useMemo } from 'react';

const Home=()=>{

    const [list, Setlist]=useState()
    const [loading, Setloading]=useState(true)

    const Getdata=()=>{
        AxiosInstance.get('users/').then((res)=>{
            Setlist(res.data)
            Setloading(false)
        })
    }

    useEffect(()=>{
        Getdata();
    },[])

    return(

        <div>
            {loading? <p>Loading data</p> :
            <div>
                {list.map((item,index)=>(
                    <Box key={index} sx={{p:2, m:2,boxShadow:3}}>
                        <div> ID: {item.id}</div>
                        <div> Email: {item.email}</div>
                    </Box>
                )
                )}
            </div>
            }
        </div>
    )
}



export default Home