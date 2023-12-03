import React from "react"
import { Tooltip } from "./Tooltip"
import spells from "../data/spells.json"

export class SpellTooltip extends React.PureComponent {
  render() {
    const spell = spells[this.props.id.toString()]
    if (!spell) {
      return (
        <Tooltip fixed {...this.props}>
          Spell not found :(
        </Tooltip>
      )
    }

    return (
      <Tooltip fixed title={spell.name} icon={spell.icon} {...this.props}>
        {spell.rank && <p className="tight">Rank {spell.rank}</p>}
        <p className="yellow">{spell.description}</p>
      </Tooltip>
    )
  }
}
