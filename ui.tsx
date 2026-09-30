import type {ReactNode} from 'react';
export function FileCard({children}:{children:ReactNode}){return <main className="file-card">{children}</main>}
export function Header({title,intro}:{title:ReactNode,intro?:string}){return <header>{title}{intro&&<p>{intro}</p>}</header>}
export function Group({children,label}:{children:ReactNode,label:string,heading?:boolean}){return <div className="file-group"><p className="group-label">{label}</p>{children}</div>}
export function Closing({children}:{children:ReactNode}){return <p className="file-closing">{children}</p>}
export function ButtonLink({children,href}:{children:ReactNode,href:string,variant?:string}){return <a className="file-button" href={href} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true"> â</span></a>}
export function TextLink({children,href}:{children:ReactNode,href:string}){return <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true"> â</span></a>}
