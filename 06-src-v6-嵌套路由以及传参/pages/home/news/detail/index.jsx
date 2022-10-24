import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

const details = [
  { id: '1', content: '今天天气不错' },
  { id: '2', content: '祖国繁荣发展' },
  { id: '3', content: '社会和谐' },
];

function propsRouteWithRouter(NewsDetail) {
  return (props) => {
    let params = useParams();
    return <NewsDetail {...props} params={params} />;
  };
}

class NewsDetail extends Component {
  render() {
    const { id, title } = this.props.params;
    let detail = details.find(detail => detail.id === id);
    return (
      <>
        <hr />
        <div>
          <span>{id}</span>
          <br />
          <span>{title}</span>
          <br />
          <span>{detail.content}</span>
        </div>
      </>
    );
  }
}

export default propsRouteWithRouter(NewsDetail);
