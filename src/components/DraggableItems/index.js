import React from "react";

class DraggableItems extends React.PureComponent {
  state = {
    items: this.props.children,
  };

  onDragStart = (e, index) => {
    this.draggedItem = this.state.items[index];

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOver = (index) => {
    const draggedOverItem = this.state.items[index];

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = this.state.items.filter((item) => item !== this.draggedItem);

    // add the dragged item after the dragged over item
    items.splice(index, 0, this.draggedItem);

    this.setState({ items });
  };

  onDragEnd = (e) => {
    this.draggedIdx = null;
  };

  render() {
    const direction = this.props?.horizontaly ? "row" : "column";
    return (
      <div style={{ display: "flex", flexDirection: direction }}>
        {this.state.items.map((item, idx) => (
          <div key={item} onDragOver={() => this.onDragOver(idx)}>
            <div
              draggable
              onDragStart={(e) => this.onDragStart(e, idx)}
              onDragEnd={this.onDragEnd}>
              <span className="content">{item}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default DraggableItems;
