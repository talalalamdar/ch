import React from 'react';
import Channel from './Channel';
import companyPlaceholderLogo from '../assets/companyLogo-placeholder.jpeg';
import '../styles/list.css';

interface ListProp {
  data: Array<ChannelType>,
  currentPage: number,
}

type ChannelType = {
  label: string;
  key: string;
  country: string;
}

class List extends React.Component<ListProp, {}> {

  channels() {
    const last: number = this.props.currentPage * 15;
    const start: number = last - 14;

    const range: Array<number> = Array(last - start + 1).fill(0).map((e, i: number) => i + start);

    return this.props.data.map((channel: ChannelType, index: number) => {
      const { label, key } = channel;

      return range.includes(index + 1) &&
        <Channel companyLogo={companyPlaceholderLogo} key={key + index} label={label} />
    })
  }

  render() {
    return (
      <div className="list">
        {this.channels()}
      </div>
    );
  }
}

export default List;
