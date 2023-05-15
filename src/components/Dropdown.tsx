import React, { useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'

import i18n from '../modules/i18n'
import TAILWIND_CLASS from '../constants/tailwinds.class'

const DROPDOWN_CLASS = {
  NAV_BUTTON:
    'inline-block w-auto p-4 duration-300 hover:opacity-60 hover:bg-[#4B4D4D]',
  CONTAINER:
    'bg-pastel-black text-whitesmoke rounded-[1rem] w-auto mr-0 w-[10rem] absolute right-0',
  BUTTON: 'w-auto inline-block p-4 hover:opacity-60',
  ACTIVE_BUTTON: 'w-auto inline-block p-4 opacity-60 m-0',
}

const DropDown = () => {
  const [onUsage, setUsage] = useState<string>()

  const mouseHandling = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target: HTMLButtonElement = event.currentTarget

    setUsage(target.name)
    i18n.changeLanguage(target.name)
  }

  return (
    <>
      <Menu as="div" className="relative inline-block">
        <Menu.Button className={DROPDOWN_CLASS.NAV_BUTTON}>🌐 LANG</Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className={DROPDOWN_CLASS.CONTAINER}>
            <Menu.Item>
              <button
                type="button"
                onClick={mouseHandling}
                name="en"
                className={classNames(
                  onUsage === 'en'
                    ? DROPDOWN_CLASS.ACTIVE_BUTTON
                    : DROPDOWN_CLASS.BUTTON,
                  TAILWIND_CLASS.HOVER_SCALE
                )}
              >
                🇬🇧 ENG
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                type="button"
                onClick={mouseHandling}
                name="th"
                className={classNames(
                  onUsage === 'th'
                    ? DROPDOWN_CLASS.ACTIVE_BUTTON
                    : DROPDOWN_CLASS.BUTTON,
                  TAILWIND_CLASS.HOVER_SCALE
                )}
              >
                🇹🇭 THA
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

export default DropDown
