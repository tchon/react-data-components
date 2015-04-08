'use strict';

var React = require('react');

class PageSize {

  constructor() {
    this.onClick = this.onClick.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  onClick(e) {
    this.props.onChange(e.target.textContent);
  }

  isSelected(size) {
    //console.log('>> this.props', this.props);
    return size == 5 ? 'selected' : 'inactive';
  }

  render() {
    var self = this;
    var {id, label, options, value} = this.props;
    var mappedOpts =
      options.map((size) => <span><a className={this.isSelected(size)}>{size}</a></span>);

    return (
      <div className="row">
        <div className="col-xs-12 ns-page-items-size">
          <div className="ns-inline-block pull-left ns-page-items">
            Items 1 &ndash; 15 of 17
            <span className="ns-spacer-horizontal"></span>
          </div>

          <div className="ns-inline ns-page-size-width">
            <div className="ns-page-size-text pull-left">
              <span className="ns-pipe-separator">|</span>
              <span className="ns-spacer-horizontal"></span>
              <span className="ns-label">Show:</span>
              <span className="ns-spacer-horizontal"></span>
            </div>
            <ul className="nav nav-pills pull-left">
              <li role="presentation" className="active">
                <a className="ns-page-size-option" href="#">5</a>
              </li>
              <li role="presentation" className="">
                <a className="ns-page-size-option" href="#">10</a>
              </li>
              <li role="presentation" className="">
                <a className="ns-page-size-option" href="#">20</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = PageSize;
