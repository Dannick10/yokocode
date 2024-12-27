import React, { Ref } from 'react'

type consoleProps = {
    consoleOutput: string[],
    divConsoleRef: Ref<HTMLDivElement> | null
}

const Console = ({consoleOutput, divConsoleRef}: consoleProps) => {
  
  return (
    <div
    ref={divConsoleRef}
    className="transition-all w-full z-10 bottom-0 bg-zinc-950 text-white px-4 pt-2 pb-8 h-32 overflow-y-auto flex flex-col "
  >
    {consoleOutput.map((line, index) => (
      <div key={index}>{line}</div>
    ))}
  </div>
  )
}

export default Console