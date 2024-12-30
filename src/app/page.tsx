import React from "react"
import catSrc from '../../public/cats.png'
import Hero from '@/components/hero'

export default function Page() {
  return (
    <Hero srcUrl={catSrc} altTxt="Image" content="Professional Cloud Hositng"></Hero>
  )
}