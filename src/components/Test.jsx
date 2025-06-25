import React, { useState, useEffect } from 'react'

const Test = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModlaContent] = useState("")

    const openModal = (modalData) => {
        setIsOpen(true);  
        setModlaContent(modalData)
    } 

    const closeModal = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('overflow-hidden');
        } else {
          document.body.classList.remove('overflow-hidden');
        }
    
        return () => {
          document.body.classList.remove('overflow-hidden');
        };
      }, [isOpen]);

  return (
    <div>
        <p>Modal</p>
        <button onClick={openModal}>Open Modal</button>

        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className={`bg-white rounded-lg shadow-lg p-6 w-[90%] sm:w-[70%] md:w-[50%]  overflow-y-auto scrollbar-hide transform transition-all ease-in-out duration-500 ${isOpen ? 'max-h-[400px]' : 'max-h-0'}`}
            >
                <div className="flex justify-end">
                <button className="text-black text-xl" onClick={closeModal}>
                &times;
                </button>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-[20px] font-bold mb-4">Beans</h1>
                <p className="text-justify">Students applying for the online M.S. Dental Hygiene must have a Dental Hygiene license or certification and a Bbchelor’s degree in Dental Hygiene from an accredited institution in the US or Canada. If other undergraduate (college/university) academic studies were done outside the U.S., a course-by-course evaluation of all academic work will be required. Please contact a NACES approved accredited academic evaluating service for more information (ECE or WES are preferred)</p>
                <p className="text-justify">Students applying for the online M.S. Dental Hygiene must have a Dental Hygiene license or certification and a Bbchelor’s degree in Dental Hygiene from an accredited institution in the US or Canada. If other undergraduate (college/university) academic studies were done outside the U.S., a course-by-course evaluation of all academic work will be required. Please contact a NACES approved accredited academic evaluating service for more information (ECE or WES are preferred)</p>
            </div>
            </div>
        </div>
        )}
    </div>
  )
}

export default Test


























// import React, { useState } from 'react'
// import ReactModal from 'react-modal'

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     }
// };

// ReactModal.setAppElement('#root')

// const Test = () => {
//     const [modalIsOpen, setModalIsOpen] = useState(false);

//     const openModal = () => {
//         setModalIsOpen(true)
//     } 
//     const closeModal = () => {
//         setModalIsOpen(false)
//     } 
//   return (
//     <div className=''>
//         <p>Modal</p>
//         <button onClick={openModal}> Open Modal </button>
//         <ReactModal
//             isOpen={modalIsOpen}
//             onRequestClose={closeModal}
//             style={customStyles}
//             className='h-[100px] overflow-y-auto scrollbar-hide'
//             overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
//             contentLabel='Example'
//         >
//             <div className='z-[100]'>
//             <p>Students applying for the online M.S. Dental Hygiene must have a Dental Hygiene license or certification and a Bbchelor’s degree in Dental Hygiene from an accredited institution in the US or Canada. If other undergraduate (college/university) academic studies were done outside the U.S., a course-by-course evaluation of all academic work will be required. Please contact a NACES approved accredited academic evaluating service for more information (ECE or WES are preferred)</p>
//             <p>Students applying for the online M.S. Dental Hygiene must have a Dental Hygiene license or certification and a Bbchelor’s degree in Dental Hygiene from an accredited institution in the US or Canada. If other undergraduate (college/university) academic studies were done outside the U.S., a course-by-course evaluation of all academic work will be required. Please contact a NACES approved accredited academic evaluating service for more information (ECE or WES are preferred)</p>
//             <p>Students applying for the online M.S. Dental Hygiene must have a Dental Hygiene license or certification and a Bbchelor’s degree in Dental Hygiene from an accredited institution in the US or Canada. If other undergraduate (college/university) academic studies were done outside the U.S., a course-by-course evaluation of all academic work will be required. Please contact a NACES approved accredited academic evaluating service for more information (ECE or WES are preferred)</p>
//             <p>Students applying for the online M.S. Dental Hygiene must have a Dental Hygiene license or certification and a Bbchelor’s degree in Dental Hygiene from an accredited institution in the US or Canada. If other undergraduate (college/university) academic studies were done outside the U.S., a course-by-course evaluation of all academic work will be required. Please contact a NACES approved accredited academic evaluating service for more information (ECE or WES are preferred)</p>
//             <p>Students applying for the online M.S. Dental Hygiene must have a Dental Hygiene license or certification and a Bbchelor’s degree in Dental Hygiene from an accredited institution in the US or Canada. If other undergraduate (college/university) academic studies were done outside the U.S., a course-by-course evaluation of all academic work will be required. Please contact a NACES approved accredited academic evaluating service for more information (ECE or WES are preferred)</p>
//             <p>Students applying for the online M.S. Dental Hygiene must have a Dental Hygiene license or certification and a Bbchelor’s degree in Dental Hygiene from an accredited institution in the US or Canada. If other undergraduate (college/university) academic studies were done outside the U.S., a course-by-course evaluation of all academic work will be required. Please contact a NACES approved accredited academic evaluating service for more information (ECE or WES are preferred)</p>
//             <p>Students applying for the online M.S. Dental Hygiene must have a Dental Hygiene license or certification and a Bbchelor’s degree in Dental Hygiene from an accredited institution in the US or Canada. If other undergraduate (college/university) academic studies were done outside the U.S., a course-by-course evaluation of all academic work will be required. Please contact a NACES approved accredited academic evaluating service for more information (ECE or WES are preferred)</p>
//             </div>
//         </ReactModal>
//     </div>
//   )
// }

// export default Test