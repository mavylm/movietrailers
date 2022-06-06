import Image from 'next/dist/client/image';

function HelpPage() {
  return (
    <>
      <div className='contentContainer'></div>
      <style jsx>
        {`
          .videoContainer {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin: 40px 0px;
          }
        `}
      </style>
    </>
  );
}

export default Help;
