import { Dispatch, SetStateAction } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { Button } from 'shared/components';
import { ModelEntity } from 'shared/models/modelEntity';
import { Options } from 'views/Model/ModelDetails/styled';

const LevelItem = styled.div`
  width: 100%;
  padding: 1em;
  margin-bottom: 0.6rem;

  font-size: 16px;

  outline: none;
  border-radius: var(--radius);
  border: 2px solid var(--gray-100);

  background: var(--white);
`;

const Info = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 0 0.2rem;
  margin-bottom: 1.4rem;
`;

interface Props {
  setTabIndex: Dispatch<SetStateAction<number>>;
  model: ModelEntity;
  setModel: Dispatch<SetStateAction<ModelEntity>>;
}

export const LevelsHierarchyTab = ({ setTabIndex, model, setModel }: Props) => {
  const submitHierarchy = () => {
    console.log(model.modelLevels);
    setTabIndex(2);
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const tempModel = model;
    const [reorderedItem] = tempModel.modelLevels.splice(
      result.source.index,
      1
    );
    tempModel.modelLevels.splice(result.destination.index, 0, reorderedItem);
    setModel(tempModel);
  };

  return (
    <>
      <Info>Organize a hierarquia dos níveis de forma descrescente.</Info>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="levels">
          {(providedDroppable) => (
            <div
              style={{ marginBottom: '2rem' }}
              {...providedDroppable.droppableProps}
              ref={providedDroppable.innerRef}
            >
              {model.modelLevels.map(({ id, name, initial }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <LevelItem
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {`Nível: ${initial}, ${name}`}
                      </LevelItem>
                    )}
                  </Draggable>
                );
              })}
              {providedDroppable.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Options>
        <Button secondary onClick={() => setTabIndex(1)}>
          Voltar
        </Button>
        <Button onClick={() => submitHierarchy()}>Próximo</Button>
      </Options>
    </>
  );
};
