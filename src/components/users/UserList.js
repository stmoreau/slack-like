import React from 'react';
import User from './User';
import PropTypes from 'prop-types';

class UserList extends React.Component{
  render(){
    return (
      <ul>{
        this.props.users.map( user =>{
          return (
            <User
              key={user.id}
              user={user}
            />)
        })
      }</ul>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList
