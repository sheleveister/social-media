import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchUserData } from "../../store/modules/user/user.actions";
import { AppState } from '../../store/rootReducer';



const mapStateToProps = (state: AppState) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUser: (id: number) => dispatch(fetchUserData(id)),
});


class User extends React.Component<any, any> {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser(1);
  }

  render() {
    return (
      <div>User component</div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);