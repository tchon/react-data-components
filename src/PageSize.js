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
      <ul class="breadcrumb">
        <li><a href="#"></a></li>
        <li><a href="#">Show:</a></li>
        <ul className="nav nav-pills">
          <li role="presentation" class="disabled"><a href="#">5</a></li>
          <li role="presentation" class="disabled"><a href="#">10</a></li>
          <li role="presentation" class="disabled"><a href="#">20</a></li>
        </ul>
      </ul>
    );
  }

}

module.exports = PageSize;

//      <div>
//        <div className="vertical-split">|</div>
//        <label htmlFor={id}>{label}</label>
//        {options.map(function(size) {
//          return <a role="button" href="#" className={self.isSelected(size)} onClick={self.onClick}><span className="fa">{size}</span></a>;
//        })}
//      </div>
