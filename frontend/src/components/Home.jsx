import { useEffect,useState } from 'react';
import AxiosInstance from './axiosinstances';
import { useMemo } from 'react';
import {
  MaterialReactTable
} from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import {Link} from 'react-router-dom';



function Home() {
    const [myData, SetData]=useState()
    const [loading,setLoading]=useState(true)
    const GetData=()=>{
        AxiosInstance.get('/RegisterdWorkers/Workers/').then((response)=>{SetData(response.data); setLoading(false)})
    }
useEffect(()=>{GetData();},[])

        const columns = useMemo(
            () => [
                {
                accessorKey: 'name', //access nested data with dot notation
                header: 'Name',
                size: 150,
                },
                {
                accessorKey: 'last_name',
                header: 'Last Name',
                size: 150,
                },
                {
                accessorKey: 'status', //normal accessorKey
                header: 'Status',
                size: 200,
                },
                {
                accessorKey: 'phone',
                header: 'Phone',
                size: 150,
                },
                {
                accessorKey: 'position',
                header: 'Position',
                size: 150,
                },
                {
                accessorKey: 'salary',
                header: 'Salary',
                size: 150,
                },
                {
                accessorKey: 'comments',
                header: 'Comments',
                size: 150,
                },
                {
                accessorKey: 'start_date',
                header: 'Start Date',
                size: 150,
                },
                {
                accessorKey: 'end_date',
                header: 'End Date',
                size: 150,
                },
            ],
            [],
            );
        

    return (
        <div>
            {loading? <p>Loading data</p>:
            <MaterialReactTable
                columns={columns}
                data={myData}
                enableRowActions
                renderRowActions={({row}) => (
                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>

                        <IconButton
                            color="secondary"  
                            component={Link} to={`edit/${row.original.id}`}    
                        >
                        <EditIcon />

                        </IconButton>
                        <IconButton
                            color="error"
                            component={Link} to={`delete/${row.original.id}`} 
                        >
                        <DeleteIcon  />
                        </IconButton>
                    </Box>
                    )}
            
            
            />}
        </div>
    );
}

export default Home;
