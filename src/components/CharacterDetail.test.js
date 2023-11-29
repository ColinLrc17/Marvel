import { render, screen } from '@testing-library/react';
import { CharactersList } from './CharactersList';
import { BrowserRouter } from 'react-router-dom'
import CharacterDetail from './CharacterDetail';

describe('CharactersDetail', () => {
    it('renders the character detail', () => {
        // when 
        const character = {
            id: "1",
            name: "Thor",
            description: "Thor description",
            thumbnail: {
                path: "https://foo.bar",
                extension: "jpg"
            }
        }

        // then
        render(<CharacterDetail character={character} />, { wrapper: BrowserRouter });  

        // expect a heading with the character name
        const h2Element = screen.getByRole('heading', { level: 2, name: character.name });
        expect(h2Element).toBeInTheDocument();

        // expect a paragraph with the character description
        const pElement = screen.getByText(character.description);
        expect(pElement).toBeInTheDocument();

        // expect an image with the character thumbnail
        const imgElement = screen.getByRole('img', { name: character.name });
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', `${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`);
    });

    it('renders the character detail without a thumbnail', () => {
        // when 
        const character = {
            id: "1",
            name: "Thor",
            description: "Thor description",
        }

        // then
        render(<CharacterDetail character={character} />, { wrapper: BrowserRouter });  

        // expect a heading with the character name
        const h2Element = screen.getByRole('heading', { level: 2, name: character.name });
        expect(h2Element).toBeInTheDocument();

        // expect a paragraph with the character description
        const pElement = screen.getByText(character.description);
        expect(pElement).toBeInTheDocument();

        // expect no image
        const imgElement = screen.queryByRole('img', { name: character.name });
        expect(imgElement).not.toBeInTheDocument();
    });

    it('renders nothing when no character is provided', () => {
        // when

        // then
        render(<CharacterDetail />, { wrapper: BrowserRouter });  

        // expect empty h2 element
        const h2Element = screen.queryByRole('heading', { level: 2 });
        expect(h2Element).toBeEmptyDOMElement();        
    });
});