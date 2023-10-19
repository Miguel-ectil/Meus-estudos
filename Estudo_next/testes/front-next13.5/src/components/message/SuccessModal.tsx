import React from 'react';
import { VscClose } from 'react-icons/vsc' 
import { IoIosCheckmarkCircleOutline } from 'react-icons/io' 

const SuccessModal = ({ isOpen, onClose, success }: any) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-80 transition-opacity overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-lg mx-auto my-6 shadow-2xl">
        {/* Modal Conteúdo */}
        <div className="relative grid grid-col w-full bg-[#f3fff4] border-0 rounded-lg shadow-lg outline-none focus:outline-none px-4 py-1">
          {/* Cabeçalho do Modal */}
          <div className="flex items-center justify-between border-b rounded-t">
            <div></div>
            <button
              className="ml-auto bg-transparent  text-gray-500 hover:text-gray-800 float-right leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
             >
              <VscClose className="h-7 w-7 ml-80" />
            </button>
          </div>
          <div className='grid items-center justify-center'>
            <h3 className="text-4xl font-semibold text-green-600">
              <IoIosCheckmarkCircleOutline className="h-28 w-40 mr-2" /> 
            </h3>
            <h3 className="text-3xl font-semibold text-green-600 ml-5">
              Sucesso!
            </h3>
          </div>
          {/* Corpo do Modal */}
          <div className="flex md:justify-center py-2 flex-auto">
            <p className="text-gray-700"><strong>{success}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
