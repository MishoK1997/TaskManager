const btnStyle =`inline-flex items-center border font-sans font-medium 
text-center transition-all duration-300
 ease-in disabled:opacity-50 disabled:shadow-none 
 disabled:cursor-not-allowed data-[shape=pill]:rounded-full 
 data-[width=full]:w-full focus:shadow-none text-sm 
 rounded-md py-2 px-4 bg-transparent border-transparent 
 text-slate-800 hover:bg-slate-800/5 hover:border-slate-800/5 
 shadow-none hover:shadow-none
 cursor-pointer ml-1`


export default function Button ({children, ...props}) {
    return <button {...props} className={btnStyle}>{children}</button>
}

