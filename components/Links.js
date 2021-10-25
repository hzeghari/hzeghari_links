import React from 'react'
import {AnimatedSocialIcon} from 'react-animated-social-icons'
import Link from 'next/link'

export default function Links() {
    var SocialMedias = [
        {
            id:2,
            name: "linkedin",
            nameText: "LinkedIn",
            nameIcon:"linkedin",
            assetsImage: "https://www.linkedin.com",
            linkAccount: "https://www.linkedin.com/in/hzeghari/"

        },
        {
            id:2,
            name: "github",
            nameText: "Github",
            nameIcon:"github",
            assetsImage: "https://github.com",
            linkAccount: "https://github.com/hzeghari"

        },
        {
            id:3,
            name: "foundation",
            nameText: "Foundation - NFT",
            nameIcon:"www",
            assetsImage: "https://foundation.app",
            linkAccount: "https://foundation.app/@the47"

        },
        {
            id:4,
            name: "instagram",
            nameText: "Instagram",
            nameIcon:"instagram",
            assetsImage: "https://www.instagram.com",
            linkAccount: "https://www.instagram.com/the47.js/"

        },

    ]
    return (
        <div className="card text-center shadow ">

        

            {/* <div className="w-1/5 overflow-hidden"></div> */}

            <div className=" flex flex-col items-center space-y-6 overflow-hidden">
            {
                SocialMedias.map ( (account,index) => (
                    <Link key={index} href={account.linkAccount} passHref={true}>
                        <a className="w-80" target="_blank">
                            <button className="containerBTN bg-white h-12 w-full px-4 py-2 font-semibold text-black flex justify-center justify-items-center items-center rounded">
                                <AnimatedSocialIcon
                                    className="mr-auto"
                                    brandName={account.nameIcon}
                                    url={account.linkAccount}
                                    animation="bounce"
                                    // hoverColor="acff9e"
                                    width="2em"
                                    animationDuration={0.8}

                                />
                                <span className="mr-auto">{account.nameText}</span>
                                {/* <style jsx>{`
                                    .containerBTN {
                                        display: block ruby;
                                    }
                                `}</style> */}
                                
                            </button>
                        </a>
                    </Link>
                
                ))
                
            }
               

            </div>

            {/* <div className="w-1/5 overflow-hidden"></div> */}
        
        </div>
        
    )
}
