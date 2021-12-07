import React from 'react';
// import MyTable from './MyTable';
import '../CSS/Dummy.scss';
import Skeleton from './Skeleton';
import { Link } from 'react-router-dom';

function Dummy() {
  return (
    <div style={{ marginLeft: '25%', marginTop: '55px' }}>
      <br />
      <h4>TimeSheet Managmant system</h4> <br />
      <Skeleton />
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}
export default Dummy;
