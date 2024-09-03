import { AboutUs, Features, Footer, Home, Nav, Plans } from './components';

function App() {
  return (
    <main className="scroll-smooth">
        <Nav/>
      <section id = "home" className="bg-1 min-h-screen bg-cover flex justify-center items-center">
        <Home/>
      </section>
      <section id = "activities" className=" min-h-screen h-fit bg-black flex flex-col justify-center items-center">
        <Features/>
      </section>
      <section id = "plans" className=" min-h-screen  h-fit off-black pb-10">
        <h1 className='heading-text pt-20 text-center font-semibold'>Memberships</h1>
        <p className="heading-text pt-8 mb-8 text-center font-semibol text-slate-300">Get started on your goals </p>
        <Plans/>
      </section>
      <section id = "contact-us" className=" min-h-screen  h-fit bg-black  pb-10">
        <h1 className='heading-text pt-24 px-40 text-center font-semibold max-md:px-20'>Hi! We're a local gym at Hyderabad trying to promote active lifestyles.</h1>
        <p className="heading-text pt-10 mb-8 text-center font-semibol text-slate-300 px-40 max-md:px-20">By joining us, you can help grow the community and meet your goals.</p>
        <AboutUs />
      </section>
      <Footer />
    </main>
  )
}

export default App
