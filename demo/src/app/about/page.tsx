import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { Link } from '@/components/elements/link'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'

export default function AboutPage() {
  return (
    <HeroSimpleCentered
      headline="About Me"
      subheadline={
        <>
          <p className="mb-4">
            I&apos;m Asish Binu Mathew, a Product Engineer based in Glasgow with 3 years of experience and over 10 clients worldwide.
          </p>
          <Link href="https://www.asish.uk/" target="_blank">
            Visit my website <ArrowNarrowRightIcon />
          </Link>
        </>
      }
    />
  )
}
