import Immutable from 'immutable';
const defaultState = Immutable.Map(
  {
    bar: 10,
    baz: 20
  }
);

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'FOO:ACTION_SAMPLE':
      return state.set('pop', 30);
    default :
      return state;
  }
};
