import React from "react";


class Page extends React.Component {
  state = { editing: false };

  updateEditState = () => {
    this.setState(props => ({
      editing: !props.editing
    }));
  };

  render() {
    const btnClass = this.state.editing ? "editButtonActive" : "editButton";
    const editing = this.state.editing;
    return (
      <div>
        <button className={btnClass} onClick={this.updateEditState}>
          Edit
        </button>
    
      </div>
    );
  }
}

export default Page;
