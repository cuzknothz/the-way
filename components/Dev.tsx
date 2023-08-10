'use client'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

export const Dev = () => {
  const ref = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(ref.current!, {
      translateY: '-200vh',
      duration: 0,
      ease: 'power4.inOut',
      delay: 0,
    })
  }, [])

  return (
    <div className="w-full h-screen overflow-hidden">
      <main ref={ref} className="w-full">
        <div className="w-full h-[200vh] bg-black ">
          <div className="h-[100vh] flex justify-center items-center ">
            <svg
              className="invert w-[150px] "
              viewBox="0 0 11 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.596902 2.52089H0.914005V3.51315C0.914005 3.83772 0.77162 4 0.486848 4H0.429023C0.144251 4 0.00124354 3.83772 0 3.51315V0.484794C0 0.160228 0.143008 -0.00136657 0.429023 8.70428e-06H0.486848C0.77162 8.70428e-06 0.914005 0.161604 0.914005 0.484794V1.47706H0.596902V0.532241C0.596902 0.411216 0.549647 0.350704 0.455137 0.350704C0.363115 0.350704 0.317104 0.411216 0.317104 0.532241V3.46777C0.317104 3.58879 0.363115 3.6493 0.455137 3.6493C0.549647 3.6493 0.596902 3.58879 0.596902 3.46777V2.52089Z"
                fill="black"
              />
              <path
                d="M1.94859 0.0536445H2.26569V3.51315C2.26569 3.83772 2.1233 4 1.83853 4H1.78071C1.49593 4 1.35293 3.83772 1.35168 3.51315V0.0536445H1.66879V3.46777C1.66879 3.58879 1.7148 3.6493 1.80682 3.6493C1.90133 3.6493 1.94859 3.58879 1.94859 3.46777V0.0536445Z"
                fill="black"
              />
              <path
                d="M3.30027 0.0536445V0.40434L3.01674 3.6493H3.30027V4H2.70337V3.6493L2.98316 0.40434H2.70337V0.0536445H3.30027Z"
                fill="black"
              />
              <path
                d="M4.40387 1.99691C4.50335 2.15507 4.56926 2.28916 4.60159 2.39918C4.63516 2.5092 4.65195 2.65704 4.65195 2.8427V4H4.33858L4.33485 2.79113C4.33485 2.68936 4.32552 2.60409 4.30687 2.53533C4.28946 2.46657 4.25526 2.39024 4.20428 2.30635C4.14583 2.40537 4.10604 2.49132 4.0849 2.56421C4.065 2.6371 4.05505 2.73131 4.05505 2.84683V4H3.73795V0.0536445H4.05505V1.92471C4.24158 1.69641 4.33485 1.45574 4.33485 1.20269L4.33858 0.0536445H4.65195V1.15318C4.65195 1.33884 4.63516 1.48668 4.60159 1.5967C4.56926 1.70535 4.50335 1.83875 4.40387 1.99691Z"
                fill="black"
              />
              <path
                d="M5.69399 0.0536445H6.00364V4H5.69399L5.39181 1.83188V4H5.08963V0.0536445H5.39181L5.69399 2.1867V0.0536445Z"
                fill="black"
              />
              <path
                d="M6.92816 8.70428e-06C7.21293 8.70428e-06 7.35532 0.161604 7.35532 0.484794V3.51315C7.35532 3.83772 7.21293 4 6.92816 4H6.99158H6.87034C6.58556 4 6.44256 3.83772 6.44131 3.51315V0.484794C6.44131 0.160228 6.58432 -0.00136657 6.87034 8.70428e-06H6.92816ZM7.03821 3.46777V0.532241C7.03821 0.411216 6.99096 0.350704 6.89645 0.350704C6.80443 0.350704 6.75842 0.411216 6.75842 0.532241V3.46777C6.75842 3.58879 6.80443 3.6493 6.89645 3.6493C6.99096 3.6493 7.03821 3.58879 7.03821 3.46777Z"
                fill="black"
              />
              <path
                d="M8.62866 0.0536445V0.40434H8.33021V4H8.0131V0.40434H7.71465V0.0536445H8.62866Z"
                fill="black"
              />
              <path
                d="M9.36106 0.0536445V1.92471C9.36354 1.92196 9.3766 1.90408 9.40023 1.87107C9.5022 1.71567 9.56811 1.59602 9.59795 1.51213C9.62904 1.42686 9.64459 1.31684 9.64459 1.18206V0.0536445H9.96169V4H9.64459V2.09799C9.6421 2.10349 9.63775 2.11175 9.63153 2.12275C9.62531 2.13237 9.61972 2.13994 9.61474 2.14544C9.51277 2.30085 9.44562 2.41981 9.41329 2.50232C9.38095 2.58484 9.36479 2.69142 9.36479 2.82208L9.36106 4H9.04768V0.0536445H9.36106Z"
                fill="black"
              />
              <path
                d="M11 0.0536445V0.40434L10.7165 3.6493H11V4H10.4031V3.6493L10.6829 0.40434H10.4031V0.0536445H11Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div
          ref={ref2}
          className="w-full h-screen  flex justify-center items-center text-[1rem] flex-col gap-[10px]"
        >
          <span className="font-bold">This site is under development</span>
          <div className="w-[150px] h-[3px] relative overflow-hidden">
            <div className="h-full  bg-black animate-loading absolute "></div>
          </div>
        </div>
      </main>
    </div>
  )
}
