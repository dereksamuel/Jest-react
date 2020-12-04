import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer.jsx';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render del componente footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del título', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
  test('Render de la copia', () => {
    expect(footer.find('.Footer-copy').text()).toEqual('Todos los Izquierdos Reservados');
  });
});

describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente Footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
