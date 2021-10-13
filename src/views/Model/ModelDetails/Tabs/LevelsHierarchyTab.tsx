import { Dispatch, SetStateAction } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { Button } from 'shared/components';
import { ModelDto } from 'shared/dtos/modelDto';
import { ModelEntity } from 'shared/models/modelEntity';
import { Info, LevelItem, Options } from 'views/Model/ModelDetails/styled';

interface Props {
  model: ModelEntity;
  setModel: Dispatch<SetStateAction<ModelEntity>>;
  setTabIndex: Dispatch<SetStateAction<number>>;
  createOrUpdateModel: (data: ModelDto, tabIndex: number) => Promise<void>;
  loading: boolean;
}

export const LevelsHierarchyTab = ({
  model,
  setModel,
  setTabIndex,
  createOrUpdateModel,
  loading,
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

  const submitHierarchy = async () => {
    const modelDto: ModelDto = {
      id: model.id,
      name: model.name,
      year: new Date(model.year),
      description: model.description,
      modelLevels: model.modelLevels,
      modelProcesses: model.modelProcesses,
    };

    await createOrUpdateModel(modelDto, 2);
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
        <Button onClick={() => submitHierarchy()} loading={loading}>
          Próximo
        </Button>
      </Options>
    </>
  );
};
