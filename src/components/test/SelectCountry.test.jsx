import { render, screen } from '@testing-library/react';
import SelectCountry from '../tracker1/SelectCountry';
import { test,expect } from 'vitest';
import React from 'react';

test('dropdown is closed initially', () => {
  (' Renderizar el componente Dropdown',()=>{
    // Renderizar el componente Dropdown
    render(<SelectCountry/>);
  
    //está cerrado inicialmente
    const dropdownList = screen.queryByRole('list');
    expect(dropdownList).not.toBeInTheDocument();

    //no contiene elementos visibles
  const dropdownItems = screen.queryAllByRole('listitem');
  expect(dropdownItems).toHaveLength(0);

  //no hay opciones seleccionadas
  const selectedOption = screen.queryByRole('option', { selected: true });
  expect(selectedOption).not.toBeInTheDocument();
  
})
  });