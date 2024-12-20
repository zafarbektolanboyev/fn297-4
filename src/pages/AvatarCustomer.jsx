import React, { useState } from "react";

function AvatarCustomizer() {
  const [widgets, setWidgets] = useState([]);

  function handleOnDrag(e, widgetType) {
    e.dataTransfer.setData("widgetType", widgetType);
  }

  function handleOnDrop(e) {
    const widgetType = e.dataTransfer.getData("widgetType");
    if (widgetType) {
      setWidgets((prevWidgets) => [...prevWidgets, widgetType]); 
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Drag and Drop Avatar Customizer</h2>
      <div style={{ marginBottom: "20px" }}>
        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget A")}
          style={{
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            cursor: "grab",
            backgroundColor: "#f9f9f9",
          }}
        >
          Widget A
        </div>

        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget B")}
          style={{
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            cursor: "grab",
            backgroundColor: "#f9f9f9",
          }}
        >
          Widget B
        </div>

        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget C")}
          style={{
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            cursor: "grab",
            backgroundColor: "#f9f9f9",
          }}
        >
          Widget C
        </div>
      </div>
      <div
        className="page"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
        style={{
          width: "100%",
          minHeight: "200px",
          border: "2px dashed #aaa",
          backgroundColor: "#f0f0f0",
          padding: "10px",
        }}
      >
        <h3>Drop Widgets Here</h3>
        {widgets.map((widget, index) => (
          <div
            className="dropped-widget"
            key={index}
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ddd",
              backgroundColor: "#fff",
            }}
          >
            {widget}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvatarCustomizer;
