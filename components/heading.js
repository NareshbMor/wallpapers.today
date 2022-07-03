import React from 'react';

const Heading = ({title, description, position='left'}) => {
  return (
    <div className='mb-10 mt-5'>
      <h1 className={`mb-4 text-6xl lg:text-6xl leading-tight text-${position}`}>      
        {/* <span className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'> */}
        {title}
        {/* </span>  */}
      </h1>
      {description && <div
        className=''
        dangerouslySetInnerHTML={{ __html: description }}
      />}
    </div>
  );
};

export default Heading;