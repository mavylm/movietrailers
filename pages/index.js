import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div className='contentContainer'>test</div>
      </main>

      <style jsx>
        {`
          .contentContainer {
            margin: 0px 100px;
          }
        `}
      </style>
    </>
  );
}
