'use strict';

var React = require('react');
var Table = require('./Table');
var Pagination = require('./Pagination');
var PageSize = require('./PageSize');
var SearchField = require('./SearchField');

var DataMixin = require('./DataMixin');

var DataTable = React.createClass({

  mixins: [ DataMixin ],

  render() {
    var page = this.buildPage();

    return (
      <div className={this.props.className}>
        <div className="row"></div>
        <div className="row">
          <div className="col-xs-4">
            <SearchField
              id="search-field"
              label="Search:"
              value={this.state.filterValues.globalSearch}
              onChange={this.onFilter.bind(this, 'globalSearch')}
            />
          </div>
        </div>
        <Table
          className="table table-bordered"
          dataArray={page.data}
          columns={this.props.columns}
          keys={this.props.keys}
          sortBy={this.state.sortBy}
          onSort={this.onSort}
        />
        <div className="row">
          <div className="col-xs-6">
            <PageSize
              id="page-size"
              className="page-size pull-left"
              label="Show:"
              value={this.state.pageLength}
              max={this.props.pageLengthMax}
              options={this.props.pageLengthOptions}
              onChange={this.onPageLengthChange}
            />
          </div>
          <div className="col-xs-6">
            <Pagination
              className="pagination pagination-sm pull-right"
              currentPage={page.currentPage}
              totalPages={page.totalPages}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DataTable;
