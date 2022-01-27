import React, { useEffect, useState } from 'react';
import axiosInstance from '../apis/axiosConfig';

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
            <tr key={i}>
              <td>{item.user_id}</td>
              <td>{item.full_name}</td>
              <td>{item.phone_number}</td>
            </tr>
          ))}
    </div>
  );
};

export default ViewUser;
