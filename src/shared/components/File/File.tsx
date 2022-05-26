import { defaultStyles, FileIcon } from 'react-file-icon';

import { Label } from '../Form';
import { FileContainer, FileWrapper } from '../Form/FileInput/styled';
import { DownloadIcon } from '../Buttons/IconButtons/IconButtons';

interface Props {
  label?: string;
  fileName: any;
  url: string;
}

export const File = (props: Props) => {
  const { label, fileName, url } = props;

  const splits = fileName.split('.');
  const type: undefined = splits.at(-1);

  return (
    <div style={{ width: '100%' }}>
      {label && <Label>{label}</Label>}
      <FileContainer>
        <FileWrapper>
          <FileIcon extension={type} {...defaultStyles[type!]} />
        </FileWrapper>
        <div>{fileName}</div>
        <a href={url} download={fileName} target="_blank" rel="noreferrer">
          <DownloadIcon />
        </a>
      </FileContainer>
    </div>
  );
};
