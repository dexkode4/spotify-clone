import React from 'react';
import './SidebarOption.styles.scss';

function SidebarOption({ title = "test", Icon }) {
    return (
      <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption__icon" />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      </div>
    );
  }

export default SidebarOption