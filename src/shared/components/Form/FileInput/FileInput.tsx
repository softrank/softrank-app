import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { defaultStyles, FileIcon } from 'react-file-icon';
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
  UseFormGetValues,
  UseFormReset,
} from 'react-hook-form';

import { ErrorsNote, Label } from '..';
import {
  FileContainer,
  FilesContainer,
  FileWrapper,
  RemoveFileButton,
  StyledDropzone,
  ZoneTitle,
} from './styled';

interface Props {
  label: string;
  name: string;
  control: Control<any>;
  rules?: any;
  errors?: DeepMap<FieldValues, FieldError>;
  multiple?: boolean;
  reset: UseFormReset<any>;
  getValues: UseFormGetValues<any>;
}

export const FileInput = (props: Props) => {
  const { label, name, control, rules, errors, multiple, reset, getValues } =
    props;

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
            value={value}
            reset={reset}
            getValues={getValues}
            name={name}
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
  value: any;
  reset: UseFormReset<any>;
  getValues: UseFormGetValues<any>;
  name: string;
}

const Dropzone = ({
  multiple,
  onChange,
  files,
  setFiles,
  reset,
  getValues,
  name,
}: DropzoneProps) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const copyfiles = [...files];
      copyfiles.push(acceptedFiles);
      setFiles(copyfiles);
    },
    [setFiles, files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    noKeyboard: true,
  });

  const removeFiles = () => {
    reset({ ...getValues(), [name]: undefined });
    setFiles([]);
  };

  return (
    <>
      <StyledDropzone {...getRootProps()} isActive={isDragActive}>
        <input {...getInputProps({ onChange })} multiple />
        {isDragActive ? (
          <ZoneTitle>Solte os arquivos aqui</ZoneTitle>
        ) : (
          <ZoneTitle>Selecione ou arraste arquivos aqui</ZoneTitle>
        )}
      </StyledDropzone>
      <FilesContainer>
        {files.map((file) => {
          const splits = file[0].path.split('.');
          const type: undefined = splits.at(-1);
          console.log(type);
          return (
            <FileContainer>
              <FileWrapper>
                <FileIcon extension={type} {...defaultStyles[type!]} />
              </FileWrapper>
              <div>{file[0].path}</div>
              <RemoveFileButton onClick={() => removeFiles()} />
            </FileContainer>
          );
        })}
      </FilesContainer>
    </>
  );
};
