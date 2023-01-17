import * as RadixTabs from '@radix-ui/react-tabs'
import React from 'react'

interface TabsProps {
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'outlined' | 'text'
  tabOne: string
  tabTwo: string
}

interface ITabsFamilyClasses {
  size: Record<string, string>
  variant: Record<string, Record<string, string>>
  iconPosition: Record<string, string>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tabsFamilyClasses: ITabsFamilyClasses = {
  size: {
    sm: 'text-sm px-2 py-1',
    md: 'text-sm px-3 py-2',
    lg: 'text-md px-4 py-2.5'
  },
  variant: {
    filled: {
      base: 'bg-primary-base text-primary-white hover:bg-primary-base hover:drop-shadow-10 focus:bg-primary-500 pressed:bg-primary-500 pressed:drop-shadow-none focus:drop-shadow-none'
    },
    outlined: {
      base: 'bg-primary-white text-primary-base border border-primary-600 hover:bg-primary-100 focus:bg-primary-100 pressed:bg-primary-100'
    },
    text: {
      base: 'bg-primary-transparent text-primary-base hover:bg-primary-100 focus:bg-primary-100 pressed:bg-primary-100'
    }
  },
  iconPosition: {
    left: '[&>span+span]:ml-2 [&>*:first-child]:order-first',
    right: '[&>span+span]:mr-2 [&>*:first-child]:order-last'
  }
}

const Tabs = ({ tabOne, tabTwo }: TabsProps) => {
  return (
    <RadixTabs.Root className="flex flex-col shadow w-[320px]" defaultValue="tab1">
      <RadixTabs.List className=" flex border-b-4 border-primary-500" aria-label="Manage your account">
        <RadixTabs.Trigger
          className="bg-primary-white px-5 h-11 flex-1 flex items-center justify-center select-none text-neutral-300 data-[state=active]:text-primary-500 data-[state=active]:shadow first:rounded-tl-lg last:rounded-tr-lg hover:text-primary-300 focus:relative focus:shadow-lg"
          value="tab1"
        >
          {tabOne}
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          className={`bg-primary-white px-5 h-11 flex-1 flex items-center justify-center select-none text-neutral-300 data-[state=active]:text-primary-500 data-[state=active]:shadow first:rounded-tl-lg last:rounded-tr-lg hover:text-primary-300 focus:relative focus:shadow-lg`}
          value="tab2"
        >
          {tabTwo}
        </RadixTabs.Trigger>
      </RadixTabs.List>
      <RadixTabs.Content className="TabsContent rounded-tl-lg rounded-tr-lg outline-none grow p-5 bg-primary-white focus:shadow" value="tab1">
        <p className="Text">Make changes to your account here. Click save when you are done.</p>
        <fieldset className="mb-3.5 w-full flex flex-col justify-start">
          <label className="mb-2 text-neutral-500 block" htmlFor="name">
            Name
          </label>
          <input className="Input flex-auto rounded text-primary-500 text-base h-9 shadow shadow-black" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="b-3.5 w-full flex flex-col justify-start">
          <label className="mb-2 text-neutral-500 block" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
          <button className="Button green">Save changes</button>
        </div>
      </RadixTabs.Content>
      <RadixTabs.Content className="TabsContent" value="tab2">
        <p className="Text">Change your password here. After saving, you will be logged out.</p>
        <fieldset className="b-3.5 w-full flex flex-col justify-start">
          <label className="mb-2 text-neutral-500 block" htmlFor="currentPassword">
            Current password
          </label>
          <input className="Input" id="currentPassword" type="password" />
        </fieldset>
        <fieldset className="b-3.5 w-full flex flex-col justify-start">
          <label className="mb-2 text-neutral-500 block" htmlFor="newPassword">
            New password
          </label>
          <input className="Input" id="newPassword" type="password" />
        </fieldset>
        <fieldset className="b-3.5 w-full flex flex-col justify-start">
          <label className="mb-2 text-neutral-500 block" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input className="Input" id="confirmPassword" type="password" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
          <button className="Button green">Change password</button>
        </div>
      </RadixTabs.Content>
    </RadixTabs.Root>
  )
}

export default Tabs
