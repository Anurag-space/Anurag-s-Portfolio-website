import React from 'react'
import { Accordion } from 'flowbite-react'
import { faqs } from '../constants'

// const AccordionBuilder = () => {
//   return (
//     <Accordion className=" p-[1px] rounded-2xl">
//       <Accordion.Panel>
//         <Accordion.Title className="text-blue text-[20px]">
//           What is Flowbite?
//         </Accordion.Title>
//         <Accordion.Content>
//           <p className="mb-2 text-white">
//             Flowbite is an open-source library of interactive components built
//             on top of Tailwind CSS including buttons, dropdowns, modals,
//             navbars, and more.
//           </p>
//           <p className=" text-white">
//             Check out this guide to learn how to
//             <a
//               href="https://flowbite.com/docs/getting-started/introduction/"
//               className="text-blue-600 hover:underline dark:text-blue-500"
//             >
//               get started
//             </a>
//             and start developing websites even faster with components on top of
//             Tailwind CSS.
//           </p>
//         </Accordion.Content>
//       </Accordion.Panel>
//       <Accordion.Panel>
//         <Accordion.Title className="text-[#00B5EE] text-[20px]">
//           Is there a Figma file available?
//         </Accordion.Title>
//         <Accordion.Content>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Flowbite is first conceptualized and designed using the Figma
//             software so everything you see in the library has a design
//             equivalent in our Figma file.
//           </p>
//           <p className="text-gray-500 dark:text-gray-400">
//             Check out the
//             <a
//               href="https://flowbite.com/figma/"
//               className="text-blue-600 hover:underline dark:text-blue-500"
//             >
//               Figma design system
//             </a>
//             based on the utility classes from Tailwind CSS and components from
//             Flowbite.
//           </p>
//         </Accordion.Content>
//       </Accordion.Panel>
//       <Accordion.Panel>
//         <Accordion.Title>Is there a Figma file available?</Accordion.Title>
//         <Accordion.Content>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Flowbite is first conceptualized and designed using the Figma
//             software so everything you see in the library has a design
//             equivalent in our Figma file.
//           </p>
//           <p className="text-gray-500 dark:text-gray-400">
//             Check out the
//             <a
//               href="https://flowbite.com/figma/"
//               className="text-blue-600 hover:underline dark:text-blue-500"
//             >
//               Figma design system
//             </a>
//             based on the utility classes from Tailwind CSS and components from
//             Flowbite.
//           </p>
//         </Accordion.Content>
//       </Accordion.Panel>
//       <Accordion.Panel>
//         <Accordion.Title>
//           What are the differences between Flowbite and Tailwind UI?
//         </Accordion.Title>
//         <Accordion.Content>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             The main difference is that the core components from Flowbite are
//             open source under the MIT license, whereas Tailwind UI is a paid
//             product. Another difference is that Flowbite relies on smaller and
//             standalone components, whereas Tailwind UI offers sections of pages.
//           </p>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             However, we actually recommend using both Flowbite, Flowbite Pro,
//             and even Tailwind UI as there is no technical reason stopping you
//             from using the best of two worlds.
//           </p>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Learn more about these technologies:
//           </p>
//           <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
//             <li>
//               <a
//                 href="https://flowbite.com/pro/"
//                 className="text-blue-600 hover:underline dark:text-blue-500"
//               >
//                 Flowbite Pro
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://tailwindui.com/"
//                 rel="nofollow"
//                 className="text-blue-600 hover:underline dark:text-blue-500"
//               >
//                 Tailwind UI
//               </a>
//             </li>
//           </ul>
//         </Accordion.Content>
//       </Accordion.Panel>
//     </Accordion>
//   )
// }

const AccordionMenu = () => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>
          <span className="text-dark-blue text-[20px]"> {faqs[0].title} </span>
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-white text-[18px]">{faqs[0].answer}</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          <span className="text-dark-blue text-[20px]">{faqs[1].title}</span>
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-white text-[18px]">{faqs[1].answer}</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          <span className="text-dark-blue text-[20px]">{faqs[2].title}</span>
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-white text-[18px]"> {faqs[2].answer}</p>
          <ul className="list-disc pl-5 text-white text-[18px]">
            {faqs[2].list.map((language, index) => (
              <li key={index}>{language}</li>
            ))}{' '}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          <span className="text-dark-blue text-[20px]"> {faqs[3].title}</span>
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-white text-[18px]">{faqs[3].answer}</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          <span className="text-dark-blue text-[20px]">{faqs[4].title}</span>
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-white text-[18px]">{faqs[4].answer}</p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}

export default AccordionMenu

// To add another panel
/* <Accordion.Panel>
<Accordion.Title>Is there a Figma file available?</Accordion.Title>
<Accordion.Content>
  <p className="mb-2 text-gray-500 dark:text-gray-400">
    Flowbite is first conceptualized and designed using the Figma
    software so everything you see in the library has a design
    equivalent in our Figma file.
  </p>
  <p className="text-gray-500 dark:text-gray-400">
    Check out the
    <a
      href="https://flowbite.com/figma/"
      className="text-blue-600 hover:underline dark:text-blue-500"
    >
      Figma design system
    </a>
    based on the utility classes from Tailwind CSS and components from
    Flowbite.
  </p>
</Accordion.Content>
</Accordion.Panel> */
