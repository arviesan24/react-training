import React from 'react'
class Result extends React.Component {
  render() {
    const allSchools = this.props.schools.map(entry =>
    <div>{entry.maxAge} - Needs Aircon? {entry.needsAircon ? "Yes" : "No"} - ParentControl Available? {entry.parentControl ? "Yes" : "No"}</div>
    )
    return (
      <div>
        {allSchools ? allSchools : []}
      </div>
    )
  }
}
export default Result;
