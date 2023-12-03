import { Map } from "immutable"
import {
  SET_CLASS,
  ADD_POINT,
  REMOVE_POINT,
  SET_POINTS,
  RESET_SPEC
} from "./types"
import {
  canLearnTalent,
  canUnlearnTalent,
  encodeKnownTalents
} from "../../lib/tree"
import { talentsById, talentsBySpec } from "../../data/talents"

const initialState = {
  classId: null,
  points: Map(),
  pointsEncoded: ""
}

export default function(state = initialState, action) {
  const { classId, points } = state

  switch (action.type) {
    case SET_CLASS: {
      if (classId === action.classId) {
        return state
      }
      return {
        ...state,
        classId: action.classId,
        points: action.points || Map(),
        pointsEncoded: ""
      }
    }

    case ADD_POINT: {
      const { talentId } = action
      const talent = talentsById[talentId]
      if (!canLearnTalent(points, talent)) {
        return state
      }
      const nextPoints = points.set(talentId, points.get(talentId, 0) + 1)
      return {
        ...state,
        points: nextPoints,
        pointsEncoded: encodeKnownTalents(nextPoints, classId)
      }
    }

    case REMOVE_POINT: {
      const { talentId } = action
      const talent = talentsById[talentId]
      if (!canUnlearnTalent(points, talent)) {
        return state
      }
      const nextPoints = points.set(talentId, points.get(talentId, 1) - 1)
      return {
        ...state,
        points: nextPoints,
        pointsEncoded: encodeKnownTalents(nextPoints, classId)
      }
    }

    case SET_POINTS: {
      if (points.equals(action.points)) {
        return state
      }
      return {
        ...state,
        points: action.points
      }
    }

    case RESET_SPEC: {
      const resetIds = Object.values(talentsBySpec[action.specId]).map(
        t => t.id
      )
      const nextPoints = points.filter((_, id) => resetIds.indexOf(id) === -1)
      return {
        ...state,
        points: nextPoints
      }
    }

    default:
      return state
  }
}
