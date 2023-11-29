import { render, screen } from '@testing-library/react';
import CharactersPage from './CharactersPage';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

const characters = [
    {
        id: "1",
        name: "Thor"
    }
];

// mock the useLoaderData hook, so that we can test the CharactersPage component
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'), // use actual for all non-hook parts
    useLoaderData: () => {
        return characters;
    },
}));

describe('CharactersPage', () => {

    test('render CharactersPage component with default order and orderBy', () => {
        // when

        // then
        render(
            <MemoryRouter initialEntries={[`/`]} >
                <CharactersPage />
            </MemoryRouter>
        );

        // expect the document title to be "Marvel App"
        expect(document.title).toBe('Marvel App');


        // expect the heading 'Marvel Characters' to be in the document
        const h2Element = screen.getByRole('heading', { level: 2, name: "Marvel Characters" });
        expect(h2Element).toBeInTheDocument();

        // expect the character Thor to be in the document
        const thorElement = screen.getByText(characters[0].name);
        expect(thorElement).toBeInTheDocument();

        // expect the number of characters to be in the document
        const numberOfCharactersElement = screen.getByText(`There is ${characters.length} character`);
        expect(numberOfCharactersElement).toBeInTheDocument();
    });

    test('render CharactersPage component with order and orderBy from search params', async () => {
        // when
        const order = 'desc';
        const orderBy = 'modified';

        // then
        render(
            <MemoryRouter initialEntries={[`/?order=${order}&orderBy=${orderBy}`]} >
                <CharactersPage />
            </MemoryRouter>
        );

        // expect the document title to be "Marvel App"
        expect(document.title).toBe('Marvel App');

        // expect the heading 'Marvel Characters' to be in the document
        const h2Element = screen.getByRole('heading', { level: 2, name: "Marvel Characters" });
        expect(h2Element).toBeInTheDocument();

        // expect the character Thor to be in the document
        const thorElement = screen.getByText(characters[0].name);
        expect(thorElement).toBeInTheDocument();

        // expect the number of characters to be in the document
        const numberOfCharactersElement = screen.getByText(`There is ${characters.length} character`);
        expect(numberOfCharactersElement).toBeInTheDocument();


        const orderSelect = screen.getByTestId('order');
        expect(orderSelect).toHaveValue(order);

        // expect the orderBy select to have the value from the search params
        const orderBySelect = screen.getByTestId('orderBy');
        expect(orderBySelect).toHaveValue(orderBy);
    });

    test('render CharactersPage component with order and orderBy when the select changes', async () => {
        // when
        const order = 'desc';
        const orderBy = 'modified';

        // then
        render(
            <MemoryRouter initialEntries={[`/`]} >
                <CharactersPage />
            </MemoryRouter>
        );

        // when
        await act(() => {
            // change the order select to desc
            const orderSelect = screen.getByTestId('order');
            orderSelect.value = order;
            orderSelect.dispatchEvent(new Event('change', { bubbles: true }));

            // then
            expect(orderSelect).toHaveValue(order);

            // change the orderBy select to modified
            const orderBySelect = screen.getByTestId('orderBy');
            orderBySelect.value = orderBy;
            orderBySelect.dispatchEvent(new Event('change', { bubbles: true }));

            // then
            expect(orderBySelect).toHaveValue(orderBy);
        });
    });
});
