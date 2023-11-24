import {render, screen, waitFor} from '@testing-library/react';
import ListProducts from '../components/ListProducts';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import axios from 'axios';
import { Product } from '../model/Product';

jest.mock("axios");

test("ListProducts", async () => {

    (axios.get as jest.Mock).mockResolvedValue({data: 
                    [new Product(1, "p1", 1000, ""), new Product(2, "p2", 2000, "")]});

    render(<Provider store={store}> <BrowserRouter> <ListProducts/> </BrowserRouter></Provider>)
    

    await waitFor(() => {

        expect(screen.getByText("List Products")).toBeTruthy();
        let allProducts = screen.getAllByTestId("product");
        expect(allProducts.length).toBe(2);

    })

    
})