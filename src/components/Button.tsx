export const Button = (props: React.PropsWithChildren) =>{
    return(
        <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]'>
            <div className='absolute inset-0 rounded-lg '>
            <div className='rounded-lg border border-white/20 inset-0 absolute [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
            <div className='rounded-lg border inset-0 absolute border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
            <div className='absolute inset-0 shadow-[0px_0px_10px_rgba(140,69,255,.7)_inset] rounded-lg'></div>
            </div>
            <span>{props.children}</span>
        </button>
    )
}

