'use client';
import NavBar from "../components/navbar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Button
} from "@/components/ui/button"
import EditorComponent from '../components/EditorComponent';

export default function TreePage() {

    return (
        <div>
            <NavBar />
            <div className="h-screen w-screen">
                <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-bold">Tree Page</h1>
                </div>
                <div className="w-full justify-start ml-8 mt-6">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Algorithm" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="count-leaves">Count Leaves</SelectItem>
                            <SelectItem value="kabane">DFS</SelectItem>
                            <SelectItem value="BST">Binary Search Tree</SelectItem>
                        </SelectContent>
                    </Select>

                    <Drawer>
                        <DrawerTrigger>
                        <div className="text-sm border-2 border-gray-400 rounded-md px-2 py-2 mt-4 hover:text-lime-400 hover:border-lime-400 transition-all">
                            Find an opponent    
                        </div>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Challenge a player online</DrawerTitle>
                                <DrawerDescription>Practice your knowledge in trees!</DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                <Button size="lg" >Challenge</Button>
                                <DrawerClose>
                                    <Button variant="outline" size="lg" >Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>

                </div>

            </div>
        </div>
    )
}