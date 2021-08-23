import { useContext, useEffect } from 'react'

import ModelsContext from './ModelsContext'
import { useMotionValue } from 'framer-motion'


export default function useWrapperScroll() {
  const { WrapperRef } = useContext(ModelsContext)

  const scrollY = useMotionValue(0)

  const scrollProgress = useMotionValue(0)

  useEffect(() => {
    const element = WrapperRef.current

    if (element) {
      const updateScrollValue = () => {
        const { scrollTop, scrollHeight, offsetHeight } = element

        const fullScroll = scrollHeight - offsetHeight

        scrollY.set(scrollTop)
        scrollProgress.set(scrollTop / fullScroll)
      }

      element.addEventListener('scroll', updateScrollValue)

      return () => {
        element.addEventListener('scroll', updateScrollValue)
      }
    }
  }, [scrollY, scrollProgress, WrapperRef])

  return { scrollY, scrollProgress }
}