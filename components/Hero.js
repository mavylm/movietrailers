const Hero = () => {
  return (
    <>
      <div className='hero-image'>
        <div className='bg-overlay'>
          <div className='hero-container'>
            <h1>Welcome to Movie Trailers!</h1>
            <p>
              A one-stop place to watch movie trailers for free.
              <br />
              Create an account to save your favorite movies!
            </p>
            <button className='redButton'>Create Account</button>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .hero-image {
            background-image: url('assets/1988378.jpg');
            background-color: #fff;
            height: 100vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
          }

          .bg-overlay {
            background: rgba(0, 0, 0, 0.7);
            height: 100vh;
          }

          .hero-container {
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .hero-container > p {
            color: #fff;
          }
        `}
      </style>
    </>
  );
};

export default Hero;
