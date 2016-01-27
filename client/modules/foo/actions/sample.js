export function sampleAction() {
  return (dispatch) => {
    dispatch({
      type: 'FOO:ACTION_SAMPLE'
    });
  };
}
