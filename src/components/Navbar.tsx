
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink} from "./ui/navigation-menu"
import { Switch } from "./ui/switch"



export const Navbar = () =>{
    return (
        <NavigationMenu className="flex justify-between max-w-full">
                   <a href="/" className="hover:underline border-0 text-2xl py-2 px-8 hover:bg-none font-bold">Surya Moorthy</a>
                   <NavigationMenuItem className="flex justify-center items-center space-x-2">
                         <NavigationMenuLink href="#about" className="text-xl">
                                 About
                         </NavigationMenuLink>
                         <NavigationMenuLink href="#proof-of-work" className="text-xl">
                                 Proof  Of  Work
                         </NavigationMenuLink>
                         {/* <NavigationMenuLink href="#roadmap" className="text-xl">
                                 Roadmap
                         </NavigationMenuLink> */}
                         <Switch value={"theme"}/>
                   </NavigationMenuItem>
        </NavigationMenu>
    )
}