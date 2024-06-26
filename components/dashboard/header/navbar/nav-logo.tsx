import Image from 'next/image'
import Link from 'next/link'

export const NavLogo = () => {
    return (
        <Link href="/">
        <div className="flex ml-2 md:ml-5 py-3 justify-center">
        <Image className="w-auto md:h-8 h-6 self-center" src="/logo.png" width={60} height={50} alt="" priority/>
        <h1 className="ml-2 md:ml-4 self-center font-bold tracking-wider text-sm md:text-base lg:text-lg text-slate-700 dark:text-slate-400">ENGINETIF<span className="text-red-900 font-bold">AI</span></h1>
        </div>
        </Link>
    )
}