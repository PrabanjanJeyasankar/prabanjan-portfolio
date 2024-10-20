import Scrollbar from 'smooth-scrollbar'
import { useEffect } from 'react'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

const overscrollOptions = {
    enable: true,
    effect: 'bounce',
    damping: 0.8,
    maxOverscroll: 150,
    glowColor: '#fff',
}

const options = {
    damping: 0.07,
    plugins: {
        overscroll: { ...overscrollOptions },
    },
}

const Scroll = () => {
    useEffect(() => {
        const scrollbar = Scrollbar.init(document.body, options)

        return () => {
            if (Scrollbar) Scrollbar.destroy(scrollbar)
        }
    }, [])

    return null
}

export default Scroll
