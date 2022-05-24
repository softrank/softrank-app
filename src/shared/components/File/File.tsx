import { defaultStyles, FileIcon } from 'react-file-icon';

import { Label } from '../Form';
import { FileContainer, FileWrapper } from '../Form/FileInput/styled';
import { DownloadIcon } from '../Buttons/IconButtons/IconButtons';

interface Props {
  label: string;
  path: any;
  source: string;
}

export const File = (props: Props) => {
  const { label, path, source } = props;

  const splits = path.split('.');
  const type: undefined = splits.at(-1);

  return (
    <div style={{ width: '100%' }}>
      <Label>{label}</Label>
      <FileContainer>
        <FileWrapper>
          <FileIcon extension={type} {...defaultStyles[type!]} />
        </FileWrapper>
        <div>{path}</div>
        <a href={source} download={path} target="_blank">
          <DownloadIcon />
        </a>
      </FileContainer>
    </div>
  );
};
