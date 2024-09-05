import React from 'react';
import { IoTicketSharp } from "react-icons/io5";

function Logo() {
  return (
    <div className=' flex items-center space-x-1'>
      <IoTicketSharp className='text-primary pt-1 pl-1 text-3xl' />
      <h1 className='text-secondary font-semibold text-xl tracking-wide'>| ticketgenie</h1>
    </div>
  );
}

export default Logo;
