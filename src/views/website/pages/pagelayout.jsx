import React from 'react';

import { Outlet } from 'react-router-dom';

const PageLayout = (props) => {
  return (
    <div id='pagewebsite'>
        <div>Header</div>
        <Outlet/>
        <div>Footer</div>
    </div>
  )
}

export default PageLayout