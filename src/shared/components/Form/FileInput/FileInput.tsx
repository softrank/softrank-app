import { Dispatch, SetStateAction, useCallback, useState } from 'react';
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
  width?: string;
}

export const FileInput = ({
  label,
  name,
  control,
  rules,
  errors,
  multiple,
  reset,
  getValues,
  width,
}: Props) => {
  const [filesList, setFilesList] = useState<any[]>([]);
  const [paths, setPaths] = useState<string[]>([]);

  const removeFiles = (listIndex: number, fileIndex: number) => {
    const copyFiles = [...filesList];
    const copyPaths = [...paths];

    const filePath = copyFiles[listIndex][fileIndex].path;
    setPaths(copyPaths.filter((path) => path !== filePath));

    copyFiles[listIndex].splice(fileIndex, 1);
    const filterFiles = copyFiles.filter((line) => line.length > 0);
    reset({ ...getValues(), [name]: filterFiles });
    setFilesList(filterFiles);
  };

  return (
    <div style={{ width: width ?? '100%' }}>
      {label ?? <Label>{label}</Label>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange } }) => (
          <Dropzone
            multiple={multiple}
            onChange={(e: any) =>
              onChange(multiple ? e.target.files : e.target.files[0])
            }
            filesList={filesList}
            setFilesList={setFilesList}
            removeFiles={removeFiles}
            paths={paths}
            setPaths={setPaths}
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
  filesList: any[];
  setFilesList: React.Dispatch<React.SetStateAction<any[]>>;
  removeFiles: (listIndex: number, fileIndex: number) => void;
  paths: string[];
  setPaths: Dispatch<SetStateAction<string[]>>;
}

const Dropzone = ({
  multiple,
  onChange,
  filesList,
  setFilesList,
  removeFiles,
  paths,
  setPaths,
}: DropzoneProps) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (acceptedFiles.length > 0) {
        const copyFiles = [...filesList];
        const copyPaths = [...paths];
        const filteredFiles = acceptedFiles.filter(
          (file: any) => !paths.includes(file.path)
        );
        filteredFiles.map((file: any) => copyPaths.push(file.path));
        copyFiles.push(filteredFiles);
        setFilesList(copyFiles);
        setPaths(copyPaths);
      }
    },
    [setFilesList, filesList, setPaths, paths]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
  });

  return (
    <>
      {((!multiple && filesList.length === 0) || multiple) && (
        <StyledDropzone {...getRootProps()} isActive={isDragActive}>
          <input {...getInputProps({ onChange })} multiple />
          {isDragActive ? (
            <ZoneTitle>Solte os arquivos aqui</ZoneTitle>
          ) : (
            <ZoneTitle>Selecione ou arraste arquivos aqui</ZoneTitle>
          )}
        </StyledDropzone>
      )}
      <FilesContainer>
        {filesList.map((files, index) => {
          return files.map((file: any, fileIndex = index) => {
            const splits = file.path.split('.');
            const type: undefined = splits.at(-1);
            return (
              <FileContainer key={fileIndex}>
                <FileWrapper>
                  <FileIcon
                    extension={type}
                    {...(defaultStyles[type!] as any)}
                  />
                </FileWrapper>
                <div>{files[0].path}</div>
                <RemoveFileButton
                  onClick={() => removeFiles(index, fileIndex)}
                />
              </FileContainer>
            );
          });
        })}
      </FilesContainer>
    </>
  );
};
