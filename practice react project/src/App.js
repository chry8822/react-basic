import React, { useState } from 'react';
import AddUser from './componenets/Users/AddUser';
import UserList from './componenets/Users/UserList';

function App() {

  const [userList, setUserList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: userName, age: userAge, id: Math.random().toString() }]
    });
  };
  // 이전 상태에 의존해서 상태를 업데이트 할때는 useState에 setter 함수의 대체 폼을 사용하는데 setter 함수에 함수를 전달하는 폼을 사용한다. 그리고 리액트가 여기서 상태를 업데이트할 때 그 함수는 자동으로 이전 상태 중 가장 최신의 스냅샷을 가지고 온다.

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;