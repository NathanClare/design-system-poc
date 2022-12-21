import React from 'react'
import * as RadixPopover from '@radix-ui/react-popover';

const Popover = () => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Anchor asChild>
        <RadixPopover.Trigger asChild>
          <button className="inline py-xl px-3xl bg-primary text-white border-primary border-2 rounded mx-xl text-l aria-expanded:bg-grey aria-expanded:border-grey transition leading-none">Trigger</button>
        </RadixPopover.Trigger>
      </RadixPopover.Anchor>
      <RadixPopover.Portal>
        <>
        <div className="bg-grey opacity-20 h-screen w-screen left-0 top-0 fixed z-1 transition delay-200" />
        <RadixPopover.Content className="bg-white p-3xl fixed left-2/4 top-xl transition -translate-x-2/4 w-96 rounded">
          <p>Hello</p>
          <RadixPopover.Close className="">
            Close
          </RadixPopover.Close>
        </RadixPopover.Content>
        </>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}

export default Popover