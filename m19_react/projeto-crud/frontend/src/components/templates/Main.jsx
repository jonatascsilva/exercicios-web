import React from 'react';

import './Main.css';

import Header from './Header';

const Main = (props) => {
  return (
    <>
      <Header
        icon={props.icon}
        title={props.title}
        subtitle={props.subtitle}
      />
      <main className="Main container-fluid">
        <div className="p-3 my-3">
          {props.children}
        </div>
      </main>
    </>
  );
}

export default Main;