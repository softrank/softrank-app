import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Card from '../../../components/Card/Card';
import { STab, STabList, STabPanel, STabs } from '../../../components/Tab/Tab';
import Wrapper from '../Layout/Wrapper';

export default function HomePage() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <>
      <Wrapper>
        <Card>
          <STabs
            defaultIndex={tabIndex}
            onSelect={(index: number) => setTabIndex(index)}
          >
            <STabList>
              <STab>Tab 1</STab>
              <STab disabled>Tab disabled</STab>
              <STab>Tab 3</STab>
            </STabList>
            <STabPanel>Panel 1</STabPanel>
            <STabPanel>Panel 2</STabPanel>
            <STabPanel>Panel 3</STabPanel>
          </STabs>
        </Card>
      </Wrapper>
    </>
  );
}
