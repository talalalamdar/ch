
import React from 'react';
import '../styles/pagination.css';

interface DataProp {
  key: string,
  data: Array<ChannelType>,
  itemsPerPage: number,
  currentPage: number,
  onPageChange: (page: number) => void,
}

export type ChannelType = {
  label: string;
  key: string;
  country: string;
}

type stateType = {
  maxPage: number;
}

class Pagination extends React.Component<DataProp, {}> {
  state: stateType = {
    maxPage: Math.ceil(this.props.data.length / this.props.itemsPerPage)
  };

  static getDerivedStateFromProps(nextProps: DataProp) {
    return {
      maxPage: Math.ceil(nextProps.data.length / nextProps.itemsPerPage),
    }
  }

  next = () => {
    const page = Math.min(this.props.currentPage + 1, this.state.maxPage);
    this.props.onPageChange(page);
  }

  prev = () => {
    const page = Math.max(this.props.currentPage - 1, 1);
    this.props.onPageChange(page);
  }

  paginationItems = () => {
    const items: Array<JSX.Element> = []
    for (let i = 1; i <= this.state.maxPage; i++) {
      items.push(
        <div key={i} className={`pagination__item ${i === this.props.currentPage ? '_is_selected' : ''}`} onClick={this.handleItemClick}>
          { i }
        </div>
      )
    }

    return items;
  }

  handleItemClick = (event: React.MouseEvent<HTMLElement>) => {
    this.props.onPageChange(Number(event.currentTarget.innerText));
  }

  render() {
    return (
      <div className="pagination">
        <div className="pagination__wrapper">
          <span onClick={this.prev} className="pagination__arrow">&larr;</span>

          {this.paginationItems()}

          <span onClick={this.next} className="pagination__arrow">&rarr;</span>
        </div>
      </div>
    );
  }
}

export default Pagination;
