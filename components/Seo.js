import React from 'react'
import { NextSeo } from 'next-seo'

export const siteTitle = "Hamza ZEGHARI - Links"
export const siteDescription = "All my links in one space"

export default function Seo() {
    return (
        <NextSeo>
            title={siteTitle}
            description={siteDescription}
            openGraph={{
                title:"Hamza ZEGHARI - Links",
                description: "All my links in one space"
            }}
        </NextSeo>
    )
}
