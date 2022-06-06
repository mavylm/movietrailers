const TextBlock = () => {
  return (
    <div className='contentContainer'>
      <div className='guide'>
        <h2>See a movie you like?</h2>
        <p>Create an account to save it for later.</p>
      </div>

      <style jsx>
        {`
          .guide {
            text-align: center;
            width: 50%;
            margin-top: 40px;
          }

          .guide p {
            color: #88939e;
          }
        `}
      </style>
    </div>
  );
};

export default TextBlock;
