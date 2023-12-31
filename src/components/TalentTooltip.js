import React from "react"
import { Tooltip } from "./Tooltip"
import spells from "../data/spells.json"

export class TalentTooltip extends React.PureComponent {
  render() {
    const { talent, points, errors } = this.props
    const currentSpellId = talent.ranks[Math.max(0, points - 1)]
    const nextSpellId =
      points > 0 &&
      points < talent.ranks.length &&
      talent.ranks[Math.max(0, points)]

    const currentSpell = spells[currentSpellId.toString()]
    const nextSpell = spells[nextSpellId.toString()]

    const title = (currentSpell || nextSpell).name
    const rank = (currentSpell || nextSpell).rank
    const description = (currentSpell || nextSpell).description

    return (
      <Tooltip fixed title={title} icon={false}>
        {rank && (
          <p className="tight">
            Rank {points}/{talent.ranks.length}
          </p>
        )}
        {errors &&
          errors.split("_").map((err, index) => (
            <p key={index} className="tight" style={{ color: "red" }}>
              {err}
            </p>
          ))}
        <p className="yellow">{description}</p>

        {nextSpell && (
          <React.Fragment>
            <p className="tight">Next rank:</p>
            <p className="yellow">{nextSpell.description}</p>
          </React.Fragment>
        )}

        {this.props.children}
      </Tooltip>
    )
  }
}
