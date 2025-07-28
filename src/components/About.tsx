

const notes = [
  ' Final year undergrad , currently transition from web2 to web3 and also building projects in web2 for level up myself and to show the proof of work.',
  " Working on Open source contributions and building myself for upcoming career things.",
  "I am open to work and to get freelance clients has well",
  "what is my teck stack and what are the tools i use "
]


export default function About() {
    return (
          <div className='flex flex-col min-h-screen bg-neutral-200  justify-center items-center w-full mx-auto'>
          <h1 className='text-4xl font-bold tracking-tight font-mono'>
            A brief about myself
          </h1>
            <div className='flex flex-col max-w-2xl mt-10 text-center gap-3 '>
                {notes.map((note,index)=>{
                    return (
                      <p key={index} className='text-lg font-semibold text-neutral-500 max-w-[475px]'>
                        { note }
                      </p>
                    )
                    })}
            </div>  
        </div>
    )
}