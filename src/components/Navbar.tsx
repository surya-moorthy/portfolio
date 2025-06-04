import Link from "next/link"
import { NavigationMenu, NavigationMenuItem} from "./ui/navigation-menu"
import { Switch } from "./ui/switch"

export const Navbar = () =>{
    return (
        <NavigationMenu className="flex justify-around max-w-full bg-neutral-200 h-20 rounded-4xl shadow-xl p-4 left-0 right-0 z-50 top-0">
            <Link href="/" className="hover:underline border-0 text-2xl py-2 px-16 hover:bg-none font-bold">Surya Moorthy</Link>
            <NavigationMenuItem className="flex justify-center items-center space-x-10">
                <Link className="text-xl cursor-pointer hover:underline" href={"#about"} scroll={true}>
                    About
                </Link>
                <Link className="text-xl cursor-pointer hover:underline" href={"#proof-of-work"} scroll={true}>
                    Proof-Of-Work
                </Link>
                {/* <Button href="#roadmap" className="text-xl">
                    Roadmap
                </Button> */}
                <Switch value={"theme"} className="bg-neutral-800 shadow-2xl"/>
            </NavigationMenuItem>
        </NavigationMenu>
    )
}