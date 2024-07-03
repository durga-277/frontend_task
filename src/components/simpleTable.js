// import React from "react";

// const SimpleTable = ({ dataSource, onEdit, onDelete }) => {
//   return (
//     <div className="table-container">
//       {dataSource.length ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {dataSource.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>
//                 <button className="edit-button" onClick={() => onEdit(item)}>Edit</button>
//                 <button className="delete-button" onClick={() => onDelete(item.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <div>No user data</div>
//       )}
//     </div>
//   );
// };


// export default SimpleTable;


import React from "react";
import { Table, Button, Modal } from "antd";
import 'antd/dist/antd.css';

const SimpleTable = ({ dataSource, onEdit, onDelete }) => {
  
  const handleDeleteConfirm = (record) => {
    Modal.confirm({
      title: 'Confirm Deletion',
      content: `Are you sure you want to delete ${record.name}?`,
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        onDelete(record.id);
      },
    });
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={() => onEdit(record)}>Edit</Button>
          <Button type="danger" onClick={() => handleDeleteConfirm(record)}>Delete</Button>
        </span>
      ),
    },
  ];

  return (
    <div className="table-container">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default SimpleTable;

