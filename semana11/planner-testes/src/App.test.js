import React from 'react';
import { render, wait } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import App from './App';

axios.get = jest.fn().mockResolvedValue({data:[]})
axios.post = jest.fn().mockResolvedValue()

describe('Renderização inicial', () => {
  test('Renderiza tudo corretamente', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "text": "teste",
          "day": "seg",
          "id": "mHzFUdoGN7OWm14WSHXa"
        }
      ]
    })
    
    const {
      getByPlaceholderText, 
      getByText, 
      getByLabelText, 
      findByText
    } = render(<App/>)

    const input = getByPlaceholderText('Nova tarefa')
    expect(input).toBeInTheDocument()

    const button = getByText('Adicionar')
    expect(button).toBeInTheDocument()
    
    const select = getByLabelText(/Selecione o dia/)
    expect(select).toBeInTheDocument()
    
    expect(axios.get).toHaveBeenCalled()

    const tarefa = await findByText("teste")
    expect(tarefa).toBeInTheDocument()
  })
})

describe('Criar uma tarefa', () => {
  test('Cria uma tarefa com sucesso', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "text": "teste",
          "day": "seg",
          "id": "mHzFUdoGN7OWm14WSHXa"
        }
      ]
    })
    axios.post = jest.fn().mockResolvedValue()

    const {
      getByPlaceholderText, 
      getByText, 
      getByLabelText,
      getByTestId
    } = render(<App/>)

    const input = getByPlaceholderText('Nova tarefa')
    await userEvent.type(input, "teste")
    expect(input).toHaveValue("teste")
    
    const select = getByLabelText(/Selecione o dia/)
    const option = getByTestId("seg")
    userEvent.selectOptions(select, option)
    expect(select).toHaveValue("seg")

    const button = getByText('Adicionar')
    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-artur-candelori', {
      text: "teste",
      day: "seg"
    })

    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
      expect(input).toHaveValue("")
    })
  })
})

describe('Verifica se a tarefa aparece no dia certo', () => {
  test('Segunda', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "day": "seg",
          "texto": "teste seg",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        }
      ]
    })
    axios.post = jest.fn().mockResolvedValue()
    
    const {
      getByPlaceholderText, 
      getByText, 
      getByLabelText,
      getByTestId
    } = render(<App/>)
    
    await userEvent.type(getByPlaceholderText('Nova tarefa'), "teste seg")
    userEvent.selectOptions(getByLabelText(/Selecione o dia/), getByTestId("seg").value)
    userEvent.click(getByText('Adicionar'))
    expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-artur-candelori', {
      text: "teste seg",
      day: "seg"
    })

    await wait (() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
      expect(getByPlaceholderText('Nova tarefa')).toHaveValue("")
    })

    const post = getByTestId("teste seg")
    expect(post).toBeInTheDocument()
  })

  test('Terça', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "day": "ter",
          "texto": "teste ter",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        }
      ]
    })
    axios.post = jest.fn().mockResolvedValue()
    
    const {
      getByPlaceholderText, 
      getByText, 
      getByLabelText,
      getByTestId
    } = render(<App/>)
    
    await userEvent.type(getByPlaceholderText('Nova tarefa'), "teste ter")
    userEvent.selectOptions(getByLabelText(/Selecione o dia/), getByTestId("ter").value)
    userEvent.click(getByText('Adicionar'))
    expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-artur-candelori', {
      text: "teste ter",
      day: "ter"
    })

    await wait (() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
      expect(getByPlaceholderText('Nova tarefa')).toHaveValue("")
    })

    const post = getByTestId("teste ter")
    expect(post).toBeInTheDocument()
  })

  test('Quarta', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "day": "qua",
          "texto": "teste qua",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        }
      ]
    })
    axios.post = jest.fn().mockResolvedValue()
    
    const {
      getByPlaceholderText, 
      getByText, 
      getByLabelText,
      getByTestId
    } = render(<App/>)
    
    await userEvent.type(getByPlaceholderText('Nova tarefa'), "teste qua")
    userEvent.selectOptions(getByLabelText(/Selecione o dia/), getByTestId("qua").value)
    userEvent.click(getByText('Adicionar'))
    expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-artur-candelori', {
      text: "teste qua",
      day: "qua"
    })

    await wait (() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
      expect(getByPlaceholderText('Nova tarefa')).toHaveValue("")
    })

    const post = getByTestId("teste qua")
    expect(post).toBeInTheDocument()
  })

  test('Quinta', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "day": "qui",
          "texto": "teste qui",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        }
      ]
    })
    axios.post = jest.fn().mockResolvedValue()
    
    const {
      getByPlaceholderText, 
      getByText, 
      getByLabelText,
      getByTestId
    } = render(<App/>)
    
    await userEvent.type(getByPlaceholderText('Nova tarefa'), "teste qui")
    userEvent.selectOptions(getByLabelText(/Selecione o dia/), getByTestId("qui").value)
    userEvent.click(getByText('Adicionar'))
    expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-artur-candelori', {
      text: "teste qui",
      day: "qui"
    })

    await wait (() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
      expect(getByPlaceholderText('Nova tarefa')).toHaveValue("")
    })

    const post = getByTestId("teste qui")
    expect(post).toBeInTheDocument()
  })

  test('Sexta', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "day": "sex",
          "texto": "teste sex",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        }
      ]
    })
    axios.post = jest.fn().mockResolvedValue()
    
    const {
      getByPlaceholderText, 
      getByText, 
      getByLabelText,
      getByTestId
    } = render(<App/>)
    
    await userEvent.type(getByPlaceholderText('Nova tarefa'), "teste sex")
    userEvent.selectOptions(getByLabelText(/Selecione o dia/), getByTestId("sex").value)
    userEvent.click(getByText('Adicionar'))
    expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-artur-candelori', {
      text: "teste sex",
      day: "sex"
    })

    await wait (() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
      expect(getByPlaceholderText('Nova tarefa')).toHaveValue("")
    })

    const post = getByTestId("teste sex")
    expect(post).toBeInTheDocument()
  })

  test('Sábado', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "day": "sab",
          "texto": "teste sab",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        }
      ]
    })
    axios.post = jest.fn().mockResolvedValue()
    
    const {
      getByPlaceholderText, 
      getByText, 
      getByLabelText,
      getByTestId
    } = render(<App/>)
    
    await userEvent.type(getByPlaceholderText('Nova tarefa'), "teste sab")
    userEvent.selectOptions(getByLabelText(/Selecione o dia/), getByTestId("sab").value)
    userEvent.click(getByText('Adicionar'))
    expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-artur-candelori', {
      text: "teste sab",
      day: "sab"
    })

    await wait (() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
      expect(getByPlaceholderText('Nova tarefa')).toHaveValue("")
    })

    const post = getByTestId("teste sab")
    expect(post).toBeInTheDocument()
  })

  test('Domingo', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "day": "dom",
          "texto": "teste dom",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        }
      ]
    })
    axios.post = jest.fn().mockResolvedValue()
    
    const {
      getByPlaceholderText, 
      getByText, 
      getByLabelText,
      getByTestId
    } = render(<App/>)
    
    await userEvent.type(getByPlaceholderText('Nova tarefa'), "teste dom")
    userEvent.selectOptions(getByLabelText(/Selecione o dia/), getByTestId("dom").value)
    userEvent.click(getByText('Adicionar'))
    expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-artur-candelori', {
      text: "teste dom",
      day: "dom"
    })

    await wait (() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
      expect(getByPlaceholderText('Nova tarefa')).toHaveValue("")
    })

    const post = getByTestId("teste dom")
    expect(post).toBeInTheDocument()
  })
})