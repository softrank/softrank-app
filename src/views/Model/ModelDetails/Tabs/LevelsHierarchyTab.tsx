import { Dispatch, SetStateAction } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { Button } from 'shared/components';
import { ModelEntity } from 'shared/models/modelEntity';
import { Info, LevelItem, Options } from 'views/Model/ModelDetails/styled';

interface Props {
  setTabIndex: Dispatch<SetStateAction<number>>;
  model: ModelEntity;
  setModel: Dispatch<SetStateAction<ModelEntity>>;
  setProcessesTabDisabled: Dispatch<SetStateAction<boolean>>;
}

export const LevelsHierarchyTab = ({
  setTabIndex,
  model,
  setModel,
  setProcessesTabDisabled,
}: Props) => {
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

  const submitHierarchy = () => {
    setProcessesTabDisabled(false);
    setTabIndex(2);
  };

  return (
    <>
      <Info>Organize a hierarquia dos níveis de forma crescente.</Info>
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
        <Button secondary onClick={() => setTabIndex(0)}>
          Voltar
        </Button>
        <Button onClick={() => submitHierarchy()}>Próximo</Button>
      </Options>
    </>
  );
};
