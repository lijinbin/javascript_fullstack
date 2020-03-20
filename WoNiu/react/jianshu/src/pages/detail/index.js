import React, { Component } from 'react'
import {
  DetailWrapper,
  DetailHeader,
  DetailContent
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
class Detail extends Component {


  componentDidMount(){
    this.props.getDetail(this.props.match.params.id)
  }

  render() {
    // console.log(this.props.match.params.id)
    return (
      <DetailWrapper>
        <DetailHeader>{this.props.title}</DetailHeader>
        <DetailContent dangerouslySetInnerHTML={{ __html: this.props.content }}>
        </DetailContent>
      </DetailWrapper>
    );
  }
}


const mapState = (state) => ({
  title: state.detail.get('title'),
  content: state.detail.get('content')
})

const mapDispatch = (dispatch) => {
  return {
    getDetail(id) {
      const action = actionCreators.getDetail(id)
      action(dispatch)
    }
  } 
}
export default connect(mapState, mapDispatch)(Detail)