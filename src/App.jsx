import bgPatternBottom from './images/bg-pattern-bottom.svg';
import bgPatternTop from './images/bg-pattern-top.svg';
import avatar from './images/image-victor.jpg'

function App() {

  return (
    <main className='overflow-hidden relative font-KS w-full h-screen grid place-content-center bg-[#19a2ae]'>
      <img className='absolute -left-1/4 bottom-1/2' src={bgPatternTop} alt="" />
      <img className='absolute -right-1/4 top-1/2' src={bgPatternBottom} alt="" />
      <section className='w-80 h-96 rounded-xl bg-[url("./images/bg-pattern-card.svg")] z-10'>
        <div className="relative flex items-center justify-center h-2/6 rounded-t-xl">
          <img className='absolute top-1/2 rounded-full border-4 border-white' src={avatar} alt="profile-avatar" />
        </div>
        <div className='bg-white rounded-b-xl'>
          <div className='pt-20'>
            <div className='grid place-content-center pb-6'>
              <h1 className="text-2xl font-bold flex gap-2 items-center justify-center">Victor Crest <span className='text-[#969696] font-normal text-center text-xl'>26</span></h1>
              <p className='text-[#969696] text-center'>London</p>
            </div>
            <div className="border-t border-t-[#969696] gap-2 flex items-center justify-between p-8 pt-6">
              <div className='w-2/6 grid place-content-center'>
                <p className='font-bold text-center'>80K</p>
                <span className='text-[#969696] text-sm'>Followers</span>
              </div>
              <div className='w-2/6 grid place-content-center'>
                <p className='font-bold text-center'>803K</p>
                <span className='text-[#969696] text-sm'>Likes</span>
              </div>
              <div className='w-2/6 grid place-content-center'>
                <p className='font-bold text-center'>1.4K</p>
                <span className='text-[#969696] text-sm'>Photos</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
