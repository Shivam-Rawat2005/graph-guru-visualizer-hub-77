
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "./ThemeToggle";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm shadow-sm border-b">
      <div className="container flex justify-between items-center h-16">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
            GraphViz
          </span>
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/visualizer">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Visualizer
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] grid-cols-2">
                  <li className="col-span-2">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/compare"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/10 p-4 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 text-lg font-medium">
                          Compare Algorithms
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Analyze performance differences between graph algorithms
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/visualizer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Visualizer</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Watch algorithms in action
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/learn"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Learn</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Educational resources about graph theory
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/learn">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Learn
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild variant="default" size="sm" className="rounded-full px-4">
            <Link to="/visualizer">Try It Now</Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="md:hidden border-t">
        <div className="grid grid-cols-5 divide-x">
          <Link to="/" className="flex flex-col items-center p-2 hover:bg-accent transition-colors">
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link to="/visualizer" className="flex flex-col items-center p-2 hover:bg-accent transition-colors">
            <span className="text-xs font-medium">Visualizer</span>
          </Link>
          <Link to="/compare" className="flex flex-col items-center p-2 hover:bg-accent transition-colors">
            <span className="text-xs font-medium">Compare</span>
          </Link>
          <Link to="/learn" className="flex flex-col items-center p-2 hover:bg-accent transition-colors">
            <span className="text-xs font-medium">Learn</span>
          </Link>
          <div className="flex flex-col items-center justify-center p-2 hover:bg-accent transition-colors">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
