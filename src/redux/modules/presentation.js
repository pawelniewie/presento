import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const NEXT_SLIDE = 'NEXT_SLIDE'
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE'
export const USE_SINGLE_RENDERER = 'USE_SINGLE_RENDERER'
export const USE_BOOKLET_RENDERER = 'USE_BOOKLET_RENDERER'
export const USE_PREVIEW_RENDERER = 'USE_PREVIEW_RENDERER'

// ------------------------------------
// Actions
// ------------------------------------
export const increment = createAction(COUNTER_INCREMENT, (value = 1) => value)

export const nextSlide = createAction(NEXT_SLIDE)

export const previousSlide = createAction(PREVIOUS_SLIDE)

export const useSingleRenderer = createAction(USE_SINGLE_RENDERER)

export const useBookletRenderer = createAction(USE_BOOKLET_RENDERER)

export const usePreviewRenderer = createAction(USE_PREVIEW_RENDERER)

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
export const doubleAsync = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(increment(getState().counter))
    }, 1000)
  }
}

export const actions = {
  increment,
  doubleAsync,
  nextSlide,
  previousSlide,
  useSingleRenderer,
  useBookletRenderer,
  usePreviewRenderer
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [COUNTER_INCREMENT]: (state, { payload }) => state + payload,
  [NEXT_SLIDE]: (state, { payload }) => state,
  [PREVIOUS_SLIDE]: (state, { payload }) => state,
  [USE_SINGLE_RENDERER]: (state, { payload }) => Object.assign({}, state, {renderer: 'single'}),
  [USE_BOOKLET_RENDERER]: (state, { payload }) => Object.assign({}, state, {renderer: 'booklet'}),
  [USE_PREVIEW_RENDERER]: (state, { payload }) => Object.assign({}, state, {renderer: 'preview'})
}, {
  renderer: 'booklet',
  slideIndex: 0,
  allSlides: [],
  slideWidth: 1280,
  slideHeight: 768
})
