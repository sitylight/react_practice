import React, { Component } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import qs from 'qs';

const details = [
  { id: '1', content: '头条内容1' },
  { id: '2', content: '头条内容2' },
  { id: '3', content: '头条内容3' },
];

function withRouter() {
  return (props) => {
    console.log('hot detail router function start', props)
    let params = useParams();
    const search = qs.parse(useLocation().search.slice(1));
    const state = useLocation().state;
    // console.log('params: ', useParams())
    console.log('location: ', useLocation())
    // console.log('state: ', state)
    params = Object.assign(params, search, state) || {};
    return <HotDetail {...props} params={params} />;
  };
}

class HotDetail extends Component {
  constructor(props) {
    super(props)
    console.log('hot detail constructor start')
  }
  render() {
    const { id, title } = this.props.params;
    let detail = details.find((detail) => detail.id === id);
    return (
      <>
        <hr />
        <div>
          {detail !== undefined ? (
            <>
              <span>{id}</span>
              <br />
              <span>{title}</span>
              <br />
              <span>{detail.content}</span>
            </>
          ) : (
            ''
          )}
        </div>
      </>
    );
  }
}

export default withRouter();
