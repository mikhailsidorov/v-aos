import AOS from 'aos';
import 'aos/dist/aos.css';
import kebabCase from 'lodash/kebabCase';

function setAOSAttrs(el, params) {
  for (const paramName in params) {
    const attributeName = makeAOSAttributeName(paramName);
    el.setAttribute(attributeName, params[paramName]);
  }
}

function removeAOSAttrs(el) {
  if (el.hasAttributes()) {
    [...el.attributes].forEach(({ name }) => {
      if (name.startsWith('data-aos')) {
        el.removeAttribute(name);
      }
    });
  }
}

function isAOSAttribute(attributeName) {
  return attributeName.startsWith('data-aos');
}

function makeAOSAttributeName(string) {
  const preffix = 'data-aos';
  return string === '' ? preffix : `${preffix}-${kebabCase(string)}`;
}

export const directive = {
  bind(el, { arg, value, modifiers }, vnode, oldVnode) {
    setAOSAttrs(el, { ...value, ...modifiers, '': arg });
  },
  update(el, { arg, value, modifiers }, vNode, oldVnode) {
    const params = { ...value, ...modifiers, '': arg };
    const currentAOSAttributes = [...el.attributes].filter(attribute => isAOSAttribute(attribute.name));
    const currentAOSAttributeNames = currentAOSAttributes.map(attribute => attribute.name);

    const newAOSAttributes = {};
    Object.keys(params).forEach(paramName => {
      newAOSAttributes[makeAOSAttributeName(paramName)] = String(params[paramName]);
    });

    currentAOSAttributes.forEach(currentAOSAttribute => {
      if (!Object.keys(newAOSAttributes).includes(currentAOSAttribute.name)) {
        el.removeAttribute(currentAOSAttribute.name);
      } else if (newAOSAttributes[currentAOSAttribute.name] !== currentAOSAttribute.params) {
        el.setAttribute(currentAOSAttribute.name, newAOSAttributes[currentAOSAttribute.name]);
      }
    });

    for (const paramName in params) {
      const attributeName = makeAOSAttributeName(paramName);
      if (!currentAOSAttributeNames.includes(attributeName)) {
        el.setAttribute(attributeName, params[paramName]);
      }
    }

    AOS.refreshHard();
  },

  unbind(el) {
    removeAOSAttrs(el);
  },
};

export default directive;
