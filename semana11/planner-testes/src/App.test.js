import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import App from './App';

axios.get = jest.fn()

describe('Renderização inicial', () => {
  test('Input existe na tela', () => {
    const {getByPlaceholderText} = render(<App/>)
    const input = getByPlaceholderText(/Nova tarefa/)
    expect(input).toBeInTheDocument
  })

  test('Botão existe na tela', () => {
    const {getByText} = render(<App/>)
    const button = getByText(/Adicionar/)
    expect(button).toBeInTheDocument
  })

  test('Select existe na tela', () => {
    const {getByLabelText} = render(<App/>)
    const select = getByLabelText(/Selecione o dia/)
    expect(select).toBeInTheDocument
  })

  test('Faz requisição das tarefas', () => {
    render(<App/>)
    expect(axios.get).toHaveBeenCalled()
  })

  test('Mostra na tela as tarefas da requisição', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "text": "teste",
          "day": "seg",
          "id": "mHzFUdoGN7OWm14WSHXa"
        }
      ]
    })
    const {findByText} = render(<App/>)

    await findByText("teste")
  })
})