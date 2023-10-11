function createNode(
  {
    tag = 'p',
    classList = null,
    id = null,
    textContent = null,
    href = null,
    src = null,
    data = null,
  },
  parentNode = document.body
) {
  const element = document.createElement(tag);
  if (classList) {
    element.classList.add(...classList);
  }
  if (id) {
    element.id = id;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (href) {
    element.href = href;
  }
  if (src) {
    element.src = src;
  }
  if (data) {
    element.dataset.title = data;
  }

  parentNode.appendChild(element);
  return element;
}
