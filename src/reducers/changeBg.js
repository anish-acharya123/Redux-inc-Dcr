const InitialState = null;
const changeBackground = (state = InitialState, action) => {
  switch (action.type) {
    case "Black":
      return (state = document.body.style.backgroundColor = "Black");
    case "White":
      return (state = document.body.style.backgroundColor = "White");
    default:
      return state;
  }
};

export default changeBackground;
