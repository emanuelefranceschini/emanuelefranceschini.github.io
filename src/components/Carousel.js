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
      style={{ padding: '16px 10%', cursor: 'grab' }}
      slideStyle={{ padding: '0 8px', height: 'unset', overflow: 'hidden' }}
      slideRenderer={slideRenderer}
      enableMouseEvents
    />
  )
}

export default Carousel
