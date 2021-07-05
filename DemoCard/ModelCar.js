import React, { Component } from "react";

export default class ModelCar extends Component {
  render() {
    let { sp } = this.props;
    return (
      // em click thì log kiểm tra props qua rồi mà dả
      <div>
        {/* Button to Open the Modal */}
        {/* The Modal */}
        <div className="modal fade" id={`myModal${sp.id}`}>
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">{sp.name}</h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <img style={{ width: "100%" }} src={sp.img}></img>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
