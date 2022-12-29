import React from 'react';
import classNames from 'classnames';
import * as Tabs from '@radix-ui/react-tabs';

interface TabsProps {
    variant?: 'filled' | 'outlined' | 'text'
  }
  
  const tabsClasses: Record<string, Record<string, string>> = {

    variant: {
        'filled': 'data-[state=checked]:bg-primary-10 data-[state=unchecked]:bg-primary-50',
        'grey': 'data-[state=checked]:bg-neutral-30 data-[state=unchecked]:bg-neutral-60'
      }
  }

const TabsComp = ({ variant = 'filled' }: TabsProps) => {
    const classes = classNames('bg-primary-100 px-5 h-11 flex-1 flex items-center justify-center select-none text-neutral-70 data-[state=active]:text-primary-50 data-[state=active]:shadow first:rounded-tl-lg last:rounded-tr-lg hover:text-primary-70 focus:relative focus:shadow-lg')
  
    return (
        <Tabs.Root className="flex flex-col shadow" style={{ width: 320 }}defaultValue="tab1">
            <Tabs.List className=" flex border-b-4 border-primary-50" aria-label="Manage your account">
                <Tabs.Trigger className="bg-primary-100 px-5 h-11 flex-1 flex items-center justify-center select-none text-neutral-70 data-[state=active]:text-primary-50 data-[state=active]:shadow first:rounded-tl-lg last:rounded-tr-lg hover:text-primary-70 focus:relative focus:shadow-lg" value="tab1">
                    Account
                </Tabs.Trigger>
                <Tabs.Trigger className={classes} value="tab2">
                    Password
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="TabsContent rounded-tl-lg rounded-tr-lg outline-none grow p-5 bg-primary-100 focus:shadow" value="tab1">
                <p className="Text">Make changes to your account here. Click save when you're done.</p>
                <fieldset className="mb-3.5 w-full flex flex-col justify-start">
                    <label className="mb-2 text-neutral-50 block" htmlFor="name">
                        Name
                    </label>
                    <input className="Input flex-auto rounded text-primary-50 text-base h-9 shadow shadow-black" id="name" defaultValue="Pedro Duarte" />
                </fieldset>
                <fieldset className="b-3.5 w-full flex flex-col justify-start">
                    <label className="mb-2 text-neutral-50 block" htmlFor="username">
                        Username
                    </label>
                    <input className="Input" id="username" defaultValue="@peduarte" />
                </fieldset>
                <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                    <button className="Button green">Save changes</button>
                </div>
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab2">
                <p className="Text">Change your password here. After saving, you'll be logged out.</p>
                <fieldset className="b-3.5 w-full flex flex-col justify-start">
                    <label className="mb-2 text-neutral-50 block" htmlFor="currentPassword">
                        Current password
                    </label>
                    <input className="Input" id="currentPassword" type="password" />
                </fieldset>
                <fieldset className="b-3.5 w-full flex flex-col justify-start">
                    <label className="mb-2 text-neutral-50 block" htmlFor="newPassword">
                        New password
                    </label>
                    <input className="Input" id="newPassword" type="password" />
                </fieldset>
                <fieldset className="b-3.5 w-full flex flex-col justify-start">
                    <label className="mb-2 text-neutral-50 block" htmlFor="confirmPassword">
                        Confirm password
                    </label>
                    <input className="Input" id="confirmPassword" type="password" />
                </fieldset>
                <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                    <button className="Button green">Change password</button>
                </div>
            </Tabs.Content>
        </Tabs.Root>
    )
        ;
}

export default TabsComp;