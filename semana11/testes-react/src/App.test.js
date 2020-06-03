import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import App from "./App";

describe("Criar um post", () => {
    test("quando o usuário digita e clica em Adicionar, o post aparece", () => {
        const {getByPlaceholderText, getByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        const button = getByText(/Adicionar/)

        fireEvent.change(input, {target: {value: 'tarefa teste'}})

        fireEvent.click(button)

        expect(getByText(/tarefa teste/))
    })
})

describe("Curtir um post", () => {
    test("quando o usuário cria um post, aparece um botão Curtir", () => {
        const {getByPlaceholderText, getByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        const buttonAdd = getByText(/Adicionar/)

        fireEvent.change(input, {target: {value: 'tarefa teste'}})
        fireEvent.click(buttonAdd)

        expect(getByText(/Curtir/))
    })
    
    test("quando o usuário clica em Curtir, o botão muda para Descurtir", () => {
        const {getByPlaceholderText, getByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        const buttonAdd = getByText(/Adicionar/)
        

        fireEvent.change(input, {target: {value: 'tarefa teste'}})
        fireEvent.click(buttonAdd)

        const buttonLike = getByText(/Curtir/)

        fireEvent.click(buttonLike)

        expect(getByText(/Descurtir/))
    })
})

describe("Apagar um post", () => {
    test("quando o usuário cria um post, aparece um botão Apagar", () => {
        const {getByPlaceholderText, getByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        const buttonAdd = getByText(/Adicionar/)

        fireEvent.change(input, {target: {value: 'tarefa teste'}})
        fireEvent.click(buttonAdd)

        expect(getByText(/Apagar/))
    })
    
    test("quando o usuário clica em Apagar, o post desaparece", () => {
        const {getByPlaceholderText, getByText, queryByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        const buttonAdd = getByText(/Adicionar/)

        fireEvent.change(input, {target: {value: 'tarefa teste'}})
        fireEvent.click(buttonAdd)

        const buttonDelete = getByText(/Apagar/)

        fireEvent.click(buttonDelete)

        expect(queryByText('tarefa teste')).toBeNull
    })
})