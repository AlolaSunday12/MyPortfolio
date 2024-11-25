import React from 'react'
import Tim1 from '../assets/tim1.jpeg';
import Tim2 from '../assets/tim2.jpeg';
import Tim3 from '../assets/tim3.jpeg';
import Tim4 from '../assets/tim4.jpeg';

export default function Testimonials() {
  return (
    <div className="flex bg-sky-800 m-20 ssm:flex-col lg:flex-row">
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
             <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1
              ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                <img src={Tim1} alt="Tim1" className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                        Name goes here....
                    </div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:slate-400">
                        Assitant Manager
                    </div>
                </div>
             </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
             <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1
              ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                <img src={Tim2} alt="Tim1" className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                        Name goes here....
                    </div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:slate-400">
                        Assitant Manager
                    </div>
                </div>
             </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
             <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1
              ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                <img src={Tim3} alt="Tim1" className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                        Name goes here....
                    </div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:slate-400">
                        Assitant Manager
                    </div>
                </div>
             </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
             <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1
              ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                <img src={Tim4} alt="Tim1" className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" />
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                        Name goes here....
                    </div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:slate-400">
                        Assitant Manager
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}
