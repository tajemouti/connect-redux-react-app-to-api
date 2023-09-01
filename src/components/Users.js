import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/users/usersSlice';

const Users = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className='user-list'>
      {users.map((user) => (
        <li key={user.login.uuid}>
          <img src={user.picture.large} alt={user.name.last} />
          <div>
            <span>FIRST NAME: {user.name.first}</span>
            <span>AGE: {user.dob.age}</span>
            <span>CELL PHONE: {user.cell}</span>
            <span>LOCATION: {user.location.city}, {user.location.country}</span>
          </div>
          <div>
          <span>LAST NAME: {user.name.last}</span>
            <span>NATIONALITY: {user.nat}</span>
            <span>E-MAIL: {user.email}</span>
            <span>TIMEZONE: {user.location.timezone.offset}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Users;
