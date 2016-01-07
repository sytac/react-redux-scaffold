import cookie from 'react-cookie';

export function sampleAction() {
  return (dispatch) => {
    dispatch({
      type: 'FOO:ACTION_SAMPLE'
    });
  };
}
