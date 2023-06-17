import React from 'react';

class ClassStatement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        {this.props.entry.index} - {this.props.entry.value} <button onClick={() => this.props.removeEntry(this.props.entry.index)}>Remove Entry</button>
      </div>
    );
  }
}

export default ClassStatement;