import React, { useEffect, useState } from 'react';
import axiosInstance from '../apis/axiosConfig';
import { TableCell, TableRow } from '@mui/material';

const ViewUser = () => {
  const [data, setData] = useState<Array<{
    user_id: string;
    full_name: string;
    phone_number: string;
  }> | null>(null);
  useEffect(() => {
    axiosInstance.get('http://localhost:3000/user').then((res) => {
      setData(res.data.message);
    });
  }, [setData]);
  return (
    <div>
      {!data
        ? 'loading...'
        : data.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item.user_id}</TableCell>
              <TableCell>{item.full_name}</TableCell>
              <TableCell>{item.phone_number}</TableCell>
            </TableRow>
          ))}
    </div>
  );
};

export default ViewUser;
