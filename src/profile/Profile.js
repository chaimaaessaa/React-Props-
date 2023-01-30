import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' , padding: 10}}>
      {children}
      

      <div>
        <h3 style={{ margin: 5  }}>{fullName}</h3>
        <p style={{ margin: 5 }}>{bio}</p>
        <p style={{ margin: 5 }}>{profession}</p>
        <button onClick={() => handleName(fullName)}>Show </button>
        </div>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'Chaimaa',
  bio: 'software engineer',
  profession: 'Full-stack developer'
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired
};

export default Profile;
