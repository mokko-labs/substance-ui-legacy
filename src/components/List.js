import React from 'react';
import styled, { withTheme } from 'styled-components';
import _ from 'lodash';


const ListWrap = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  &>li {
    border-bottom: 1px solid #DADADA;
    &:first-child {
      border-top: 1px solid #DADADA;
    }
  }

  .pagination {
      list-style: none;
      float:right;
      display: inline-block;
      margin: 20px 20px 20px 0px;
      li {
        float:left;
        margin: 2px;

        &.disabled {
          display: none;
        }

        &.active a {
          background: ${props => props.theme.colors.primary};
          color:white;
        }
      }
      a {
        display: inline-block;
        cursor: pointer;
        color:black;
        border:1px solid #C2C2C2;
        font-size: 13px;
        border-radius: 3px;
        padding:6px 8px;
      }
  }

`;


const propTypes = {

};

const defaultProps = {
  initialPage: 1
};

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    var items = this.props.items;
    var pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page, this.props.itemsPerPage || 10);

    // get new page of items from items array
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager: pager });

    // call change page function in parent component
    this.props.handleOnChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 10;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    };

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    var pages = _.range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  render() {
    var pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    return (
      <ul className="pagination">
        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => this.setPage(1)}>First</a>
        </li>
        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
        </li>
        {pager.pages.map((page, index) => {
          return (
            <li
              className={pager.currentPage === page ? 'active' : ''}
              key={index}
            >
              <a onClick={() => this.setPage(page)}>{page}</a>
            </li>
          )
        }
        )}
        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
        </li>
        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
        </li>
      </ul>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;



class List extends React.Component {

  constructor() {
    super();
    this.state = {
      exampleItems: [],
      pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <ListWrap>
        {this.ListRender}
        {this.state.pageOfItems.map((item, index) =>
          <li key={index}>{this.props.listComponent(item, index)}</li>
        )}
        <Pagination
          handleOnChangePage={this.onChangePage}
          itemsPerPage={this.props.itemsPerPage}
          items={this.props.dataSource}
        />
      </ListWrap>
    );
  }


};

List.propTypes = {

};


export default withTheme(List);
