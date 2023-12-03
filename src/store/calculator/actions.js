import {
  SET_CLASS,
  ADD_POINT,
  REMOVE_POINT,
  SET_POINTS,
  RESET_SPEC
} from "./types"

export const setClass = (classId, points) => ({
  type: SET_CLASS,
  classId,
  points
})

export const addPoint = talentId => ({
  type: ADD_POINT,
  talentId
})

export const removePoint = talentId => ({
  type: REMOVE_POINT,
  talentId
})

export const setPoints = points => ({
  type: SET_POINTS,
  points
})

export const resetSpec = specId => ({
  type: RESET_SPEC,
  specId
})
