import React from "react";
import Link from "next/link"
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import { Button } from "./ui/button"
import { HeartIcon } from "lucide-react"
import { getSiteSettings }from "@/sanity/lib/siteSettings/getSiteSettings";
import Image from "next/image";
import {urlFor} from "@/sanity/lib/image";
import CurrentTierBadge from "@/components/CurrentTierBadge";


 async function Header() {
    const siteSetting = await getSiteSettings();


     return (
        <header className="flex item-center justify-between p-4 border-b-blue-500 border-2 bg-radial-[at_50%_75%] from-sky-300 to-blue-400">
            <div>
                <Link href="/" className="flex items-center justify-between">
                    {
                        siteSetting?.headerLogo ? (
                            <Image src={urlFor(siteSetting?.headerLogo).url()} alt="Logo" width={50} height={50} className="rounded-4xl" />
                        ) : (
                            <Image src="../../app/logo.png" alt="Logo" />
                        )
                    }
                    <h2 className="m-2 text-white">{siteSetting?.siteTitle}</h2>
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <SignedIn>
                    <div className="flex items-center gap-2 hover:gap-4 px-2 py-2 hover:px-4 hover:bg-gray-100 transition-all duration-200 border border-e-gray-200 rounded-full">
                        <CurrentTierBadge/>
                        <UserButton/>
                    </div>
                </SignedIn>

                <SignedOut>
                    <Button asChild variant="outline"
                    className="p-2 rounded-lg py-2 bg-blue-500 text-white">
                        <div>
                            <HeartIcon className="w-4 h-4"/>
                            <SignInButton mode="modal" />
                        </div>
                    </Button>
                </SignedOut>
            </div>
        </header>
    )
}

export default Header