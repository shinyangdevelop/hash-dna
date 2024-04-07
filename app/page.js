/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0vAENLjbEFv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function Component() {
    return (
        <div className="min-h-screen bg-gray-200 p-4">
            <header className="flex justify-between items-center p-4 bg-slate-300">
                <div className="bg-white p-2 rounded">
                    <span className="font-bold">LOGO</span>
                </div>
                <div className="space-x-2 h-full flex justify-center items-center p-0">
                    <div className="space-x-1 p-2 flex">
                        <CoinsIcon className="h-6 w-6" />
                        <text>: 4</text>
                    </div>
                    <div className="space-x-4">
                    <Button
                            className="bg-white text-black rounded-lg hover:bg-gray-800 hover:text-gray-100">Login</Button>
                        <Button
                            className="bg-black text-white rounded-lg hover:bg-gray-100 hover:text-gray-800">Register</Button>
                    </div>
                </div>
            </header>
            <main className="flex justify-between items-start mt-8">
                <div className="w-1/3 bg-white p-4 rounded">
                    <Select>
                        <SelectTrigger id="hash-generation">
                            <SelectValue placeholder="<Hash value>: <generation>" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="hash1">Hash1: 2</SelectItem>
                            <SelectItem value="hash2">Hash2: 3</SelectItem>
                            <SelectItem value="hash3">Hash3: 5</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="mt-4">
                        <Button className="w-full flex justify-center items-center bg-orange-300 text-neutral-700
                        hover:bg-orange-400 hover:text-neutral-800 rounded-lg">
                            {/*TODO: Change Color*/}
                            <PlusIcon className="h-5 w-5" />
                            Generate new...
                        </Button>
                    </div>
                </div>
                <div className="w-2/3 ml-8">
                    <div className="bg-white p-4 mb-4 rounded">
                        <Button className="w-full bg-cyan-300 text-neutral-700 hover:bg-cyan-400 hover:text-neutral-700">make new Hash</Button>
                    </div>
                    <div className="bg-white p-4 rounded">
                        <Input placeholder="Another Parent Key" type="text" />
                    </div>
                </div>
            </main>
        </div>
    )
}

function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}

function CoinsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10"/>
            <path d="M10 6+10 16"/>
            <path d="M10 11+15.5 6.5"/>
            <path d="M10 11+15.5 15.5"/>
        </svg>
    )
}

