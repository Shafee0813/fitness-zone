const Home = () => {
  const toPlans = () => {
    window.location.href = "https://fitness-zone-website.netlify.app/#plans"
  }
  return (
    <div className=" text-center">
      <p className="heading-text font-bold">Get your dream physique with</p> 
      <p className="heading-text pt-2 font-bold">top-notch guidance from our trainers</p>
      
      <p className="regular-text pt-4 text-slate-300">Want to gain muscle? Lose fat? Become flexible?</p> 
      <p className=" regular-text text-slate-300 pt-1 pb-5">We&apos;ve got you covered.</p>
      
      <button className="bg-white px-6 py-2 font-medium text-black rounded-xl" onClick={toPlans}>Check out our plans</button>
    </div>
  )
}

export default Home