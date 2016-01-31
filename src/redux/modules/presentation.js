import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const NEXT_SLIDE = 'NEXT_SLIDE'
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE'
export const USE_SINGLE_RENDERER = 'USE_SINGLE_RENDERER'
export const USE_BOOKLET_RENDERER = 'USE_BOOKLET_RENDERER'
export const USE_PREVIEW_RENDERER = 'USE_PREVIEW_RENDERER'
export const START_PRESENTATION = 'START_PRESENTATION'
export const STOP_PRESENTATION = 'STOP_PRESENTATION'

// ------------------------------------
// Actions
// ------------------------------------
export const startPresentation = createAction(START_PRESENTATION, (slides = []) => slides)

export const stopPresentation = createAction(STOP_PRESENTATION)

export const nextSlide = createAction(NEXT_SLIDE)

export const previousSlide = createAction(PREVIOUS_SLIDE)

export const useSingleRenderer = createAction(USE_SINGLE_RENDERER)

export const useBookletRenderer = createAction(USE_BOOKLET_RENDERER)

export const usePreviewRenderer = createAction(USE_PREVIEW_RENDERER)

export const actions = {
  nextSlide,
  previousSlide,
  useSingleRenderer,
  useBookletRenderer,
  usePreviewRenderer,
  startPresentation,
  stopPresentation
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [NEXT_SLIDE]: (state, { payload }) => {
    var nextSlide = state.currentIndex + 1
    if (nextSlide >= state.allSlides.length) {
      nextSlide = 0
    }
    return Object.assign({}, state, {currentSlide: state.allSlides[nextSlide], currentIndex: nextSlide})
  },
  [PREVIOUS_SLIDE]: (state, { payload }) => {
    var previousSlide = state.currentIndex - 1
    if (previousSlide < 0) {
      previousSlide = state.allSlides.length - 1
    }
    return Object.assign({}, state, {currentSlide: state.allSlides[previousSlide], currentIndex: previousSlide})
  },
  [USE_SINGLE_RENDERER]: (state, { payload }) => Object.assign({}, state, {renderer: 'single'}),
  [USE_BOOKLET_RENDERER]: (state, { payload }) => Object.assign({}, state, {renderer: 'booklet'}),
  [USE_PREVIEW_RENDERER]: (state, { payload }) => Object.assign({}, state, {renderer: 'preview'}),
  [STOP_PRESENTATION]: (state, { payload }) => Object.assign({}, state, {allSlides: [], currentSlide: null, currentIndex: 0}),
  [START_PRESENTATION]: (state, { payload }) => Object.assign({}, state, {allSlides: payload.slides, currentSlide: payload.slides[0], currentIndex: 0})
}, {
  renderer: 'booklet',
  currentIndex: 0,
  currentSlide: null,
  allSlides: [],
  slideWidth: 1280,
  slideHeight: 768
})
