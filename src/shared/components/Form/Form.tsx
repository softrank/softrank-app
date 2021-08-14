import React from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  defaultValues?: {};
  children: JSX.Element[] | JSX.Element;
  onSubmit: () => {};
}

export const Form = (props: Props) => {
  const { defaultValues, children, onSubmit } = props;

  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
};
