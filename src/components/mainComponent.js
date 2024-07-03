import React, { useEffect,useState } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { getUsers, userState, addUser, deleteUser, editUser } = props;
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = ({ name, email }) => {
    if (editMode && currentUser) {
      editUser(currentUser.id, { name, email });
    } else {
      addUser({ name, email });
    }
    setEditMode(false);
    setCurrentUser(null);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div id="main-container-wrapper">
      <InputHandler onSubmit={handleSubmit} editMode={editMode} currentUser={currentUser} />
      <SimpleTable 
        dataSource={userState.users} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
    </div>
  );
}

export default MainComponent;



// MainComponent.js

// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import InputHandler from './commonInput';
// import SimpleTable from './simpleTable';
// import ConfirmationModal from './confirmationModal';
// import { getUsers, addUser, editUser, deleteUser } from '../actions/userActions';
// import { setEditUser, clearEditUser } from '../actions/editUserActions'; // Example actions for editUserReducer

// function MainComponent(props) {
//   const {
//     getUsers,
//     userState,
//     addUser,
//     editUser,
//     deleteUser,
//     editUserState,
//     setEditUser,
//     clearEditUser,
//   } = props;

//   useEffect(() => {
//     getUsers(); // Fetch initial user data
//   }, [getUsers]); // Only fetch users on component mount

//   const handleSubmit = ({ name, email }) => {
//     if (editUserState && editUserState.id) { // Check if editUserState and id are defined
//       editUser(editUserState.id, { name, email });
//       clearEditUser(); // Clear edit state after editing
//     } else {
//       addUser({ name, email });
//     }
//   };

//   const handleEdit = (user) => {
//     setEditUser(user); // Set user to edit
//   };

//   const handleDelete = (userId) => {
//     // Display confirmation modal or directly delete based on your UI/UX design
//     deleteUser(userId);
//   };

//   return (
//     <div id="main-container-wrapper">
//       <InputHandler onSubmit={handleSubmit} editMode={editUserState && !!editUserState.id} currentUser={editUserState} />
//       <SimpleTable dataSource={userState.users} onEdit={handleEdit} onDelete={handleDelete} />
//       <ConfirmationModal /> {/* Display confirmation modal here */}
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   userState: state.userReducer,
//   editUserState: state.editUserReducer,
// });

// const mapDispatchToProps = {
//   getUsers,
//   addUser,
//   editUser,
//   deleteUser,
//   setEditUser,
//   clearEditUser,
// };


// export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
