const modalRender = (modal, componentJSX) => {
  if (modal) {
    return modal;
  } else {
    return componentJSX;
  }
};

export default modalRender;
