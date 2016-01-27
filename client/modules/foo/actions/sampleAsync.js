import qwest from 'qwest';
import config from 'config';

export function sampleAsyncAction(value) {
  return (dispatch) => {
    dispatch({
      type: 'FOO:ASYNC_ACTION_START'
    });
    const url = `${config.server.url}/foo?value=${value}`;
    qwest
      .get(url)
      .then(
        (xhr, response) => {
          console.log(response);
          if (xhr.status !== 200) {
            return dispatch({
              type: 'FOO:ASYNC_ACTION_FAILED'
            });
          }
          // Manage the response
          if (response.success === true) {
            dispatch({
              type: 'FOO:ASYNC_ACTION_SUCCESS',
              val1: response.val1,
              val2: response.val2
            });
          }
        }
      );
  };
}
