import React from 'react';

function Display(props) {
  console.log('Rendering Display');
  return (
    <React.Fragment>
      <div>
        <b>
          <i>{props.userSearch}</i>
        </b>
      </div>
    </React.Fragment>
  );
}

export default React.memo(Display);
