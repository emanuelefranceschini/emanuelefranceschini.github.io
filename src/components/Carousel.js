import SwipeableViews from 'react-swipeable-views'
import { virtualize } from 'react-swipeable-views-utils'
import { mod } from 'react-swipeable-views-core'

const VirtualizeSwipeableViews = virtualize(SwipeableViews)

const Carousel = ({ slides }) => {
  const slideRenderer = (params) => {
    const { index, key } = params
    return {
      ...slides[mod(index, slides.length)],
      key: key
    }
  }
  return (
    <VirtualizeSwipeableViews
      style={{ padding: '0 10%' }}
      slideStyle={{ padding: '0 8px' }}
      slideRenderer={slideRenderer}
      enableMouseEvents
    />
  )
}

export default Carousel
