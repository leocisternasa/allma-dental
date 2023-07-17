import React from 'react'
import Image from 'next/image'
import instagramIcon from '../public/instagram.png'
import facebookIcon from '../public/facebook.png'
import youtubeIcon from '../public/youtube.png'
import linkedinIcon from '../public/linkedin.png'
import twitterIcon from '../public/twitter.png'
import whatsappIcon from '../public/whatsapp.png'

function SocialMedia() {
  return (
    <div className="fixed right-0 top-1/4 z-50 px-5 py-3 bg-transparent flex flex-col space-y-3 ">
    {/* <!-- Facebook --> */}
    <a href="#" title="Share on Facebook">
    <Image src={facebookIcon} height={50} width={50} alt="icono de instagram"/>
    </a>

    {/* <!-- WhatsApp --> */}
    <a href="#" title="Share on WhatsApp">
    <Image src={whatsappIcon} height={50} width={50} alt="icono de instagram"/>
    </a>

    <a href="#" title="Share on WhatsApp">
    <Image src={instagramIcon} height={50} width={50} alt="icono de instagram"/>
    </a>

    {/* <!-- Twitter --> */}
    <a href="#" title="Share on Twitter">
    <Image src={twitterIcon} height={50} width={50} alt="icono de instagram"/>
    </a>

    {/* <!-- LinkedIn --> */}
    <a href="#" title="Share on LinkedIn">
    <Image src={linkedinIcon} height={50} width={50} alt="icono de instagram"/>
    </a>
    <a href="#" title="Share on LinkedIn">
    <Image src={youtubeIcon} height={50} width={50} alt="icono de instagram"/>
    </a>
</div>
  )
}

export default SocialMedia