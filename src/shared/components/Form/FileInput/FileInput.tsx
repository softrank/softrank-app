import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
} from 'react-hook-form';
import { ErrorsNote, Label } from '..';
import { StyledDropzone, ZoneTitle } from './styled';

interface Props {
  label: string;
  name: string;
  control: Control<any>;
  rules?: any;
  errors?: DeepMap<FieldValues, FieldError>;
  multiple?: boolean;
}

export const FileInput = (props: Props) => {
  const { label, name, control, rules, errors, multiple } = props;

  const [files, setFiles] = useState<any[]>([]);

  return (
    <div style={{ width: '100%' }}>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <Dropzone
            multiple={multiple}
            onChange={(e: any) =>
              onChange(multiple ? e.target.files : e.target.files[0])
            }
            files={files}
            setFiles={setFiles}
          />
        )}
      />
      {errors && <ErrorsNote error={errors} />}
    </div>
  );
};

interface DropzoneProps {
  multiple?: boolean;
  onChange: any;
  files: any[];
  setFiles: React.Dispatch<React.SetStateAction<any[]>>;
}

const Dropzone = ({ multiple, onChange, files, setFiles }: DropzoneProps) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
    [setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    noKeyboard: true,
  });

  return (
    <StyledDropzone {...getRootProps()} isActive={isDragActive}>
      <input {...getInputProps({ onChange })} />
      {files.length <= 0 ? (
        isDragActive ? (
          <ZoneTitle>Solte os arquivos aqui</ZoneTitle>
        ) : (
          <ZoneTitle>Selecione ou arraste arquivos aqui</ZoneTitle>
        )
      ) : (
        files.map((file: any, index) => <p key={index}>{file.path}</p>)
      )}
    </StyledDropzone>
  );
};
