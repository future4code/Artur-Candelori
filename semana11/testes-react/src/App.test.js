import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import App from "./App";

describe("Criar um post", () => {
    test("quando o usuário digita e clica em Adicionar, o post aparece", () => {
        const {getByPlaceholderText, getByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        const buttonAdd = getByText(/Adicionar/)

        fireEvent.change(input, {target: {value: 'tarefa teste'}})

        fireEvent.click(buttonAdd)

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

        expect(queryByText('tarefa teste')).toBeNull()
    })
})

describe("Limpa os inputs", () => {
    test("quando o usuário clica em Adicionar, os inputs são limpos", () => {
        const {getByPlaceholderText, getByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        const buttonAdd = getByText(/Adicionar/)

        fireEvent.change(input, {target: {value: 'tarefa teste'}})

        fireEvent.click(buttonAdd)

        expect(input).toHaveValue('')
    })
})

describe("Mensagem 'Nenhum post'", () => {
    test("quando não há posts, aparece a mensagem Nenhum post", () => {
        const {getByText} = render(<App/>)

        expect(getByText('Nenhum post')).toBeInTheDocument()
    })

    test("quando há pelo menos um post, a mensagem some", () => {
        const {getByPlaceholderText, getByText, queryByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        const buttonAdd = getByText(/Adicionar/)

        fireEvent.change(input, {target: {value: 'tarefa teste'}})

        fireEvent.click(buttonAdd)

        expect(queryByText('Nenhum post')).toBeNull()
    })
})

describe("Quantidade de posts", () => {
    test("quando há um post, aparece a mensagem Quantidade de posts: 1", () => {
        const {getByPlaceholderText, getByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        const buttonAdd = getByText(/Adicionar/)

        fireEvent.change(input, {target: {value: 'tarefa teste'}})
        fireEvent.click(buttonAdd)
        
        expect(getByText('Quantidade de posts: 1')).toBeInTheDocument()
    })
    
    test("quando 5 posts, aparece a mensagem Quantidade de posts: 5", () => {
        const {getByPlaceholderText, getByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        const buttonAdd = getByText(/Adicionar/)

        fireEvent.change(input, {target: {value: 'tarefa teste'}})
        fireEvent.click(buttonAdd)
        fireEvent.change(input, {target: {value: 'tarefa teste'}})
        fireEvent.click(buttonAdd)
        fireEvent.change(input, {target: {value: 'tarefa teste'}})
        fireEvent.click(buttonAdd)
        fireEvent.change(input, {target: {value: 'tarefa teste'}})
        fireEvent.click(buttonAdd)
        fireEvent.change(input, {target: {value: 'tarefa teste'}})
        fireEvent.click(buttonAdd)
        
        expect(getByText('Quantidade de posts: 5')).toBeInTheDocument()
    })
})

describe("Mensagem de input vazio", () => {
    test("quando o usuário aperta o botão Adicionar com o input vazio, aparece a mensagem Digite algo", () => {
        const {getByPlaceholderText, getByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        const buttonAdd = getByText(/Adicionar/)

        fireEvent.change(input, {target: {value: ''}})
        fireEvent.click(buttonAdd)
        
        expect(getByText('Digite algo')).toBeInTheDocument()
    })

    test("quando o usuário aperta o botão Adicionar com o input vazio, o post não aparece", () => {
        const {getByPlaceholderText, getByText, queryByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        const buttonAdd = getByText(/Adicionar/)

        fireEvent.change(input, {target: {value: ''}})
        fireEvent.click(buttonAdd)

        expect(queryByText('Quantidade de posts: 1')).toBeNull()
    })
})