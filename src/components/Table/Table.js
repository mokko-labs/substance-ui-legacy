import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import Loader from '../Misc/Loader';
import theme from '../Theme/theme';

const TableWrap = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    tr {
      border-bottom: 1px solid #DADADA !important;
      background: #f7f7f7;
    }
    td {
      font-family: ${props => props.theme.fonts.heading || 'sans-serif'};
      font-weight: bold;
      color:${props => props.color ? props.color : props.theme.colors.heading || '#000'};
      padding: 20px 10px;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #DADADA;

      &:last-child {
        border: none !important;
      }
    }
    td {
      padding: 20px 10px;
      font-family: ${props => props.theme.fonts.paragraph || 'sans-serif'};
      color:${props => props.color ? props.color : props.theme.colors.paragraph || '#000'};
    }
  }

  tfoot {
    tr {
      position: relative;
      height: 70px;
    }
  }


  .emptyCont {
    width:100%;
    text-align: center;
    margin: 100px 0px 0px 0px;
    p {
      margin: 0;
      opacity: 0.6;
      font-size: 14px;
    }
  }
`;

const TableContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  padding-bottom: 80px;
  .loading-container {
    position: absolute;
    width:100%;
    height:90%;
    z-index: 3;
    background: rgba(255,255,255,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pagination {
      list-style: none;
      float:right;
      bottom: 0;
      right:0;
      position: absolute;
      display: inline-block;
      margin: 20px 20px 20px 0px;
      li {
        float:left;
        margin: 4px;

        &.active a {
          background: ${props => props.theme.colors.primary};
          border-color: ${props => props.theme.colors.primary};
          color:white;
        }
        &.disabled {
          opacity: 0.3;
        }
      }
      a {
        display: inline-block;
        cursor: pointer;
        color:black;
        border:1px solid #C2C2C2;
        font-size: 13px;
        border-radius: 3px;
        padding:5px 10px;
      }
  }
`;


TableWrap.defaultProps = {
  theme: theme
};
TableContainer.defaultProps = {
  theme: theme
};

const propTypes = {};

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
        endPage = 5;
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



class Table extends React.Component {

  constructor() {
    super();
    this.state = {
      pageOfItems: [],
      showEmpty: false,
      isLoading: true
    };
    this.onChangePage = this.onChangePage.bind(this);
  }


  componentWillReceiveProps(newProps) {
    if (this.props.dataSource !== newProps.dataSource)  {
      this.setState({
        isLoading: false,
        showEmpty: newProps.dataSource.length === 0 ? true : false
      })
    }
  }

  onChangePage(pageOfItems) {
    this.setState({
      isLoading: true
    })
    setTimeout(()=>{
      this.setState({
        pageOfItems: pageOfItems,
        isLoading: false
      });
    }, 500)
  }


  render() {
    return (
      <TableContainer>
        {(this.state.isLoading && !this.state.showEmpty) ? (
          <div className="loading-container">
            {this.props.loadingComponent ? this.props.loadingComponent : (<Loader />)}
          </div>
        ) : null}
        <TableWrap enableHover={this.props.enableHover} pagination={this.props.pagination === false ? false : true}>
          {this.props.headerComponent ? (
            <thead>
              {this.props.headerComponent()}
            </thead>
          ) : null }
          <tbody>
            { this.props.pagination === false ? (
              // List without pagination
              null
            ) :
              // List without pagination
              this.state.pageOfItems.map((item, index) => this.props.rowComponent(item, index)
              )
            }
          </tbody>
        </TableWrap>
          <Pagination
            handleOnChangePage={this.onChangePage}
            items={this.props.dataSource}
            itemsPerPage={this.props.itemsPerPage}
          />
          <div style={{ 'clear': 'both' }} />
      </TableContainer>
    );
  }

};


export default Table;
