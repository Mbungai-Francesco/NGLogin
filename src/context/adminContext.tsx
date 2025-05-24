// import { getAdmin } from '@/lib/localStore'
// import type { User } from '../types'
// import { createContext, useEffect, useState, type ReactNode } from 'react'

// interface AdminContextProps {
//   admin: Admin
//   setAdmin: React.Dispatch<React.SetStateAction<Admin>>
//   theme: string | null
//   setTheme: React.Dispatch<React.SetStateAction<string | null>>
//   route: string
//   setRoute: React.Dispatch<React.SetStateAction<string>>
// }

// export const AdminContext = createContext<AdminContextProps | undefined>(
//   undefined,
// )

// export const AdminProvider = ({ children }: { children: ReactNode }) => {
//   const isBrowser = typeof window !== 'undefined'
//   const storedTheme = isBrowser ? localStorage.getItem('theme') : null

//   const [admin, setAdmin] = useState(getAdmin())
//   const [theme, setTheme] = useState<string | null>(storedTheme)
//   const [route, setRoute] = useState<string>('')

//   useEffect(() => {
//     // console.log(theme)
//     if (theme == null) {
//       if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         setTheme('dark')
//         localStorage.setItem('theme', 'dark')
//       } else {
//         setTheme('light')
//         localStorage.setItem('theme', 'light')
//       }
//       console.log(localStorage.getItem('theme'))
//     }
//   })

//   return (
//     <AdminContext.Provider value={{ admin, setAdmin, theme, setTheme, route, setRoute }}>
//       {children}
//     </AdminContext.Provider>
//   )
// }
