import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountDownButton, TaskInput, } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>

          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" list="task-sugestions" placeholder="Dê um nome para o seu projeto" />

          <datalist id="task-sugestions">
            <option value="Selaz" />
            <option value="Comercial Maanaim" />
            <option value="Projeto pessoal" />
          </datalist>

          <label htmlFor="minutosAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={120}
          />

          <span>minutos.</span>

        </FormContainer>


        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>


        <StartCountDownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>

      </form>

    </HomeContainer >
  )
}