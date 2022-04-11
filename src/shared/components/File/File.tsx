import { defaultStyles, FileIcon } from 'react-file-icon';
import { Path } from 'typescript';

import { Label } from '../Form';
import { FileContainer, FileWrapper } from '../Form/FileInput/styled';

interface Props {
  label: string;
  file?: any;
  path: string;
}

export const File = (props: Props) => {
  const { label, file, path } = props;

  // const splits = file.path.split('.');
  // const type: undefined = splits.at(-1);
  const type = 'docx';
  return (
    <div style={{ width: '100%' }}>
      <Label>{label}</Label>
      <FileContainer>
        <FileWrapper>
          <FileIcon extension={type} {...defaultStyles[type!]} />
        </FileWrapper>
        <div>{path}</div>
      </FileContainer>
    </div>
  );
};
