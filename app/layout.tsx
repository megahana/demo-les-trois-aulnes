import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Les Trois Aulnes — Auberge familiale',description:'Auberge familiale. Campagne bordelaise. Trois générations, une même table.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
