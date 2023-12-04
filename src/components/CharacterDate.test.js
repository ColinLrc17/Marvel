import { render, screen } from '@testing-library/react';
import { CharacterDate } from './CharacterDate';

test('renders without crashing', () => {
  const character = { id: 1, name: 'Character 1', modified: new Date() };
  render(<CharacterDate character={character} />);
});

test('renders character modified date correctly', () => {
  const character = { id: 1, name: 'Character 1', modified: new Date() };
  render(<CharacterDate character={character} />);
  const dateElement = screen.getByText(`Last modified: ${format(new Date(character.modified),"MMMM dd , yyyy")}`);
  expect(dateElement).toBeInTheDocument();
});